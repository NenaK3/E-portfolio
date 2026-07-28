'use strict';

        const mod = sessionStorage.getItem('portfolioMod') || 'IT';
        document.body.classList.add(mod.toLowerCase() + '-theme');

        let jezik = localStorage.getItem('portfolioJezik') || 'SRB';
        let rezim = localStorage.getItem('portfolioRezim') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

        const recnik = {
            SRB: {
                navProfil: 'Profil',
                navIskustvo: 'Iskustvo',
                navEdukacija: 'Edukacija',
                navBlog: 'Blog',
                navPromeni: 'Promeni portfolio',
                naslovSve: 'Radno iskustvo & profesionalne prakse',
                footer: '©Copyright by Nena Kozić',
                bcTrenutna: 'Iskustvo',
                IT: [
                    {
                        pozicija: 'Softverski programer (Praksa)',
                        firma: 'Docus d.o.o., Čačak',
                        link: 'https://www.docus.co.rs/index.html',
                        period: 'Maj 2025 - Trenutno',
                        opis: 'Rad na razvoju aplikativnih rešenja primenom AngularJS i JavaScript tehnologija na frontendu, mobilnom razvoju u okruženju Flutter, kao i pozadinskom delu kroz Node.js platformu.',
                        tagovi: ['AngularJS', 'Flutter', 'JavaScript', 'Node.js', 'Bootstrap'],
                        mentor: 'Mentor na stručnoj praksi - Marko Bogdanović'
                    },
                    {
                        pozicija: 'Frontend programmer (Praksa)',
                        firma: 'Croonus Technologies, Čačak',
                        link: 'https://www.croonus.com/',
                        period: 'Avgust 2024 - Oktobar 2024',
                        opis: 'Intenzivna stručna praksa fokusirana na JavaScript i React.js biblioteku, strukturalno upravljanje i manipulaciju JSON podacima, napredan web dizajn i realizaciju responzivnih korisničkih interfejsa.',
                        tagovi: ['React.js', 'JSON', 'Veb dizajn', 'Frontend dizajn'],
                        mentor: 'Mentor na stručnoj praksi - Željko Glišov'
                    }
                ],
                Edukacija: [
                    {
                        pozicija: 'Profesor informatike i računarstva (Praksa)',
                        firma: 'Osnovna škola „Dr Dragiša Mišović“, Čačak',
                        link: 'https://osdragisamisovic.edu.rs/',
                        period: 'April 2026 - Jun 2026',
                        opis: 'Tokom nastavne prakse u osnovnoj školi, uspešno sam povezala tehnička znanja i pedagoške veštine kroz mentorstvo učenika starijih razreda. Aktivno sam pratila i analizirala nastavne procese u okviru predmeta Informatika i računarstvo, sa fokusom na podučavanje programskog jezika Python kroz vizuelna okruženja — konkretno, rad sa Turtle bibliotekom u 6. razredu i uvođenje u kreiranje 2D igara pomoću Pygame-a u 7. razredu. Ostvarila sam direktan uticaj samostalnim dizajnom i realizacijom tri časa za učenike 6. razreda, gde sam efikasno predstavila nove koncepte iz nastavnog plana tokom jednog predavanja i vodila praktičnu primenu tog znanja kroz dva posvećena časa laboratorijskih/praktičnih vežbi.',
                        mentor: 'Mentor na realizovanoj praksi - Profesorka Ivana Zorić'
                    }
                ]
            },
            ENG: {
                navProfil: 'Profile',
                navIskustvo: 'Experience',
                navEdukacija: 'Education',
                navBlog: 'Blog',
                navPromeni: 'Switch Portfolio',
                naslovSve: 'Work experience & professional internships',
                footer: '©Copyright by Nena Kozić',
                bcTrenutna: 'Experience',
                IT: [
                    {
                        pozicija: 'Software Developer (Internship)',
                        firma: 'Docus doo, Cacak',
                        link: 'https://www.docus.co.rs/index.html',
                        period: 'May 2025 - Present',
                        opis: 'Developing application solutions using AngularJS and JavaScript on the frontend, mobile cross-platform programming in Flutter, and managing backend logic via Node.js framework.',
                        tagovi: ['AngularJS', 'Flutter', 'JavaScript', 'Node.js', 'Bootstrap'],
                        mentor: 'Internship Mentor - Marko Bogdanovic'
                    },
                    {
                        pozicija: 'Frontend Developer (Internship)',
                        firma: 'Croonus Technologies, Cacak',
                        link: 'https://www.croonus.com/',
                        period: 'August 2024 - October 2024',
                        opis: 'Intensive engineering internship focused on React.js ecosystem, processing JSON structures, web UI architecture, and writing clean responsive frontend components.',
                        tagovi: ['React.js', 'JSON', 'Web Design', 'Front-end Design'],
                        mentor: 'Internship Mentor - Zeljko Glisov'
                    }
                ],
                Edukacija: [
                    {
                        pozicija: 'Computer Science Teacher (Internship)',
                        firma: 'Dr Dragisa Misovic Primary School, Cacak',
                        link: 'https://osdragisamisovic.edu.rs/',
                        period: 'April 2026 – June 2026',
                        opis: 'During my teaching internship at a primary school, I successfully combined my technical knowledge and pedagogical skills through mentoring upper-primary school students. I actively observed and analyzed the instructional processes within Computer Science classes, focusing on teaching the Python programming language through visual environments—specifically, working with the Turtle library in the 6th grade and introducing 2D game creation using Pygame in the 7th grade.',
                        mentor: 'Internship Mentor - Professor Ivana Zoric'
                    }
                ]
            }
        };

        const el = {
            navProfil: document.getElementById('nav-profil'),
            navIskustvo: document.getElementById('nav-iskustvo'),
            navEdukacija: document.getElementById('nav-edukacija'),
            navPromeni: document.getElementById('nav-promeni'),
            navBlog: document.getElementById('nav-blog'),
            bcPocetna: document.getElementById('bc-pocetna'),
            bcTrenutna: document.getElementById('bc-trenutna'),
            strNaslov: document.getElementById('str-naslov'),
            footer: document.getElementById('idx-footer-copy'),
            footerDatum: document.getElementById('idx-footer-datum'),
            kontejner: document.getElementById('iskustvo-kontejner'),
            langBtn: document.getElementById('nav-lang-btn'),
            themeBtn: document.getElementById('nav-theme-btn'),
            hamburger: document.getElementById('nav-hamburger'),
            navLinks: document.getElementById('navbar-links')
        };

        function karticaHTML(i, idx = 0) {
            const tagoviDeo = i.tagovi
                ? `<div class="tag-container">${i.tagovi.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>`
                : '';
            const mentorDeo = i.mentor
                ? `<p class="exp-mentor" style="font-style: italic; font-weight: 500; margin-top: 15px; color: var(--tekst-boja, inherit);"><i class="fa-solid fa-user-tie" style="margin-right: 8px;"></i>${i.mentor}</p>`
                : '';

            return `
                <div class="timeline-item fade-in-up" style="animation-delay:${idx * 0.1}s">
                    <span class="timeline-dot"><i class="fa-solid fa-briefcase"></i></span>
                    <div class="card experience-card timeline-content">
                        <div class="exp-header">
                            <div>
                                <h3>${i.pozicija}</h3>
                                <h4><a href="${i.link}" target="_blank" style="color: inherit; text-decoration: none;"><i class="fa-solid fa-link" style="font-size: 12px; margin-right: 5px;"></i>${i.firma}</a></h4>
                            </div>
                            <span class="block-date">${i.period}</span>
                        </div>
                        <p class="exp-opis">${i.opis}</p>
                        ${tagoviDeo}
                        ${mentorDeo}
                    </div>
                </div>`;
        }

        const meseciSRB = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];
        const meseciENG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        function initFadeInReveal(root) {
            const kontejner = root || document;
            const elementi = Array.from(kontejner.querySelectorAll('.fade-in-up:not(.fade-in-visible)'));
            if (kontejner.nodeType === 1 && kontejner.classList.contains('fade-in-up') && !kontejner.classList.contains('fade-in-visible')) {
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

        function azurirajDatumFootera() {
            const sada = new Date();
            const meseci = jezik === 'SRB' ? meseciSRB : meseciENG;
            const mesec = meseci[sada.getMonth()];
            const godina = sada.getFullYear();
            el.footerDatum.innerText = jezik === 'SRB'
                ? `${mesec} ${godina}.`
                : `${mesec} ${godina}.`;
        }

        function osvezi() {
            const r = recnik[jezik];

            el.navProfil.innerText = r.navProfil;
            el.navIskustvo.innerText = r.navIskustvo;
            el.navEdukacija.innerText = r.navEdukacija;
            el.navBlog.innerText = r.navBlog;
            el.navPromeni.innerHTML = `<i class="fa-solid fa-repeat"></i> ${r.navPromeni}`;
            el.bcPocetna.innerText = jezik === 'SRB'
                ? (mod === 'IT' ? 'Početna IT strana' : 'Početna pedagoška strana')
                : (mod === 'IT' ? 'Home (IT)' : 'Home (Teaching)');
            el.bcTrenutna.innerText = r.bcTrenutna;
            el.strNaslov.innerHTML = `<i class="fa-solid fa-briefcase"></i> ${r.naslovSve}`;
            el.footer.innerText = r.footer;
            azurirajDatumFootera();
            el.langBtn.innerText = jezik === 'SRB' ? 'EN' : 'SRB';

            el.kontejner.innerHTML = (r[mod] || []).map((i, idx) => karticaHTML(i, idx)).join('');
            initFadeInReveal();
        }

        function primeniRezim() {
            document.body.classList.toggle('light-mode', rezim === 'light');
            el.themeBtn.innerHTML = rezim === 'light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
            const metaTema = document.getElementById('theme-color-meta');
            if (metaTema) metaTema.setAttribute('content', rezim === 'light' ? '#f8fafc' : '#0f172a');
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

        function toggleMenu() {
            const aktivno = el.navLinks.classList.toggle('nav-active');
            const ikonica = el.hamburger.querySelector('i');
            ikonica.classList.toggle('fa-bars', !aktivno);
            ikonica.classList.toggle('fa-xmark', aktivno);
        }

        function podesiEduDropdown() {
            const wrap = document.getElementById('nav-edukacija-wrap');
            if (!wrap) return;
            const caret = document.getElementById('nav-edukacija-caret');

            if (mod !== 'IT') {
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

        primeniRezim();
        osvezi();
        podesiEduDropdown();
        initFadeInReveal();