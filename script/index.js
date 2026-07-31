'use strict';

        let trenutniJezik = localStorage.getItem('portfolioJezik') || 'SRB';
        let trenutniRezim = localStorage.getItem('portfolioRezim') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

        const prevodiIndex = {
            SRB: {
                sub: 'Dobrodošli na moj digitalni portfolio. Izaberite profil koji želite da istražite:',
                itNaslov: 'IT Inženjering',
                itSub: 'Master inženjer informacionih tehnologija',
                itOpis: 'Razvoj frontend aplikacija, napredno upravljanje bazama podataka i softverska arhitektura.',
                itBtn: 'Uđi u IT Portfolio',
                eduNaslov: 'Edukacija / Prosveta',
                eduSub: 'Master profesor stručnih predmeta oblasti informacionih tehnologija',
                eduOpis: 'Metodika nastave računarstva, pedagoški rad sa decom, konstruktivizam i evaluacija znanja.',
                eduBtn: 'Uđi u Prosvetni Portfolio',
                footer: '©Copyright by Nena Kozić'
            },
            ENG: {
                sub: 'Welcome to my digital portfolio. Choose the profile you want to explore:',
                itNaslov: 'IT Engineering',
                itSub: 'Master of Information Technology',
                itOpis: 'Frontend application development, advanced database management, and software architecture.',
                itBtn: 'Enter IT Portfolio',
                eduNaslov: 'Education / Teaching',
                eduSub: 'Master professor of vocational subjects in information technology',
                eduOpis: 'Computer science teaching methodology, pedagogical work with children, constructivism, and evaluation.',
                eduBtn: 'Enter Educational Portfolio',
                footer: '©Copyright by Nena Kozić'
            }
        };

        const poljaZaPrevod = [
            { id: 'idx-podnaslov', kljuc: 'sub' },
            { id: 'idx-it-naslov', kljuc: 'itNaslov' },
            { id: 'idx-it-opis', kljuc: 'itOpis' },
            { id: 'idx-it-btn', kljuc: 'itBtn', btn: true },
            { id: 'idx-edu-naslov', kljuc: 'eduNaslov' },
            { id: 'idx-edu-opis', kljuc: 'eduOpis' },
            { id: 'idx-edu-btn', kljuc: 'eduBtn', btn: true },
            { id: 'idx-footer-copy', kljuc: 'footer' }
        ];

        const poljaZaTipkanje = [
            { id: 'idx-it-sub', kljuc: 'itSub' },
            { id: 'idx-edu-sub', kljuc: 'eduSub' }
        ];

        const el = Object.fromEntries(
            poljaZaPrevod.map(p => [p.id, document.getElementById(p.id)])
        );
        el['lang-btn'] = document.getElementById('lang-btn');
        el['theme-btn'] = document.getElementById('theme-btn');
        el['idx-footer-datum'] = document.getElementById('idx-footer-datum');
        poljaZaTipkanje.forEach(p => { el[p.id] = document.getElementById(p.id); });

        function azurirajDatumFootera() {
            Common.azurirajFooter(trenutniJezik);
            Common.azurirajJezikDugme(trenutniJezik);
        }

        function primeniRezim() {
            Common.primeniRezim(trenutniRezim);
        }

        function otkucajTekst(element, tekst, brzinaMs = 32) {
            if (!element) return;

            if (element._tipkanjeTimer) {
                clearInterval(element._tipkanjeTimer);
                element._tipkanjeTimer = null;
            }

            const smanjenoKretanje = window.matchMedia
                && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (smanjenoKretanje) {
                element.innerText = tekst;
                return;
            }

            element.innerText = '';
            let i = 0;
            element._tipkanjeTimer = setInterval(() => {
                i++;
                element.innerText = tekst.slice(0, i);
                if (i >= tekst.length) {
                    clearInterval(element._tipkanjeTimer);
                    element._tipkanjeTimer = null;
                }
            }, brzinaMs);
        }

        function primeniJezik() {
            const p = prevodiIndex[trenutniJezik];

            poljaZaPrevod.forEach(({ id, kljuc, btn }) => {
                el[id][btn ? 'innerHTML' : 'innerText'] = btn
                    ? `${p[kljuc]} <i class="fa-solid fa-arrow-right"></i>`
                    : p[kljuc];
            });

            poljaZaTipkanje.forEach(({ id, kljuc }) => {
                otkucajTekst(el[id], p[kljuc]);
            });

            el['lang-btn'].innerText = trenutniJezik === 'SRB' ? 'EN' : 'SRB';
            azurirajDatumFootera();
        }

        function promeniTemu() {
            trenutniRezim = trenutniRezim === 'dark' ? 'light' : 'dark';
            localStorage.setItem('portfolioRezim', trenutniRezim);
            primeniRezim();
        }

        function promeniJezik() {
            trenutniJezik = trenutniJezik === 'SRB' ? 'ENG' : 'SRB';
            localStorage.setItem('portfolioJezik', trenutniJezik);
            primeniJezik();
        }

        function izaberiMod(mod) {
            sessionStorage.setItem('portfolioMod', mod);
            window.location.href = 'portfolio.html';
        }

        primeniRezim();
        primeniJezik();