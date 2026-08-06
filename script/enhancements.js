'use strict';

(function () {

    const jeTacScreen = window.matchMedia && window.matchMedia('(hover: none)').matches;
    const smanjenPokret = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function initScrollProgress() {
        let traka = document.getElementById('scroll-progress');
        if (!traka) {
            traka = document.createElement('div');
            traka.id = 'scroll-progress';
            document.body.prepend(traka);
        }

        function osveziTraku() {
            const visinaDok = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const napredak = visinaDok > 0 ? (window.scrollY / visinaDok) * 100 : 0;
            traka.style.width = napredak + '%';
        }

        window.addEventListener('scroll', osveziTraku, { passive: true });
        window.addEventListener('resize', osveziTraku);
        osveziTraku();
    }

    function initCursorGlow() {
        if (jeTacScreen) return;

        let glow = document.getElementById('cursor-glow');
        if (!glow) {
            glow = document.createElement('div');
            glow.id = 'cursor-glow';
            document.body.appendChild(glow);
        }

        let ciljX = window.innerWidth / 2;
        let ciljY = window.innerHeight / 2;
        let trenX = ciljX;
        let trenY = ciljY;
        let animacijaAktivna = false;

        function petlja() {
            trenX += (ciljX - trenX) * 0.15;
            trenY += (ciljY - trenY) * 0.15;
            glow.style.transform = `translate(${trenX}px, ${trenY}px) translate(-50%, -50%)`;

            if (Math.abs(ciljX - trenX) > 0.5 || Math.abs(ciljY - trenY) > 0.5) {
                requestAnimationFrame(petlja);
            } else {
                animacijaAktivna = false;
            }
        }

        window.addEventListener('mousemove', (e) => {
            ciljX = e.clientX;
            ciljY = e.clientY;
            if (!animacijaAktivna) {
                animacijaAktivna = true;
                requestAnimationFrame(petlja);
            }
        }, { passive: true });
    }

    function primeniTilt(el) {
        const jacina = 10; 

        function pomeraj(e) {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.transform = `rotateX(${(-y * jacina).toFixed(2)}deg) rotateY(${(x * jacina).toFixed(2)}deg) translateY(-4px)`;
        }

        function resetuj() {
            el.style.transform = '';
        }

        el.addEventListener('mousemove', pomeraj);
        el.addEventListener('mouseleave', resetuj);
    }

    function initTilt(root) {
        if (jeTacScreen || smanjenPokret) return;
        const kontejner = root || document;
        kontejner.querySelectorAll('.tilt-card:not([data-tilt-init])').forEach(el => {
            el.setAttribute('data-tilt-init', '1');
            primeniTilt(el);
        });
    }

    function initGrainOverlay() {
        if (document.getElementById('grain-overlay')) return;
        const grain = document.createElement('div');
        grain.id = 'grain-overlay';
        grain.setAttribute('aria-hidden', 'true');
        document.body.appendChild(grain);
    }

    function initMagnetic() {
        if (document.body.dataset.magnet === 'off') return;
        if (window.Common && typeof window.Common.initMagneticButtons === 'function') {
            window.Common.initMagneticButtons();
        }
    }

    window.Enhancements = { initTilt, initMagnetic };

    document.addEventListener('DOMContentLoaded', () => {
        initScrollProgress();
        initCursorGlow();
        initTilt();
        initGrainOverlay();
        initMagnetic();
    });

})();