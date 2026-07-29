'use strict';

        const mod = sessionStorage.getItem('portfolioMod') || 'IT';
        document.body.classList.add(mod.toLowerCase() + '-theme');

        let jezik = localStorage.getItem('portfolioJezik') || 'SRB';
        let rezim = localStorage.getItem('portfolioRezim') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

        const eduTag = mod === 'Edukacija' ? 'course-tag' : '';
        const eduDate = mod === 'Edukacija' ? 'course-date' : '';
        const eduCard = mod === 'Edukacija' ? 'spec-course-card' : '';

        const recnik = {
            SRB: {
                navProfil: 'Profil', navIskustvo: 'Iskustvo', navEdukacija: 'Edukacija', navProjekti: 'Projekti', navBlog: 'Blog', navPromeni: 'Promeni portfolio',
                naslovProjekata: 'Moji projekti',
                bcTrenutna: 'Projekti',
                tekstLinka: 'Pogledaj kod',
                tekstDetaljnije: 'Detaljnije o projektu',
                btnMaterijal: 'Materijal za đake',
                btnPriprema33: 'Priprema za čas broj  33, šesti razred',
                btnPriprema34: 'Priprema za čas broj 34, šesti razred',
                btnKodNaDelu: 'Pogledaj kod na delu',
                projekti: {
                    IT: [
                        {
                            naziv: 'Digitalni portfolio',
                            podnaslov: 'Lični projekat',
                            period: '2026',
                            opis: 'Responzivna veb prezentacija kreirana u svrhu prikazivanja stečenih veština, obrazovanja i praktičnih radova. Implementirana je dvojezičnost i dinamička promena tema u zavisnosti od smera.',
                            vestine: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
                            link: 'https://github.com/NenaK3/E-portfolio.git',
                            highlights: [
                                { ikona: 'fa-language', naslov: 'Dvojezičnost', opis: 'Dinamički prevod celog sadržaja kroz JavaScript, bez ponovnog učitavanja stranice.', primer: 'Primer: prebacivanje SRB/ENG čuva izabrani jezik kroz localStorage.' },
                                { ikona: 'fa-palette', naslov: 'Adaptivne teme', opis: 'IT i Edukacija mod menjaju celokupnu paletu boja i prikazani sadržaj na svakoj stranici.', primer: 'Primer: ista edukacija.html stranica prikazuje različite podatke u zavisnosti od izabranog moda.' },
                                { ikona: 'fa-universal-access', naslov: 'Pristupačnost', opis: 'ARIA labele, skip-link, podrška za sistemsku tamnu/svetlu temu i tastaturnu navigaciju.', primer: 'Primer: sajt prati prefers-color-scheme podešavanje uređaja pri prvoj poseti.' }
                            ],
                            kljucniIshod: 'Rezultat je potpuno samostalan, responzivan portfolio sajt bez frameworka — čist HTML/CSS/JavaScript, hostovan na Vercel-u.'
                        },
                        {
                            naziv: 'Power BI izveštaj — Analiza prodaje i distribucije',
                            podnaslov: 'Projekat izrađen u sklopu selekcionog procesa',
                            period: '2025',
                            opis: 'Interaktivni Power BI izveštaj razvijen nad relacionim modelom sa 9 povezanih tabela. Uključuje kreiranje DAX mera za analizu prodaje, praćenje statusa porudžbina i marže po proizvodnim grupama, kao i vizuelizacije za poređenje performansi po regionima, kanalima prodaje i vremenskim periodima. Fokus je bio na modelovanju podataka (star schema pristup), optimizaciji relacija i izradi preglednog, interaktivnog dashboard-a.',
                            vestine: ['Power BI', 'DAX', 'Power Query (M)', 'Data Modeling'],
                            highlights: [
                                { ikona: 'fa-diagram-project', naslov: 'Star schema model', opis: '9 povezanih tabela optimizovanih za brzu i preglednu analizu podataka.', primer: 'Primer: centralna tabela činjenica povezana sa dimenzijama proizvoda, regiona i vremena.' },
                                { ikona: 'fa-calculator', naslov: 'DAX mere', opis: 'Kalkulacije za praćenje marže po proizvodnim grupama i statusa porudžbina.', primer: 'Primer: mera koja dinamički računa maržu u zavisnosti od izabranog filtera na dashboard-u.' },
                                { ikona: 'fa-chart-column', naslov: 'Vizuelizacije po regionima', opis: 'Poređenje performansi prodaje kroz regione, kanale prodaje i vremenske periode.', primer: 'Primer: interaktivni grafikoni koji se filtriraju klikom na region ili period.' }
                            ],
                            kljucniIshod: 'Izveštaj omogućava brzo identifikovanje trendova prodaje i marži po regionima — direktno primenljivo u poslovnom odlučivanju.'
                        },
                        {
                            naziv: 'Hospital management system',
                            podnaslov: 'Timski projekat na fakultetu',
                            period: '2024',
                            opis: 'Kompleksan sistem za upravljanje bolničkim podacima urađen u saradnji sa kolegama Jelenom Ilić i Filipom Šaranovićem. Sistem prati troslojnu arhitekturu — Data Layer (modeli i repozitorijumi), Business Layer i sloj za testiranje — sa zasebnim klasama za pacijente, lekare i dijagnoze. Moja odgovornost bila je Data Layer sloj: repozitorijumi sa ADO.NET pristupom SQL bazi (parametrizovani upiti za Insert, Update, Delete i GetAll operacije nad entitetima Patient, Doctor i Diagnosis) i pripadajući unit testovi pisani u MSTest okviru.',
                            vestine: ['C#', '.NET Core', 'Angular', 'Node.js', 'ADO.NET', 'SQL Server', 'MSTest', 'Visual Studio'],
                            link: 'https://github.com/NenaK3/hospital-management-system.git',
                            highlights: [
                                { ikona: 'fa-layer-group', naslov: 'Slojevita arhitektura', opis: 'Data Layer (Model + Repository) povezan sa Business Layer slojem preko poziva repozitorijuma; svaki entitet (Patient, Doctor, Diagnosis) ima sopstvenu Model, Repository i Business klasu.', primer: 'Primer: PatientBusiness poziva PatientRepository.InsertPatient() i, nakon validacije unosa, vraća bool rezultat pozivaocu.' },
                                { ikona: 'fa-database', naslov: 'ADO.NET sa parametrizovanim upitima', opis: 'Direktan rad sa SQL Server bazom preko SqlConnection i SqlCommand, uz parametrizovane upite (AddWithValue) za CRUD operacije nad pacijentima, lekarima i dijagnozama.', primer: 'Primer: InsertPatient() i GetAllPatient() metode u Patient repozitorijumu koriste parametrizovane SQL upite radi zaštite od SQL injekcija.' },
                                { ikona: 'fa-vial', naslov: 'Unit testiranje (MSTest)', opis: 'Testovi za sve tri ključne klase (Patient, Doctor, Diagnosis) koji proveravaju Insert, Update i GetAll operacije, uz automatsko čišćenje test podataka nakon svakog testa.', primer: 'Primer: DoctorTest koristi TestCleanup metodu koja briše sve test unose iz baze nakon izvršenih testova, kako bi baza ostala čista.' }
                            ],
                            kljucniIshod: 'Data Layer sloj koji sam razvila objedinjuje modele, repozitorijume i pripadajuće unit testove za pacijente, lekare i dijagnoze, uz doslednu primenu parametrizovanih upita i slojevite arhitekture.'
                        },
                        {
                            naziv: 'E-cvećara "Rose"',
                            podnaslov: 'Samostalni projekat na fakultetu',
                            period: '2021/2022',
                            opis: 'Desktop aplikacija za upravljanje poslovanjem cvećare, razvijena u Java Swing-u. Omogućava kupovinu cveća i buketa, pravljenje sopstvenog buketa, zakazivanje dekoracije prostora i prijavu zaposlenih. Aplikacija je strukturirana oko ICena i IFaktura interfejsa (metode cena() i racun()) koje implementiraju klase Cvece, Buket i Dekoracija, dok Dekoracija nasleđuje Kupac klasu za podatke o klijentu. Projekat je izrađen samostalno u okviru predmeta Objektno orijentisano programiranje, sa naglaskom na primenu enkapsulacije, nasleđivanja, polimorfizma i rada sa interfejsima.',
                            vestine: ['Java', 'Java Swing', 'OOP', 'Rad sa fajlovima'],
                            link: 'https://github.com/NenaK3/e-cvecara-e-flower-shop-',
                            highlights: [
                                { ikona: 'fa-plug', naslov: 'Interfejsi ICena i IFaktura', opis: 'Zajednički interfejsi koje implementiraju klase Cvece, Buket i Dekoracija, sa metodama cena() i racun() za uniformno računanje cene i generisanje računa.', primer: 'Primer: cena() metoda u Buket i Dekoracija klasama sabira cenu svih cvetova iz liste, dok ista metoda u Cvece klasi množi broj cvetova sa cenom po komadu.' },
                                { ikona: 'fa-sitemap', naslov: 'Nasleđivanje i kompozicija', opis: 'Dekoracija nasleđuje Kupac klasu radi podataka o klijentu, a i Buket i Dekoracija kompozicijom sadrže listu Cvece objekata od kojih se sastavljaju.', primer: 'Primer: Dekoracija extends Kupac dodaje polja za lokal, datum i dodatne usluge uz nasleđene podatke o klijentu (ime, adresa, telefon).' },
                                { ikona: 'fa-briefcase', naslov: 'Poslovna logika obračuna cene', opis: 'Ukupna cena buketa i dekoracije kombinuje osnovnu cenu cveća sa fiksnim doplatama za izabrane dodatke.', primer: 'Primer: ukopnaCena() u Buket klasi dodaje fiksne iznose za šljokice, paprat, papir i kutiju na osnovnu cenu cveća.' }
                            ],
                            kljucniIshod: 'Samostalno razvijen projekat koji kroz konkretnu klasnu hijerarhiju (interfejsi ICena/IFaktura, nasleđivanje Dekoracija–Kupac, kompozicija sa Cvece) pokazuje solidno razumevanje objektno-orijentisanog programiranja u praktičnoj primeni.'
                        }
                    ],
                    Edukacija: [
                        {
                            naziv: 'Python turtle',
                            podnaslov: 'Rad sa učenicima u školi',
                            period: '2026',
                            opis: 'Zadaci koje su učenici imali da urade za vežbanje kako bi savladali taj deo gradiva kroz vizuelno programiranje, geometrijske oblike i osnovne algoritme.',
                            vestine: ['Python', 'Turtle biblioteka', 'Metodika nastave', 'Algoritmi'],
                            link: 'https://github.com/NenaK3/Python-turtle.git',
                            posebniMaterijali: true,
                            highlights: [
                                { ikona: 'fa-shapes', naslov: 'Vizuelno programiranje', opis: 'Učenici odmah vide rezultat svoje linije koda kao crtež na ekranu, što olakšava razumevanje toka izvršavanja.', primer: 'Primer: petlja koja crta kvadrat pomaže učenicima da povežu ponavljanje koda sa ponavljanjem oblika.' },
                                { ikona: 'fa-draw-polygon', naslov: 'Geometrijski oblici', opis: 'Zadaci prolaze kroz osnovne oblike (kvadrat, zvezda, spirala) kao uvod u koordinate i uglove.', primer: 'Primer: crtanje pravilnog šestougla uvodi pojam spoljašnjeg ugla i njegove veze sa brojem stranica.' },
                                { ikona: 'fa-diagram-project', naslov: 'Osnovni algoritmi', opis: 'Petlje, uslovi i funkcije uvedeni kroz konkretne, vidljive zadatke umesto apstraktnih primera.', primer: 'Primer: funkcija koja crta cvet pozivanjem petlje za latice, uvodi pojam ponovne upotrebe koda.' },
                                { ikona: 'fa-chalkboard-user', naslov: 'Metodika nastave', opis: 'Zadaci su osmišljeni da prate tempo šestog razreda, uz pripremljene materijale za dva časa.', primer: 'Primer: priprema za čas 33 i 34 prati postepeno usložnjavanje zadataka unutar iste teme.' }
                            ],
                            kljucniIshod: 'Vizuelna povratna informacija Python Turtle biblioteke pomaže učenicima da lakše povežu apstraktne programske koncepte sa konkretnim, vidljivim rezultatom.'
                        }
                    ]
                }
            },
            ENG: {
                navProfil: 'Profile', navIskustvo: 'Experience', navEdukacija: 'Education', navProjekti: 'Projects', navBlog: 'Blog', navPromeni: 'Switch Portfolio',
                naslovProjekata: 'My projects',
                bcTrenutna: 'Projects',
                tekstLinka: 'View Code',
                tekstDetaljnije: 'Project Details',
                btnMaterijal: 'Student materials',
                btnPriprema33: 'Lesson plan 33 (6th grade)',
                btnPriprema34: 'Lesson plan 34 (6th grade)',
                btnKodNaDelu: 'See code in action',
                projekti: {
                    IT: [
                        {
                            naziv: 'Digital portfolio',
                            podnaslov: 'Personal project',
                            period: '2026',
                            opis: 'A responsive web presentation created to showcase acquired skills, education, and practical work. It features bilingual support and dynamic theme switching based on the selected mode.',
                            vestine: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
                            link: 'https://github.com/NenaK3/E-portfolio.git',
                            highlights: [
                                { ikona: 'fa-language', naslov: 'Bilingual support', opis: 'Dynamic translation of the entire site through JavaScript, without reloading the page.', primer: 'Example: switching SRB/ENG persists the chosen language through localStorage.' },
                                { ikona: 'fa-palette', naslov: 'Adaptive themes', opis: 'IT and Education mode change the entire color palette and displayed content on every page.', primer: 'Example: the same edukacija.html page shows different data depending on the selected mode.' },
                                { ikona: 'fa-universal-access', naslov: 'Accessibility', opis: 'ARIA labels, a skip link, support for the system dark/light theme, and keyboard navigation.', primer: 'Example: the site follows the device\'s prefers-color-scheme setting on first visit.' }
                            ],
                            kljucniIshod: 'The result is a fully self-built, responsive portfolio site with no framework — plain HTML/CSS/JavaScript, hosted on Vercel.'
                        },
                        {
                            naziv: 'Power BI Report — Sales & Distribution Analysis',
                            podnaslov: 'Project developed as part of a selection process',
                            period: '2025',
                            opis: 'An interactive Power BI report built on a relational data model with 9 connected tables. Includes DAX measures for sales analysis, order status tracking, and margin analysis by product group, along with visualizations comparing performance across regions, sales channels, and time periods. The focus was on data modeling (star schema approach), relationship optimization, and building a clear, interactive dashboard.',
                            vestine: ['Power BI', 'DAX', 'Power Query (M)', 'Data Modeling'],
                            highlights: [
                                { ikona: 'fa-diagram-project', naslov: 'Star schema model', opis: '9 connected tables optimized for fast, clear data analysis.', primer: 'Example: a central fact table connected to product, region, and time dimensions.' },
                                { ikona: 'fa-calculator', naslov: 'DAX measures', opis: 'Calculations for tracking margin by product group and order status.', primer: 'Example: a measure that dynamically calculates margin based on the selected dashboard filter.' },
                                { ikona: 'fa-chart-column', naslov: 'Regional visualizations', opis: 'Comparing sales performance across regions, sales channels, and time periods.', primer: 'Example: interactive charts filtered by clicking a region or period.' }
                            ],
                            kljucniIshod: 'The report enables quick identification of sales trends and margins by region — directly applicable to business decision-making.'
                        },
                        {
                            naziv: 'Hospital management system',
                            podnaslov: 'University team project',
                            period: '2024',
                            opis: 'A complex hospital data management system developed in collaboration with fellow students Jelena Ilić and Filip Šaranović. The system follows a three-layer architecture — Data Layer (models and repositories), Business Layer, and a test layer — with separate classes for patients, doctors, and diagnoses. My responsibility was the Data Layer: repositories using ADO.NET to access the SQL database (parameterized queries for Insert, Update, Delete, and GetAll operations on the Patient, Doctor, and Diagnosis entities) and the corresponding unit tests written with MSTest.',
                            vestine: ['C#', '.NET Core', 'Angular', 'Node.js', 'ADO.NET', 'SQL Server', 'MSTest', 'Visual Studio'],
                            link: 'https://github.com/NenaK3/hospital-management-system.git',
                            highlights: [
                                { ikona: 'fa-layer-group', naslov: 'Layered architecture', opis: 'Data Layer (Model + Repository) connected to the Business Layer through repository calls; each entity (Patient, Doctor, Diagnosis) has its own Model, Repository, and Business class.', primer: 'Example: PatientBusiness calls PatientRepository.InsertPatient() and, after validating the input, returns a bool result to the caller.' },
                                { ikona: 'fa-database', naslov: 'ADO.NET with parameterized queries', opis: 'Direct access to the SQL Server database through SqlConnection and SqlCommand, using parameterized queries (AddWithValue) for CRUD operations on patients, doctors, and diagnoses.', primer: 'Example: the InsertPatient() and GetAllPatient() methods in the Patient repository use parameterized SQL queries to guard against SQL injection.' },
                                { ikona: 'fa-vial', naslov: 'Unit testing (MSTest)', opis: 'Tests for all three core classes (Patient, Doctor, Diagnosis) verifying Insert, Update, and GetAll operations, with automatic cleanup of test data after each test.', primer: 'Example: DoctorTest uses a TestCleanup method that deletes all test entries from the database after the tests run, keeping the database clean.' }
                            ],
                            kljucniIshod: 'The Data Layer I built brings together the models, repositories, and their unit tests for patients, doctors, and diagnoses, consistently applying parameterized queries and a layered architecture.'
                        },
                        {
                            naziv: 'E-flower shop "Rose"',
                            podnaslov: 'Independent university project',
                            period: '2021/2022',
                            opis: 'A desktop application for managing a flower shop\'s business, built with Java Swing. It supports buying flowers and bouquets, building a custom bouquet, scheduling venue decoration, and employee login. The application is structured around the ICena and IFaktura interfaces (cena() and racun() methods) implemented by the Cvece, Buket, and Dekoracija classes, while Dekoracija inherits from the Kupac class for client data. Developed independently for the Object-Oriented Programming course, with a focus on encapsulation, inheritance, polymorphism, and interfaces.',
                            vestine: ['Java', 'Java Swing', 'OOP', 'File Handling'],
                            link: 'https://github.com/NenaK3/e-cvecara-e-flower-shop-',
                            highlights: [
                                { ikona: 'fa-plug', naslov: 'ICena and IFaktura interfaces', opis: 'Shared interfaces implemented by the Cvece, Buket, and Dekoracija classes, with cena() and racun() methods for uniform price calculation and invoice generation.', primer: 'Example: the cena() method in the Buket and Dekoracija classes sums the price of all flowers in the list, while the same method in Cvece multiplies the flower count by the unit price.' },
                                { ikona: 'fa-sitemap', naslov: 'Inheritance and composition', opis: 'Dekoracija inherits from the Kupac class for client data, and both Buket and Dekoracija use composition to hold a list of Cvece objects they are built from.', primer: 'Example: Dekoracija extends Kupac adds fields for the venue, date, and extra services on top of the inherited client data (name, address, phone).' },
                                { ikona: 'fa-briefcase', naslov: 'Pricing business logic', opis: 'The total price of a bouquet or decoration combines the base flower price with fixed surcharges for the selected extras.', primer: 'Example: the ukopnaCena() method in Buket adds fixed amounts for glitter, fern, wrapping paper, and a box on top of the base flower price.' }
                            ],
                            kljucniIshod: 'An independently developed project that, through a concrete class hierarchy (ICena/IFaktura interfaces, Dekoracija–Kupac inheritance, composition with Cvece), demonstrates a solid understanding of object-oriented programming in practice.'
                        }
                    ],
                    Edukacija: [
                        {
                            naziv: 'Python turtle',
                            podnaslov: 'School teaching work',
                            period: '2026',
                            opis: 'Tasks and exercises assigned to students to help them master the curriculum through visual programming, geometric shapes, and basic algorithms.',
                            vestine: ['Python', 'Turtle Library', 'Teaching Methodology', 'Algorithms'],
                            link: 'https://github.com/NenaK3/Python-turtle.git',
                            posebniMaterijali: true,
                            highlights: [
                                { ikona: 'fa-shapes', naslov: 'Visual programming', opis: 'Students immediately see the result of their code as a drawing on screen, making it easier to understand program flow.', primer: 'Example: a loop that draws a square helps students connect repeating code with a repeating shape.' },
                                { ikona: 'fa-draw-polygon', naslov: 'Geometric shapes', opis: 'Tasks progress through basic shapes (square, star, spiral) as an introduction to coordinates and angles.', primer: 'Example: drawing a regular hexagon introduces the concept of exterior angles and their relation to the number of sides.' },
                                { ikona: 'fa-diagram-project', naslov: 'Basic algorithms', opis: 'Loops, conditionals, and functions introduced through concrete, visible tasks instead of abstract examples.', primer: 'Example: a function that draws a flower by calling a petal-drawing loop introduces code reuse.' },
                                { ikona: 'fa-chalkboard-user', naslov: 'Teaching methodology', opis: 'Tasks are designed to match the pace of 6th grade, with prepared materials for two lessons.', primer: 'Example: lesson plans 33 and 34 follow a gradual increase in task complexity within the same topic.' }
                            ],
                            kljucniIshod: 'The visual feedback of the Python Turtle library helps students more easily connect abstract programming concepts with a concrete, visible result.'
                        }
                    ]
                }
            }
        };

        const el = {
            navProfil: document.getElementById('nav-profil'),
            navIskustvo: document.getElementById('nav-iskustvo'),
            navEdukacija: document.getElementById('nav-edukacija'),
            navProjekti: document.getElementById('nav-projekti'),
            navBlog: document.getElementById('nav-blog'),
            navPromeni: document.getElementById('nav-promeni'),
            bcPocetna: document.getElementById('bc-pocetna'),
            bcTrenutna: document.getElementById('bc-trenutna'),
            naslovProjekata: document.getElementById('naslov-projekata'),
            projektiKontejner: document.getElementById('projekti-kontejner'),
            langBtn: document.getElementById('nav-lang-btn'),
            themeBtn: document.getElementById('nav-theme-btn'),
            hamburger: document.getElementById('nav-hamburger'),
            navLinks: document.getElementById('navbar-links'),
            pdfModal: document.getElementById('pdf-modal'),
            pdfViewer: document.getElementById('pdf-viewer'),
            modalTitleText: document.getElementById('modal-title-text'),
            projekatModal: document.getElementById('projekat-modal'),
            projekatModalNaslov: document.getElementById('projekat-modal-naslov'),
            projekatModalTelo: document.getElementById('projekat-modal-telo'),
            footerDatum: document.getElementById('idx-footer-datum')
        };

        const AKCIJA_STIL = 'text-decoration:none; border:none; cursor:pointer; display:inline-flex; align-items:center; gap:5px; font-weight:bold;';

        function akcioniTagHTML({ tag, href, onclick, ikona, tekst, noviTab = true }) {
            const ciljAtribut = noviTab ? ' target="_blank"' : '';
            const atribut = tag === 'a' ? `href="${href}"${ciljAtribut}` : `onclick="${onclick}"`;
            return `<${tag} ${atribut} class="skill-tag ${eduTag}" style="${AKCIJA_STIL}"><i class="${ikona}"></i> ${tekst}</${tag}>`;
        }

        function dugmadZaProjekat(p, r, idx) {
            if (p.posebniMaterijali) {
                const red1 = [];
                if (p.link) {
                    red1.push(akcioniTagHTML({ tag: 'a', href: p.link, ikona: 'fa-brands fa-github', tekst: r.tekstLinka }));
                }
                if (p.highlights) {
                    red1.push(akcioniTagHTML({ tag: 'button', onclick: `otvoriProjekatModal(${idx})`, ikona: 'fa-solid fa-circle-info', tekst: r.tekstDetaljnije }));
                }

                const red2 = [akcioniTagHTML({ tag: 'button', onclick: `otvoriModal('assets/priprema/Priprema za čas broj  33, šesti razred.pdf', '${r.btnPriprema33}')`, ikona: 'fa-solid fa-file-pdf', tekst: r.btnPriprema33 })];
                const red3 = [akcioniTagHTML({ tag: 'button', onclick: `otvoriModal('assets/priprema/Priprema za čas broj 34, šesti razred.pdf', '${r.btnPriprema34}')`, ikona: 'fa-solid fa-file-pdf', tekst: r.btnPriprema34 })];
                const red4 = [
                    akcioniTagHTML({ tag: 'a', href: 'https://heyzine.com/flip-book/ae67dcf23c.html', ikona: 'fa-solid fa-book-open', tekst: r.btnMaterijal }),
                    akcioniTagHTML({ tag: 'a', href: 'kod.html', ikona: 'fa-solid fa-code', tekst: r.btnKodNaDelu, noviTab: false })
                ];

                return [red1, red2, red3, red4]
                    .map(red => `<div class="btn-row">${red.join('')}</div>`)
                    .join('');
            }

            const dugmad = [];

            if (p.link) {
                dugmad.push(akcioniTagHTML({ tag: 'a', href: p.link, ikona: 'fa-brands fa-github', tekst: r.tekstLinka }));
            }

            if (p.highlights) {
                dugmad.push(akcioniTagHTML({ tag: 'button', onclick: `otvoriProjekatModal(${idx})`, ikona: 'fa-solid fa-circle-info', tekst: r.tekstDetaljnije }));
            }

            return dugmad.join('');
        }

        function karticaHTML(p, r, idx) {
            const mentorDeo = p.mentor
                ? `<p class="exp-mentor" style="font-style: italic; font-weight: 500; margin-top: 10px;"><i class="fa-solid fa-user-tie" style="margin-right: 8px;"></i>${p.mentor}</p>`
                : '';

            return `
                <div class="card experience-card edu-split-card fade-in-up ${eduCard}" style="animation-delay:${idx * 0.08}s">
                    <div class="exp-header">
                        <div><h3>${p.naziv}</h3><h4>${p.podnaslov}</h4></div>
                        <span class="block-date ${eduDate}">${p.period}</span>
                    </div>
                    <p class="exp-opis">${p.opis}</p>
                    ${mentorDeo}
                    <div class="tag-container" style="margin-top:10px;">
                        ${p.vestine.map(v => `<span class="skill-tag ${eduTag}">${v}</span>`).join('')}
                    </div>
                    <div class="edu-buttons-container">${dugmadZaProjekat(p, r, idx)}</div>
                </div>`;
        }

        function azurirajDatumFootera() {
            Common.azurirajFooter(jezik);
            Common.azurirajJezikDugme(jezik);
        }

        function initFadeInReveal(root) {
            Common.initFadeInReveal(root);
        }

        function initScrollTopButton() {
            const dugme = document.getElementById('scroll-top-btn');
            if (!dugme) return;
            window.addEventListener('scroll', () => {
                dugme.classList.toggle('visible', window.scrollY > 400);
            }, { passive: true });
            dugme.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        function osvezi() {
            const r = recnik[jezik];

            el.navProfil.innerText = r.navProfil;
            el.navIskustvo.innerText = r.navIskustvo;
            el.navEdukacija.innerText = r.navEdukacija;
            el.navProjekti.innerText = r.navProjekti;
            el.navBlog.innerText = r.navBlog;
            el.navPromeni.innerHTML = `<i class="fa-solid fa-repeat"></i> ${r.navPromeni}`;
            el.bcPocetna.innerText = jezik === 'SRB'
                ? (mod === 'IT' ? 'Početna IT strana' : 'Početna pedagoška strana')
                : (mod === 'IT' ? 'Home (IT)' : 'Home (Teaching)');
            el.bcTrenutna.innerText = r.bcTrenutna;
            el.naslovProjekata.innerHTML = `<i class="fa-solid fa-folder-open"></i> ${r.naslovProjekata}`;

            el.projektiKontejner.innerHTML = r.projekti[mod].map((p, idx) => karticaHTML(p, r, idx)).join('');
            initFadeInReveal();

            el.langBtn.innerText = jezik === 'SRB' ? 'EN' : 'SRB';
            azurirajDatumFootera();
        }

        function otvoriModal(pdfPutanja, naslov) {
            el.modalTitleText.innerText = naslov;
            document.getElementById('pdf-spinner')?.classList.remove('sakriven');
            el.pdfViewer.src = pdfPutanja;
            el.pdfModal.style.display = 'flex';
            Common.otvoriModal(el.pdfModal);
        }

        function zatvoriModal() {
            el.pdfModal.style.display = 'none';
            el.pdfViewer.src = '';
            Common.zatvoriModal(el.pdfModal);
        }

        el.pdfModal.addEventListener('click', event => {
            if (event.target === el.pdfModal) zatvoriModal();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && el.pdfModal.style.display === 'flex') zatvoriModal();
        });

        function otvoriProjekatModal(idx) {
            const r = recnik[jezik];
            const p = r.projekti[mod][idx];
            if (!p) return;

            const highlightsHTML = (p.highlights || []).map(h => `
                <div class="case-study-highlight-card">
                    <div class="case-study-highlight-icon"><i class="fa-solid ${h.ikona}"></i></div>
                    <h4 class="case-study-highlight-naslov">${h.naslov}</h4>
                    <p class="case-study-highlight-opis">${h.opis}</p>
                    ${h.primer ? `<p class="case-study-highlight-primer">${h.primer}</p>` : ''}
                </div>
            `).join('');

            const takeawayHTML = p.kljucniIshod ? `
                <div class="case-study-takeaway">
                    <i class="fa-solid fa-quote-left case-study-takeaway-icon"></i>
                    <p class="case-study-takeaway-tekst">${p.kljucniIshod}</p>
                </div>
            ` : '';

            el.projekatModalNaslov.innerText = p.naziv;
            el.projekatModalTelo.innerHTML = `
                <p style="font-style:italic; opacity:0.85; margin-bottom:10px;">${p.podnaslov} • ${p.period}</p>
                <p class="exp-opis">${p.opis}</p>
                ${highlightsHTML ? `<div class="case-study-highlights">${highlightsHTML}</div>` : ''}
                ${takeawayHTML}
                <div class="tag-container" style="margin-top:20px;">${p.vestine.map(v => `<span class="skill-tag">${v}</span>`).join('')}</div>
                ${p.link ? `<a href="${p.link}" target="_blank" class="rad-link" style="margin-top:15px;"><i class="fa-brands fa-github"></i> ${r.tekstLinka}</a>` : ''}
            `;
            el.projekatModal.style.display = 'flex';
            Common.otvoriModal(el.projekatModal);
        }

        function zatvoriProjekatModal() {
            el.projekatModal.style.display = 'none';
            Common.zatvoriModal(el.projekatModal);
        }

        el.projekatModal.addEventListener('click', event => {
            if (event.target === el.projekatModal) zatvoriProjekatModal();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && el.projekatModal.style.display === 'flex') zatvoriProjekatModal();
        });

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

        function toggleMenu() {
            const aktivno = el.navLinks.classList.toggle('nav-active');
            const ikonica = el.hamburger.querySelector('i');
            ikonica.classList.toggle('fa-bars', !aktivno);
            ikonica.classList.toggle('fa-xmark', aktivno);
        }

        function podesiEduDropdown() {
            Common.initEduDropdown(mod);
        }

        primeniRezim();
        osvezi();
        podesiEduDropdown();
        initFadeInReveal();
        initScrollTopButton();