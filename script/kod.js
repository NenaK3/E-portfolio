'use strict';

        const mod = 'Edukacija';
        sessionStorage.setItem('portfolioMod', mod);
        document.body.classList.add(mod.toLowerCase() + '-theme');

        let jezik = localStorage.getItem('portfolioJezik') || 'SRB';
        let rezim = localStorage.getItem('portfolioRezim') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

        const recnik = {
            SRB: {
                navProfil: 'Profil', navIskustvo: 'Iskustvo', navEdukacija: 'Edukacija', navProjekti: 'Projekti', navPromeni: 'Promeni portfolio',
                naslovStrane: 'Interaktivni Python Turtle Kod',
                podnaslovStrane: 'Klikni na roze, podvučene linije koda kako bi pogledao video objašnjenje za njih!',
                footer: '©Copyright by Nena Kozić'
            },
            ENG: {
                navProfil: 'Profile', navIskustvo: 'Experience', navEdukacija: 'Education', navProjekti: 'Projects', navPromeni: 'Switch Portfolio',
                naslovStrane: 'Interactive Python Turtle Code',
                podnaslovStrane: 'Click on the pink, underlined lines of code to watch their video explanation!',
                footer: '©Copyright by Nena Kozić'
            }
        };

        const el = {
            navProfil: document.getElementById('nav-profil'),
            navIskustvo: document.getElementById('nav-iskustvo'),
            navEdukacija: document.getElementById('nav-edukacija'),
            navProjekti: document.getElementById('nav-projekti'),
            navPromeni: document.getElementById('nav-promeni'),
            glavniNaslov: document.getElementById('glavni-naslov'),
            glavniPodnaslov: document.getElementById('glavni-podnaslov'),
            footer: document.getElementById('idx-footer-copy'),
            footerDatum: document.getElementById('idx-footer-datum'),
            langBtn: document.getElementById('nav-lang-btn'),
            themeBtn: document.getElementById('nav-theme-btn'),
            hamburgerBtn: document.getElementById('hamburger-btn'),
            navLinks: document.getElementById('nav-links-id'),
            kodBlok: document.getElementById('kod-blok'),
            modal: document.getElementById('videoModal'),
            player: document.getElementById('videoPlayer'),
            kopirajBtn: document.getElementById('kopiraj-kod-btn')
        };

        const prevodiKopiraj = {
            SRB: { podrazumevano: '<i class="fa-regular fa-copy"></i> Kopiraj kod', uspeh: 'Kopirano!', greska: 'Greška' },
            ENG: { podrazumevano: '<i class="fa-regular fa-copy"></i> Copy code', uspeh: 'Copied!', greska: 'Error' }
        };

        function azurirajDatumFootera() {
            Common.azurirajFooter(jezik);
            Common.azurirajJezikDugme(jezik);
        }

        function osvezi() {
            const r = recnik[jezik];
            el.navProfil.innerText = r.navProfil;
            el.navIskustvo.innerText = r.navIskustvo;
            el.navEdukacija.innerText = r.navEdukacija;
            el.navProjekti.innerText = r.navProjekti;
            el.navPromeni.innerHTML = `<i class="fa-solid fa-repeat"></i> ${r.navPromeni}`;

            el.glavniNaslov.innerText = r.naslovStrane;
            el.glavniPodnaslov.innerText = r.podnaslovStrane;
            el.footer.innerText = r.footer;
            azurirajDatumFootera();

            el.langBtn.innerText = jezik === 'SRB' ? 'EN' : 'SRB';

            if (el.kopirajBtn) el.kopirajBtn.innerHTML = prevodiKopiraj[jezik].podrazumevano;
        }

        function primeniRezim() {
            Common.primeniRezim(rezim);
        }

        function toggleJezik() {
            jezik = jezik === 'SRB' ? 'ENG' : 'SRB';
            localStorage.setItem('portfolioJezik', jezik);
            osvezi();
        }

        function toggleTema() {
            rezim = rezim === 'dark' ? 'light' : 'dark';
            localStorage.setItem('portfolioRezim', rezim);
            primeniRezim();
        }

        function toggleMeni() {
            const prikazano = el.navLinks.classList.toggle('prikazi');
            const ikonica = el.hamburgerBtn.querySelector('i');
            ikonica.classList.toggle('fa-bars', !prikazano);
            ikonica.classList.toggle('fa-xmark', prikazano);
        }

        el.kodBlok.addEventListener('click', event => {
            const link = event.target.closest('.video-link');
            if (!link) return;

            const embedLink = link.dataset.video.replace('/view?usp=sharing', '/preview');
            el.player.src = embedLink;
            el.modal.style.display = 'flex';
            Common.otvoriModal(el.modal);
        });

        function zatvoriVideo() {
            el.modal.style.display = 'none';
            el.player.src = '';
            Common.zatvoriModal(el.modal);
        }

        if (el.kopirajBtn) {
            el.kopirajBtn.addEventListener('click', () => {
                const tekstKoda = el.kodBlok.innerText;
                Common.kopirajTekst(tekstKoda, el.kopirajBtn, {
                    uspeh: prevodiKopiraj[jezik].uspeh,
                    greska: prevodiKopiraj[jezik].greska
                });
            });
        }

        el.modal.addEventListener('click', event => {
            if (event.target === el.modal) zatvoriVideo();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && el.modal.style.display === 'flex') zatvoriVideo();
        });

        function podesiEduDropdown() {
            Common.initEduDropdown(mod);
        }

        primeniRezim();
        osvezi();
        podesiEduDropdown();