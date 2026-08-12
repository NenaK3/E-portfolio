'use strict';

window.Common = (function () {

    const meseciSRB = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];
    const meseciENG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const prevodFootera = {
        SRB: '©Copyright by Nena Kozić',
        ENG: '©Copyright by Nena Kozić'
    };

    // -----------------------------------------------------------------
    // Footer: datum i copyright tekst 
    // -----------------------------------------------------------------
    function formatDatum(jezik) {
        const sada = new Date();
        const meseci = jezik === 'SRB' ? meseciSRB : meseciENG;
        return `${meseci[sada.getMonth()]} ${sada.getFullYear()}.`;
    }

    function azurirajFooter(jezik) {
        const copyEl = document.getElementById('idx-footer-copy');
        const datumEl = document.getElementById('idx-footer-datum');
        if (copyEl) copyEl.innerText = prevodFootera[jezik] || prevodFootera.SRB;
        if (datumEl) datumEl.innerText = formatDatum(jezik);
    }

    // -----------------------------------------------------------------
    // Tamni / svetli režim 
    // -----------------------------------------------------------------
    function primeniRezimInterno(rezim) {
        document.body.classList.toggle('light-mode', rezim === 'light');

        const themeBtn = document.getElementById('nav-theme-btn') || document.getElementById('theme-btn');
        if (themeBtn) {
            themeBtn.innerHTML = rezim === 'light'
                ? '<i class="fa-solid fa-moon"></i>'
                : '<i class="fa-solid fa-sun"></i>';
            themeBtn.setAttribute('aria-pressed', rezim === 'light' ? 'true' : 'false');
        }

        const metaTema = document.getElementById('theme-color-meta');
        if (metaTema) metaTema.setAttribute('content', rezim === 'light' ? '#f8fafc' : '#0f172a');
    }

    // -----------------------------------------------------------------
    // Promena teme uz animaciju "talasa" 
    // -----------------------------------------------------------------
    function primeniRezim(rezim) {
        const smanjenoKretanje = window.matchMedia
            && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const podrzanoTranzicije = typeof document.startViewTransition === 'function';

        if (!podrzanoTranzicije || smanjenoKretanje) {
            primeniRezimInterno(rezim);
            return;
        }

        const dugme = document.getElementById('nav-theme-btn') || document.getElementById('theme-btn');
        if (dugme) {
            const r = dugme.getBoundingClientRect();
            document.documentElement.style.setProperty('--tema-x', `${r.left + r.width / 2}px`);
            document.documentElement.style.setProperty('--tema-y', `${r.top + r.height / 2}px`);
        }

        document.documentElement.classList.add('tema-val-u-toku');
        const tranzicija = document.startViewTransition(() => {
            primeniRezimInterno(rezim);
        });
        tranzicija.finished.finally(() => {
            document.documentElement.classList.remove('tema-val-u-toku');
        });
    }

    // -----------------------------------------------------------------
    // Dugme za jezik — ažurira tekst i aria-pressed stanje
    // -----------------------------------------------------------------
    function azurirajJezikDugme(jezik) {
        const langBtn = document.getElementById('nav-lang-btn') || document.getElementById('lang-btn');
        if (langBtn) {
            langBtn.setAttribute('aria-pressed', jezik === 'ENG' ? 'true' : 'false');
        }
    }

    // -----------------------------------------------------------------
    // Dropdown meni za "Edukacija" u navigaciji (samo u IT modu)
    // -----------------------------------------------------------------
    function initEduDropdown(mod) {
        const wrap = document.getElementById('nav-edukacija-wrap');
        if (!wrap) return;
        const caret = document.getElementById('nav-edukacija-caret');

        if (mod !== 'IT' || !caret) {
            wrap.classList.add('no-dropdown');
            return;
        }

        caret.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            const otvoreno = wrap.classList.toggle('open');
            caret.setAttribute('aria-expanded', otvoreno);
        });

        document.addEventListener('click', event => {
            if (!wrap.contains(event.target)) {
                wrap.classList.remove('open');
                caret.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && wrap.classList.contains('open')) {
                wrap.classList.remove('open');
                caret.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // -----------------------------------------------------------------
    // Scroll-triggered fade-in animacija (IntersectionObserver)
    // -----------------------------------------------------------------
    function initFadeInReveal(root) {
        const kontejner = root || document;
        const elementi = Array.from(kontejner.querySelectorAll('.fade-in-up:not(.fade-in-visible)'));
        if (kontejner.nodeType === 1 && kontejner.classList && kontejner.classList.contains('fade-in-up') && !kontejner.classList.contains('fade-in-visible')) {
            elementi.push(kontejner);
        }
        if (!elementi.length) return;

        if (!('IntersectionObserver' in window)) {
            elementi.forEach(e => e.classList.add('fade-in-visible'));
            return;
        }

        const posmatrac = new IntersectionObserver((unosi, obs) => {
            unosi.forEach(unos => {
                if (unos.isIntersecting) {
                    unos.target.classList.add('fade-in-visible');
                    obs.unobserve(unos.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

        elementi.forEach(e => posmatrac.observe(e));
    }

    // -----------------------------------------------------------------
    // Pristupačnost modalnih prozora
    // -----------------------------------------------------------------
    const FOKUSABILNI_SELEKTOR = 'a[href], button:not([disabled]), textarea, input, select, iframe, [tabindex]:not([tabindex="-1"])';
    let poslednjiFokus = null;

    function otvoriModal(modalEl) {
        if (!modalEl) return;
        poslednjiFokus = document.activeElement;

        const fokusabilni = modalEl.querySelectorAll(FOKUSABILNI_SELEKTOR);
        if (fokusabilni.length) fokusabilni[0].focus();

        function handleTab(event) {
            if (event.key !== 'Tab') return;
            const stavke = Array.from(modalEl.querySelectorAll(FOKUSABILNI_SELEKTOR))
                .filter(el => el.offsetParent !== null);
            if (!stavke.length) return;
            const prva = stavke[0];
            const poslednja = stavke[stavke.length - 1];

            if (event.shiftKey && document.activeElement === prva) {
                event.preventDefault();
                poslednja.focus();
            } else if (!event.shiftKey && document.activeElement === poslednja) {
                event.preventDefault();
                prva.focus();
            }
        }

        modalEl._commonTabHandler = handleTab;
        document.addEventListener('keydown', handleTab);
    }

    function zatvoriModal(modalEl) {
        if (!modalEl) return;
        if (modalEl._commonTabHandler) {
            document.removeEventListener('keydown', modalEl._commonTabHandler);
            modalEl._commonTabHandler = null;
        }
        if (poslednjiFokus && typeof poslednjiFokus.focus === 'function') {
            poslednjiFokus.focus();
        }
        poslednjiFokus = null;
    }

    // -----------------------------------------------------------------
    // "Nazad na vrh" dugme — zajednička logika za sve stranice
    // -----------------------------------------------------------------
    let scrollTopVezan = false;

    function initScrollTopButton() {
        const dugme = document.getElementById('scroll-top-btn');
        if (!dugme || scrollTopVezan) return;
        scrollTopVezan = true;

        const osveziVidljivost = () => {
            dugme.classList.toggle('visible', window.scrollY > 400);
        };

        window.addEventListener('scroll', osveziVidljivost, { passive: true });
        dugme.addEventListener('click', () => {
            const smanjenoKretanje = window.matchMedia
                && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: smanjenoKretanje ? 'auto' : 'smooth' });
        });

        osveziVidljivost();
    }

    // -----------------------------------------------------------------
    // "Magnetni" hover na dugmadima — blagi pomeraj ka kursoru
    // -----------------------------------------------------------------
    const MAGNET_SELEKTOR = '.control-btn, .selection-card button, .cv-download-btn, ' +
        '.error-actions button, .switch-btn, .tab-btn, .scroll-top-btn';

    function primeniMagnet(el) {
        const jacina = 0.28;
        const maxPomeraj = 7;

        function pomeraj(e) {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            const px = Math.max(-maxPomeraj, Math.min(maxPomeraj, x * jacina));
            const py = Math.max(-maxPomeraj, Math.min(maxPomeraj, y * jacina));
            el.style.transform = `translate(${px.toFixed(2)}px, ${py.toFixed(2)}px)`;
        }

        function resetuj() {
            el.style.transform = '';
        }

        el.addEventListener('mousemove', pomeraj);
        el.addEventListener('mouseleave', resetuj);
        el.addEventListener('blur', resetuj);
    }

    function initMagneticButtons(root) {
        const nemaHover = window.matchMedia && window.matchMedia('(hover: none)').matches;
        const smanjenoKretanje = window.matchMedia
            && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (nemaHover || smanjenoKretanje) return;

        const kontejner = root || document;
        kontejner.querySelectorAll(MAGNET_SELEKTOR + ':not([data-magnet-init])').forEach(el => {
            el.setAttribute('data-magnet-init', '1');
            primeniMagnet(el);
        });
    }

    // -----------------------------------------------------------------
    // Dugme "Kopiraj kod"
    // -----------------------------------------------------------------
    function kopirajTekst(tekst, dugmeEl, poruke) {
        const uspeh = poruke && poruke.uspeh ? poruke.uspeh : 'Kopirano!';
        const greska = poruke && poruke.greska ? poruke.greska : 'Greška pri kopiranju';

        const prikaziPovratnuInfo = (ok) => {
            if (!dugmeEl) return;
            const originalHTML = dugmeEl.innerHTML;
            dugmeEl.innerHTML = ok
                ? `<i class="fa-solid fa-check"></i> ${uspeh}`
                : `<i class="fa-solid fa-xmark"></i> ${greska}`;
            dugmeEl.classList.toggle('copy-uspesno', ok);
            setTimeout(() => {
                dugmeEl.innerHTML = originalHTML;
                dugmeEl.classList.remove('copy-uspesno');
            }, 2000);
        };

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(tekst)
                .then(() => prikaziPovratnuInfo(true))
                .catch(() => prikaziPovratnuInfo(false));
        } else {
            try {
                const tmp = document.createElement('textarea');
                tmp.value = tekst;
                tmp.style.position = 'fixed';
                tmp.style.opacity = '0';
                document.body.appendChild(tmp);
                tmp.select();
                document.execCommand('copy');
                document.body.removeChild(tmp);
                prikaziPovratnuInfo(true);
            } catch (e) {
                prikaziPovratnuInfo(false);
            }
        }
    }

    // -----------------------------------------------------------------
    // Custom padajuća lista za sortiranje — isti vizuelni jezik kao
    // nav-dropdown-menu (Edukacija u navigaciji)
    // -----------------------------------------------------------------
    let sortDropdownOtvoren = null;

    function zatvoriSortDropdown() {
        if (!sortDropdownOtvoren) return;
        sortDropdownOtvoren.classList.remove('open');
        const dugme = sortDropdownOtvoren.querySelector('.sort-dropdown-toggle');
        if (dugme) dugme.setAttribute('aria-expanded', 'false');
        sortDropdownOtvoren = null;
    }

    function renderSortDropdown(kontejner, opcije, aktivnaVrednost, onIzbor, ikonaKlasa, kratkiNaslov) {
        if (!kontejner) return;
        const aktivnaOpcija = opcije.find(o => o.value === aktivnaVrednost) || opcije[0];
        const ikonaDeo = ikonaKlasa ? `<i class="${ikonaKlasa} sort-dropdown-icon"></i>` : '';
        const kratkaOznakaDeo = kratkiNaslov
            ? `<span class="sort-dropdown-label sort-dropdown-label--kratka">${kratkiNaslov}</span>`
            : '';

        kontejner.classList.add('sort-dropdown');
        kontejner.innerHTML = `
            <button type="button" class="sort-dropdown-toggle" aria-haspopup="listbox" aria-expanded="false">
                ${ikonaDeo}
                <span class="sort-dropdown-label sort-dropdown-label--puna">${aktivnaOpcija ? aktivnaOpcija.label : ''}</span>
                ${kratkaOznakaDeo}
                <i class="fa-solid fa-chevron-down sort-dropdown-caret"></i>
            </button>
            <div class="sort-dropdown-menu" role="listbox">
                ${opcije.map(o => `<button type="button" class="sort-dropdown-item${o.value === aktivnaVrednost ? ' aktivna' : ''}" role="option" aria-selected="${o.value === aktivnaVrednost}" data-value="${o.value}">${o.label}</button>`).join('')}
            </div>`;

        const dugmeToggle = kontejner.querySelector('.sort-dropdown-toggle');

        dugmeToggle.addEventListener('click', event => {
            event.stopPropagation();
            const trebaOtvoriti = !kontejner.classList.contains('open');
            zatvoriSortDropdown();
            if (trebaOtvoriti) {
                kontejner.classList.add('open');
                dugmeToggle.setAttribute('aria-expanded', 'true');
                sortDropdownOtvoren = kontejner;
            }
        });

        kontejner.querySelectorAll('.sort-dropdown-item').forEach(stavka => {
            stavka.addEventListener('click', () => {
                zatvoriSortDropdown();
                onIzbor(stavka.dataset.value);
            });
        });
    }

    if (!window._sortDropdownGlobalniListeneri) {
        document.addEventListener('click', zatvoriSortDropdown);
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') zatvoriSortDropdown();
        });
        window._sortDropdownGlobalniListeneri = true;
    }

    return {
        meseciSRB,
        meseciENG,
        formatDatum,
        azurirajFooter,
        primeniRezim,
        azurirajJezikDugme,
        initEduDropdown,
        initFadeInReveal,
        initScrollTopButton,
        initMagneticButtons,
        otvoriModal,
        zatvoriModal,
        kopirajTekst,
        renderSortDropdown
    };
})();