'use strict';

/*
 * common.js — deljene funkcije za sve stranice digitalnog portfolija.
 *
 * Cilj ovog fajla je da se ukloni ponavljanje koda koje je ranije postojalo
 * u skoro svakoj stranici pojedinačno (nazivi meseci, ažuriranje footera,
 * primena tamnog/svetlog režima, edukacija-dropdown, scroll-in animacije i
 * upravljanje fokusom unutar modalnih prozora). Svaka stranica i dalje ima
 * sopstvenu skriptu sa svojim sadržajem i prevodima — ona samo poziva ove
 * zajedničke funkcije umesto da ih iznova definiše.
 *
 * Učitava se PRE svake stranične skripte: <script src="script/common.js" defer></script>
 */
window.Common = (function () {

    const meseciSRB = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];
    const meseciENG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const prevodFootera = {
        SRB: '©Copyright by Nena Kozić',
        ENG: '©Copyright by Nena Kozić'
    };

    // -----------------------------------------------------------------
    // Footer: datum i copyright tekst (jedinstveni ID-jevi na svim stranicama)
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
    // Tamni / svetli režim — postavlja klasu, ikonicu i aria-pressed stanje
    // -----------------------------------------------------------------
    function primeniRezim(rezim) {
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
    // Pristupačnost modalnih prozora: zarobljavanje fokusa (focus trap) i
    // vraćanje fokusa na element koji je otvorio modal, nakon zatvaranja.
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
    // Kopiranje teksta u klipbord (npr. dugme "Kopiraj kod")
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

    return {
        meseciSRB,
        meseciENG,
        formatDatum,
        azurirajFooter,
        primeniRezim,
        azurirajJezikDugme,
        initEduDropdown,
        initFadeInReveal,
        otvoriModal,
        zatvoriModal,
        kopirajTekst
    };
})();
