'use strict';

        let trenutniJezik = localStorage.getItem('portfolioJezik') || 'SRB';
        let trenutniRezim = localStorage.getItem('portfolioRezim') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

        const prevodi404 = {
            SRB: {
                naslov: 'Stranica nije pronađena',
                opis: 'Stranica koju tražite ne postoji ili je premeštena. Vratite se na početnu i izaberite profil koji vas zanima.',
                btn: 'Nazad na početnu',
                footer: '©Copyright by Nena Kozić'
            },
            ENG: {
                naslov: 'Page not found',
                opis: 'The page you are looking for does not exist or has been moved. Go back to the homepage and choose the profile you are interested in.',
                btn: 'Back to homepage',
                footer: '©Copyright by Nena Kozić'
            }
        };

        const el = {
            naslov: document.getElementById('err-naslov'),
            opis: document.getElementById('err-opis'),
            btn: document.getElementById('err-btn'),
            langBtn: document.getElementById('lang-btn'),
            themeBtn: document.getElementById('theme-btn'),
            footerCopy: document.getElementById('idx-footer-copy'),
            footerDatum: document.getElementById('idx-footer-datum')
        };

        const meseciSRB = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];
        const meseciENG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        function azurirajDatumFootera() {
            const sada = new Date();
            const meseci = trenutniJezik === 'SRB' ? meseciSRB : meseciENG;
            const mesec = meseci[sada.getMonth()];
            const godina = sada.getFullYear();
            el.footerDatum.innerText = `${mesec} ${godina}.`;
        }

        function primeniRezim() {
            document.body.classList.toggle('light-mode', trenutniRezim === 'light');
            el.themeBtn.innerHTML = trenutniRezim === 'light'
                ? '<i class="fa-solid fa-moon"></i>'
                : '<i class="fa-solid fa-sun"></i>';
            const metaTema = document.getElementById('theme-color-meta');
            if (metaTema) metaTema.setAttribute('content', trenutniRezim === 'light' ? '#f8fafc' : '#0f172a');
        }

        function primeniJezik() {
            const p = prevodi404[trenutniJezik];
            el.naslov.innerText = p.naslov;
            el.opis.innerText = p.opis;
            el.btn.innerHTML = `${p.btn} <i class="fa-solid fa-arrow-right"></i>`;
            el.footerCopy.innerText = p.footer;
            el.langBtn.innerText = trenutniJezik === 'SRB' ? 'EN' : 'SRB';
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

        primeniRezim();
        primeniJezik();