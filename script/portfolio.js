'use strict';

        const mod = sessionStorage.getItem('portfolioMod') || 'IT';
        document.body.classList.add(mod.toLowerCase() + '-theme');

        let jezik = localStorage.getItem('portfolioJezik') || 'SRB';
        let rezim = localStorage.getItem('portfolioRezim') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
        let trenutniCvPutanja = '';

        const recnik = {
            SRB: {
                navProfil: 'Profil', navIskustvo: 'Iskustvo', navEdukacija: 'Edukacija', navBlog: 'Blog', navPromeni: 'Promeni portfolio',
                tabOMeni: 'O meni', tabVestine: 'Veštine', tabAmbicije: 'Ambicije', tabKontakt: 'Kontakt',
                naslovOMeni: 'Profesionalni profil', naslovAmbicije: 'Budući ciljevi i usmerenja', naslovKontakt: 'Kontakt informacije',
                lblEmail: 'E-mail adresa:', lblLokacija: 'Lokacija:', lblLinkedin: 'LinkedIn profil:', lblGithub: 'GitHub profil:',
                cvBtnText: 'Prikaži CV',
                statusDostupnost: 'Otvorena za saradnju',
                bcTrenutna: 'Profil',
                IT: {
                    titula: 'Master inženjer informacionih tehnologija',
                    pitch: 'Razvijam moderne, pristupačne veb aplikacije, uz uverenje da svako tehničko rešenje treba da ima jasnu svrhu za korisnika.',
                    oMeni: 'Fokusirana na razvoj modernih frontend aplikacija i napredno upravljanje bazama podataka. Kroz praktičan rad u kompanijama i akademske projekte na FTN-u stekla sam iskustvo u tehnologijama kao što su Angular, React, Node.js i Flutter, kao i u radu sa relacionim bazama i softverskom arhitekturom.',
                    ambicije: 'Dugoročni fokus je usmeren na karijeru u IT industriji, sa primarnim interesovanjem za Frontend razvoj i kreiranje intuitivnih korisničkih interfejsa, kao i za projektovanje baza podataka i Power BI analitiku. Cilj mi je dalji rad sa modernim JavaScript/TypeScript okvirima, napredno upravljanje podacima i kreiranje poslovnih izveštaja koji pomažu u donošenju ključnih odluka.',
                    cvFajl: 'assets/cv/CV IT - srb.pdf',
                    v: [
                        { kat: 'Frontend & Mobile', stavke: [
                            { naziv: 'Angular / AngularJS', nivo: 85 },
                            { naziv: 'React.js', nivo: 80 },
                            { naziv: 'Flutter', nivo: 70 },
                            { naziv: 'JavaScript (ES6)', nivo: 85 },
                            { naziv: 'HTML5 / CSS3', nivo: 90 },
                            { naziv: 'Bootstrap', nivo: 85 }
                        ] },
                        { kat: 'Backend & Baze podataka', stavke: [
                            { naziv: 'Node.js', nivo: 75 },
                            { naziv: 'SQL / MySQL', nivo: 80 },
                            { naziv: 'Oracle APEX / Oracle DB', nivo: 70 },
                            { naziv: 'C / C++ / C#', nivo: 65 },
                            { naziv: 'Java / Kotlin', nivo: 70 },
                            { naziv: 'PHP', nivo: 60 }
                        ] },
                        { kat: 'Alati & Metodologije', stavke: [
                            { naziv: 'Git / GitHub', nivo: 85 },
                            { naziv: 'Web Mining & Data Mining', nivo: 65 },
                            { naziv: 'Human-Computer Interaction (HCI)', nivo: 70 },
                            { naziv: 'JSON / Web Design', nivo: 80 },
                            { naziv: 'WordPress / CRM', nivo: 60 }
                        ] }
                    ]
                },
                Edukacija: {
                    titula: 'Master profesor stručnih predmeta oblasti informacionih tehnologija',
                    pitch: 'Podučavam učenike informatičkom načinu razmišljanja kroz jasne, praktično usmerene i podsticajne časove.',
                    oMeni: 'Posvećena pedagogiji, metodici nastave računarstva i digitalnoj pismenosti. Uspešno prenosim apstraktne IT koncepte (poput programiranja u Python-u) mlađim generacijama kroz interaktivne metode, konstruktivistički pristup i savremene nastavne alate.',
                    ambicije: 'Rad u prosvetnom sistemu kao profesor informatike i računarstva, kreiranje naprednih radionica i sekcija za talentovane učenike, implementacija EdTech inovacija i istraživanje primene obrazovnih softvera u nastavi.',
                    cvFajl: 'assets/cv/CV PN - srb.pdf',
                    v: [
                        { kat: 'Metodika i pedagogija', stavke: [
                            { naziv: 'Konstruktivizam u nastavi', nivo: 80 },
                            { naziv: 'Programirano učenje', nivo: 75 },
                            { naziv: 'Digitalna pismenost', nivo: 85 },
                            { naziv: 'Individualizacija nastave', nivo: 75 }
                        ] },
                        { kat: 'Nastavni alati', stavke: [
                            { naziv: 'Izrada e-testova', nivo: 80 },
                            { naziv: 'Google Forms', nivo: 85 },
                            { naziv: 'Interaktivni materijali (Python Turtle, Pygame)', nivo: 80 }
                        ] },
                        { kat: 'Lične osobine', stavke: [
                            { naziv: 'Empatija', nivo: 90 },
                            { naziv: 'Strpljenje u radu sa učenicima', nivo: 90 },
                            { naziv: 'Organizovanost', nivo: 85 },
                            { naziv: 'Jasna komunikacija', nivo: 85 }
                        ] }
                    ]
                }
            },
            ENG: {
                navProfil: 'Profile', navIskustvo: 'Experience', navEdukacija: 'Education', navBlog: 'Blog', navPromeni: 'Switch Portfolio',
                tabOMeni: 'About Me', tabVestine: 'Skills', tabAmbicije: 'Ambitions', tabKontakt: 'Contact',
                naslovOMeni: 'Professional Profile', naslovAmbicije: 'Future Goals & Orientations', naslovKontakt: 'Contact Information',
                lblEmail: 'Email address:', lblLokacija: 'Location:', lblLinkedin: 'LinkedIn profile:', lblGithub: 'GitHub profile:',
                cvBtnText: 'View CV',
                statusDostupnost: 'Open to opportunities',
                bcTrenutna: 'Profile',
                IT: {
                    titula: 'Master of Information Technology',
                    pitch: 'I develop modern, accessible web applications, guided by the principle that every technical solution should serve a clear purpose for the user.',
                    oMeni: 'Focused on developing modern frontend applications and advanced database management. Through professional internships and academic projects at the Faculty of Technical Sciences, I have gained hands-on experience with Angular, React, Node.js, and Flutter, alongside relational databases and software architecture.',
                    ambicije: 'Long-term focus is oriented toward a career in the IT industry, with a primary interest in Frontend development and creating intuitive user interfaces, as well as database design and Power BI analytics. My goal is to further work with modern JavaScript/TypeScript frameworks, advanced data management, and generating business reports that drive key decision-making.',
                    cvFajl: 'assets/cv/CV IT - eng.pdf',
                    v: [
                        { kat: 'Frontend & Mobile', stavke: [
                            { naziv: 'Angular / AngularJS', nivo: 85 },
                            { naziv: 'React.js', nivo: 80 },
                            { naziv: 'Flutter', nivo: 70 },
                            { naziv: 'JavaScript (ES6)', nivo: 85 },
                            { naziv: 'HTML5 / CSS3', nivo: 90 },
                            { naziv: 'Bootstrap', nivo: 85 }
                        ] },
                        { kat: 'Backend & Databases', stavke: [
                            { naziv: 'Node.js', nivo: 75 },
                            { naziv: 'SQL / MySQL', nivo: 80 },
                            { naziv: 'Oracle APEX / Oracle DB', nivo: 70 },
                            { naziv: 'C / C++ / C#', nivo: 65 },
                            { naziv: 'Java / Kotlin', nivo: 70 },
                            { naziv: 'PHP', nivo: 60 }
                        ] },
                        { kat: 'Tools & Methodologies', stavke: [
                            { naziv: 'Git / GitHub', nivo: 85 },
                            { naziv: 'Web Mining & Data Mining', nivo: 65 },
                            { naziv: 'Human-Computer Interaction (HCI)', nivo: 70 },
                            { naziv: 'JSON / Web Design', nivo: 80 },
                            { naziv: 'WordPress / CRM', nivo: 60 }
                        ] }
                    ]
                },
                Edukacija: {
                    titula: 'Master Professor of Information Technology Vocational Subjects',
                    pitch: 'I guide students toward computational thinking through clear, practically oriented, and engaging computer science lessons.',
                    oMeni: 'Dedicated to pedagogy, computer science teaching methodology, and digital literacy. I successfully convey abstract IT concepts (such as Python programming) to younger generations through interactive methods, a constructivist approach, and contemporary educational tools.',
                    ambicije: 'Working in the education system as a professor of computer science and information technology, creating advanced workshops and sections for talented students, implementing EdTech innovations and researching the application of educational software in teaching.',
                    cvFajl: 'assets/cv/CV PN - eng.pdf',
                    v: [
                        { kat: 'Methodology & Pedagogy', stavke: [
                            { naziv: 'Constructivism in Education', nivo: 80 },
                            { naziv: 'Programmed Learning', nivo: 75 },
                            { naziv: 'Digital Literacy', nivo: 85 },
                            { naziv: 'Individualized Teaching', nivo: 75 }
                        ] },
                        { kat: 'Educational Tools', stavke: [
                            { naziv: 'E-tests Generation', nivo: 80 },
                            { naziv: 'Google Forms', nivo: 85 },
                            { naziv: 'Interactive Materials (Python Turtle, Pygame)', nivo: 80 }
                        ] },
                        { kat: 'Personal Traits', stavke: [
                            { naziv: 'Empathy', nivo: 90 },
                            { naziv: 'Patience with Students', nivo: 90 },
                            { naziv: 'Organizational Skills', nivo: 85 },
                            { naziv: 'Clear Communication', nivo: 85 }
                        ] }
                    ]
                }
            }
        };

        const el = {
            navProfil: document.getElementById('nav-profil'),
            navIskustvo: document.getElementById('nav-iskustvo'),
            navEdukacija: document.getElementById('nav-edukacija'),
            navPromeni: document.getElementById('nav-promeni'),
            heroTitle: document.getElementById('hero-title'),
            heroPitch: document.getElementById('hero-pitch'),
            navBlog: document.getElementById('nav-blog'),
            bcPocetna: document.getElementById('bc-pocetna'),
            bcTrenutna: document.getElementById('bc-trenutna'),
            tekstOMeni: document.getElementById('tekst-o-meni'),
            tekstAmbicije: document.getElementById('tekst-ambicije'),
            cardNaslovOMeni: document.getElementById('card-naslov-o-meni'),
            cardNaslovAmbicije: document.getElementById('card-naslov-ambicije'),
            cardNaslovKontakt: document.getElementById('card-naslov-kontakt'),
            lblEmail: document.getElementById('lbl-email'),
            lblLokacija: document.getElementById('lbl-lokacija'),
            lblLinkedin: document.getElementById('lbl-linkedin'),
            lblGithub: document.getElementById('lbl-github'),
            cvBtnText: document.getElementById('cv-btn-text'),
            statusTekst: document.getElementById('status-tekst'),
            footerDatum: document.getElementById('idx-footer-datum'),
            vestineKontejner: document.getElementById('vestine-kontejner'),
            langBtn: document.getElementById('nav-lang-btn'),
            themeBtn: document.getElementById('nav-theme-btn'),
            hamburger: document.getElementById('nav-hamburger'),
            navLinks: document.getElementById('navbar-links'),
            cvModal: document.getElementById('cv-modal'),
            cvIframe: document.getElementById('cv-iframe'),
            tabContents: document.querySelectorAll('.tab-content'),
            tabBtns: document.querySelectorAll('.tab-btn'),
            tabButtonsWrap: document.getElementById('tab-buttons'),
            tabIndicator: document.getElementById('tab-indicator')
        };

        const tabDugmici = [
            { el: document.getElementById('tab-o-meni-btn'), ikona: 'fa-address-card', kljuc: 'tabOMeni' },
            { el: document.getElementById('tab-vestine-btn'), ikona: 'fa-list-check', kljuc: 'tabVestine' },
            { el: document.getElementById('tab-ambicije-btn'), ikona: 'fa-bullseye', kljuc: 'tabAmbicije' },
            { el: document.getElementById('tab-kontakt-btn'), ikona: 'fa-envelope', kljuc: 'tabKontakt' }
        ];

        const devIconMapa = [
            [/angular/i, 'devicon-angularjs-plain colored'],
            [/react/i, 'devicon-react-original colored'],
            [/flutter/i, 'devicon-flutter-plain colored'],
            [/javascript/i, 'devicon-javascript-plain colored'],
            [/html5/i, 'devicon-html5-plain colored'],
            [/css3/i, 'devicon-css3-plain colored'],
            [/bootstrap/i, 'devicon-bootstrap-plain colored'],
            [/node\.?js/i, 'devicon-nodejs-plain colored'],
            [/mysql/i, 'devicon-mysql-plain colored'],
            [/oracle/i, 'devicon-oracle-original colored'],
            [/c \/ c\+\+ \/ c#/i, 'devicon-cplusplus-plain colored'],
            [/java \/ kotlin/i, 'devicon-java-plain colored'],
            [/php/i, 'devicon-php-plain colored'],
            [/git \/ github/i, 'devicon-git-plain colored'],
            [/json/i, 'devicon-json-plain colorless'],
            [/wordpress/i, 'devicon-wordpress-plain colored']
        ];

        function ikonicaZaVestinu(naziv) {
            if (mod !== 'IT') {
                return '<span class="skill-bullet-dot" aria-hidden="true"></span>';
            }
            const poklapanje = devIconMapa.find(([regex]) => regex.test(naziv));
            const klasa = poklapanje ? poklapanje[1] : 'devicon-devicon-plain colorless';
            return `<i class="${klasa} devicon-skill-icon"></i>`;
        }

        function initFadeInReveal(root) {
            Common.initFadeInReveal(root);
        }

        // -----------------------------------------------------------------
        // Pomera klizeći indikator ispod aktivnog tab dugmeta. Poziva se pri
        // promeni taba, ali i nakon osveženja sadržaja (jezik može promeniti
        // širinu teksta dugmeta) i pri promeni veličine prozora.
        // -----------------------------------------------------------------
        function pomeriTabIndikator(dugme) {
            if (!el.tabIndicator || !el.tabButtonsWrap || !dugme) return;
            const wrapRect = el.tabButtonsWrap.getBoundingClientRect();
            const dugmeRect = dugme.getBoundingClientRect();
            el.tabIndicator.style.left = (dugmeRect.left - wrapRect.left) + 'px';
            el.tabIndicator.style.width = dugmeRect.width + 'px';
        }

        function aktivniTabDugme() {
            return el.tabButtonsWrap ? el.tabButtonsWrap.querySelector('.tab-btn.active') : null;
        }

        function azurirajDatumFootera() {
            Common.azurirajFooter(jezik);
            Common.azurirajJezikDugme(jezik);
        }

        // -----------------------------------------------------------------
        // Efekat kucanja pisaće mašine — ispisuje tekst karakter po karakter
        // umesto da ga trenutno ubaci u element. Poštuje prefers-reduced-motion
        // i prekida prethodnu animaciju ako se jezik/mod brzo promeni.
        // -----------------------------------------------------------------
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

        function osveziSadrzaj() {
            const r = recnik[jezik];
            const s = r[mod];

            el.navProfil.innerText = r.navProfil;
            el.navIskustvo.innerText = r.navIskustvo;
            el.navEdukacija.innerText = r.navEdukacija;
            el.navBlog.innerText = r.navBlog;
            el.navPromeni.innerHTML = `<i class="fa-solid fa-repeat"></i> ${r.navPromeni}`;
            el.bcPocetna.innerText = jezik === 'SRB'
                ? (mod === 'IT' ? 'Početna IT strana' : 'Početna pedagoška strana')
                : (mod === 'IT' ? 'Home (IT)' : 'Home (Teaching)');
            el.bcTrenutna.innerText = r.bcTrenutna;
            tabDugmici.forEach(t => {
                t.el.innerHTML = `<i class="fa-solid ${t.ikona}"></i> ${r[t.kljuc]}`;
            });

            el.cardNaslovOMeni.innerText = r.naslovOMeni;
            el.cardNaslovAmbicije.innerText = r.naslovAmbicije;
            el.cardNaslovKontakt.innerText = r.naslovKontakt;

            el.lblEmail.innerText = r.lblEmail;
            el.lblLokacija.innerText = r.lblLokacija;
            el.lblLinkedin.innerText = r.lblLinkedin;
            el.lblGithub.innerText = r.lblGithub;

            otkucajTekst(el.heroTitle, s.titula);
            el.heroPitch.innerText = s.pitch;
            el.tekstOMeni.innerText = s.oMeni;
            el.tekstAmbicije.innerText = s.ambicije;
            el.cvBtnText.innerText = r.cvBtnText;
            el.statusTekst.innerText = r.statusDostupnost;
            azurirajDatumFootera();

            trenutniCvPutanja = s.cvFajl;

            el.vestineKontejner.innerHTML = s.v.map((g, idx) => `
                <div class="card skill-category fade-in-up" style="animation-delay:${idx * 0.1}s">
                    <h4>${g.kat}</h4>
                    <ul class="skill-list">${g.stavke.map(x => `
                        <li>${ikonicaZaVestinu(x.naziv)} <span>${x.naziv}</span></li>`).join('')}</ul>
                </div>`).join('');

            el.langBtn.innerText = jezik === 'SRB' ? 'EN' : 'SRB';
            initFadeInReveal();
            pomeriTabIndikator(aktivniTabDugme());
        }

        function otvoriCvModal() {
            const spinner = document.getElementById('cv-spinner');
            spinner.classList.remove('sakriven');
            el.cvIframe.src = trenutniCvPutanja;
            el.cvModal.classList.add('prikazi');
            document.body.style.overflow = 'hidden';
            Common.otvoriModal(el.cvModal);
        }

        function sakrijCvSpinner() {
            const spinner = document.getElementById('cv-spinner');
            if (spinner) spinner.classList.add('sakriven');
        }

        function zatvoriCvModal() {
            el.cvModal.classList.remove('prikazi');
            el.cvIframe.src = '';
            document.body.style.overflow = '';
            Common.zatvoriModal(el.cvModal);
        }

        function zatvoriCvModalIzvan(event) {
            if (event.target.id === 'cv-modal') zatvoriCvModal();
        }

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && el.cvModal.classList.contains('prikazi')) zatvoriCvModal();
        });

        function primeniRezim() {
            Common.primeniRezim(rezim);
        }

        function toggleJezik() {
            jezik = jezik === 'SRB' ? 'ENG' : 'SRB';
            localStorage.setItem('portfolioJezik', jezik);
            osveziSadrzaj();
        }

        function toggleTema() {
            rezim = rezim === 'dark' ? 'light' : 'dark';
            localStorage.setItem('portfolioRezim', rezim);
            primeniRezim();
        }

        function otvoriTab(evt, tabId) {
            el.tabContents.forEach(t => t.classList.remove('active'));
            el.tabBtns.forEach(t => t.classList.remove('active'));
            const noviTab = document.getElementById(tabId);
            noviTab.classList.add('active');
            evt.currentTarget.classList.add('active');
            noviTab.classList.remove('fade-in-up', 'fade-in-visible');
            void noviTab.offsetWidth;
            noviTab.classList.add('fade-in-up');
            initFadeInReveal(noviTab);
            pomeriTabIndikator(evt.currentTarget);
        }

        function toggleMenu() {
            const aktivno = el.navLinks.classList.toggle('nav-active');
            const ikonica = el.hamburger.querySelector('i');
            ikonica.classList.toggle('fa-bars', !aktivno);
            ikonica.classList.toggle('fa-xmark', aktivno);
        }

        function podesiEduDropdown() {
            Common.initEduDropdown(mod);
        }

        function podesiKopiranjeEmaila() {
            const dugme = document.getElementById('copy-email-btn');
            if (!dugme) return;
            dugme.addEventListener('click', () => {
                Common.kopirajTekst('nena.kozic3@gmail.com', dugme, {
                    uspeh: jezik === 'SRB' ? 'Kopirano' : 'Copied',
                    greska: jezik === 'SRB' ? 'Greška' : 'Error'
                });
            });
        }

        primeniRezim();
        osveziSadrzaj();
        podesiEduDropdown();
        podesiKopiranjeEmaila();
        initFadeInReveal();

        window.addEventListener('resize', () => pomeriTabIndikator(aktivniTabDugme()));