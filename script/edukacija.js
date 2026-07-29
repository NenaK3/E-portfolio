'use strict';

        const mod = sessionStorage.getItem('portfolioMod') || 'IT';
        document.body.classList.add(mod.toLowerCase() + '-theme');

        let jezik = localStorage.getItem('portfolioJezik') || 'SRB';
        let rezim = localStorage.getItem('portfolioRezim') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

        const dozvoljeniTipovi = ['formalno', 'neformalno'];
        const tipIzUrl = new URLSearchParams(window.location.search).get('tip');
        let tip = mod === 'IT' && dozvoljeniTipovi.includes(tipIzUrl) ? tipIzUrl : null;

        const mastIT = {
            SRB: { stepen: 'Master inženjer informacionih tehnologija', ustanova: 'Fakultet tehničkih nauka u Čačku, Univerzitet u Kragujevcu', period: 'Novembar 2024 - Oktobar 2025', opis: 'Tokom master studija specijalizovala sam se za napredne oblasti uključujući Web Mining, tehnike modeliranja i algoritme. Kroz Interakciju čovek-računar (HCI) istraživala sam spoj tehnologije i korisničkog iskustva.', link_programa: 'https://www.ftn.kg.ac.rs/studije/program/MAS_IT', vestine: ['HCI - Interakcija čovek-računar', 'Rudarenje veba', 'Rudarenje podataka', 'Razvoj digitalnih igara', 'Upravljanje kvalitetom softvera', 'Algoritmi i tehnike modelovanja'], radKey: 'master', radLinkTekst: 'Pogledaj rad' },
            ENG: { stepen: 'Master of Information Technology (M.Sc.)', ustanova: 'Faculty of Technical Sciences in Cacak', period: 'November 2024 - October 2025', opis: 'During my master\'s studies, I specialized in advanced areas including Web Mining, modeling techniques, and algorithms. Through Human-Computer Interaction (HCI), I explored the intersection of technology and user experience.', link_programa: 'https://www.ftn.kg.ac.rs/studije/program/MAS_IT', vestine: ['HCI - Human Computer Interaction', 'Web Mining', 'Data mining', 'Game Development', 'Software Quality Management', 'Algorithms and Modeling Techniques'], radKey: 'master', radLinkTekst: 'View Thesis' }
        };

        const bachIT = {
            SRB: { stepen: 'Diplomirani inženjer informacionih tehnologija', ustanova: 'Fakultet tehničkih nauka u Čačku, Univerzitet u Kragujevcu', period: 'Oktobar 2020 - Oktobar 2024', opis: 'Razvila sam čvrstu osnovu u razvoju softvera i upravljanju bazama podataka. Iskustvo sa C, C++, C#, Java, Kotlin, SQL i Oracle APEX.', link_programa: 'https://www.ftn.kg.ac.rs/studije/program/OAS_IT_23', vestine: ['JavaScript', 'C++', 'C#', 'C', 'Java', 'Kotlin', 'AngularJS', 'Node.js', 'MySQL', 'Oracle APEX', 'HTML', 'CSS', 'Bootstrap'], radKey: 'bachelor', radLinkTekst: 'Pogledaj rad' },
            ENG: { stepen: 'Bachelor of Information Technology (B.Sc.)', ustanova: 'Faculty of Technical Sciences in Cacak', period: 'October 2020 - October 2024', opis: 'I built a solid foundation in software development and database management, working with C, C++, C#, Java, Kotlin, SQL, and Oracle APEX.', link_programa: 'https://www.ftn.kg.ac.rs/studije/program/OAS_IT_23', vestine: ['JavaScript', 'C++', 'C#', 'C', 'Java', 'Kotlin', 'AngularJS', 'Node.js', 'MySQL', 'Oracle APEX', 'HTML', 'CSS', 'Bootstrap'], radKey: 'bachelor', radLinkTekst: 'View Thesis' }
        };

        const radovi = {
            master: {
                SRB: {
                    naziv: 'Master rad — Psihološki uticaji mehanika nagrađivanja u digitalnim igrama',
                    podnaslov: 'Master rad, FTN Čačak',
                    period: '2025',
                    opis: 'Rad istražuje psihološke mehanizme iza sistema nagrađivanja u digitalnim igrama — loot boxes, battle pass, achievement sisteme i dnevne bonuse — kroz teoriju operativnog uslovljavanja, intrinzičnu/ekstrinzičnu motivaciju, ulogu dopaminskog sistema i teoriju flow-a. Rad polazi od pitanja zašto digitalne igre uspevaju da zadrže pažnju igrača duže od većine drugih medija, i pokazuje da odgovor leži u pažljivo dizajniranim psihološkim okidačima, a ne u slučajnosti. Na primerima igara poput Fortnite-a i Minecraft-a analizira kako dizajn nagrađivanja utiče na angažovanost igrača, uz osvrt na etičke implikacije i preporuke za odgovorniji dizajn nagrađivanja.',
                    highlights: [
                        { ikona: 'fa-brain', naslov: 'Operativno uslovljavanje', opis: 'Skinerov princip modifikacije ponašanja kroz posledice — osnova za nagrade za postignuća i slučajno nagrađivanje u igrama.', primer: 'Primer: trofeji i dostignuća na Xbox/PlayStation platformama koji nagrađuju ponovljeno ponašanje.' },
                        { ikona: 'fa-bolt', naslov: 'Intrinzična i ekstrinzična motivacija', opis: 'Zašto igramo Minecraft radi samog zadovoljstva, a Fortnite često zbog Battle Pass nagrada.', primer: 'Primer: Minecraft/Zelda (intrinzična) nasuprot Fortnite Battle Pass-u (ekstrinzična).' },
                        { ikona: 'fa-flask', naslov: 'Dopaminski sistem', opis: 'Očekivane, randomizovane i progresivne nagrade i njihov uticaj na neurohemiju motivacije.', primer: 'Primer: postepeno otključavanje nagrada kroz Battle Pass nivoe pojačava očekivanje.' },
                        { ikona: 'fa-water', naslov: 'Flow teorija', opis: 'Stanje potpune uronjenosti u aktivnost — fokus, gubitak osećaja za vreme, "biti u zoni".', primer: 'Primer: igrači gube pojam o vremenu tokom dugih, intenzivnih sesija igranja.' },
                        { ikona: 'fa-box-open', naslov: 'Loot boxes', opis: 'Najkontroverznija mehanika — virtuelne kutije sa nasumičnim nagradama nepoznate vrednosti unapred.', primer: 'Primer: pojedine zemlje (Belgija, Holandija) regulišu ili zabranjuju loot boxes zbog sličnosti sa kockanjem.' },
                        { ikona: 'fa-calendar-check', naslov: 'Dnevni/mesečni bonusi', opis: 'Strategija zadržavanja igrača kroz formiranje navika i pozitivno pojačanje.', primer: 'Primer: dnevne nagrade za prijavljivanje koje grade rutinu vraćanja u igru.' }
                    ],
                    kljucniZakljucak: 'Rad zaključuje da odgovoran dizajn nagrađivanja treba da balansira angažovanost igrača sa etičkim standardima — posebno kada su u pitanju maloletni igrači i mehanike poput loot boxes koje se graniče sa kockanjem.',
                    vestine: ['Psihologija igara', 'HCI', 'Game Design', 'Istraživanje'],
                    mentor: 'Mentor rada - dr Veljko Aleksić, vanredni profesor'
                },
                ENG: {
                    naziv: 'Master Thesis — Psychological Effects of Reward Mechanics in Digital Games',
                    podnaslov: 'Master Thesis, FTS Cacak',
                    period: '2025',
                    opis: 'The thesis explores the psychological mechanisms behind reward systems in digital games — loot boxes, battle passes, achievement systems and daily bonuses — through operant conditioning theory, intrinsic/extrinsic motivation, the role of the dopamine system, and flow theory. It starts from the question of why digital games manage to hold player attention longer than most other media, and shows that the answer lies in carefully designed psychological triggers rather than coincidence. Using examples such as Fortnite and Minecraft, it analyzes how reward design affects player engagement, alongside a review of ethical implications and recommendations for more responsible reward design.',
                    highlights: [
                        { ikona: 'fa-brain', naslov: 'Operant Conditioning', opis: "Skinner's principle of behavior modification through consequences — the basis for achievement rewards and random reinforcement in games.", primer: 'Example: Xbox/PlayStation trophies and achievements that reward repeated behavior.' },
                        { ikona: 'fa-bolt', naslov: 'Intrinsic & Extrinsic Motivation', opis: 'Why we play Minecraft purely for enjoyment, while Fortnite often relies on Battle Pass rewards.', primer: 'Example: Minecraft/Zelda (intrinsic) versus Fortnite Battle Pass (extrinsic).' },
                        { ikona: 'fa-flask', naslov: 'Dopamine System', opis: 'Expected, randomized and progressive rewards and their effect on the neurochemistry of motivation.', primer: 'Example: gradual unlocking of rewards through Battle Pass tiers builds anticipation.' },
                        { ikona: 'fa-water', naslov: 'Flow Theory', opis: 'A state of complete immersion in an activity — full focus, loss of time-awareness, "being in the zone".', primer: 'Example: players lose track of time during long, intense play sessions.' },
                        { ikona: 'fa-box-open', naslov: 'Loot Boxes', opis: 'The most controversial mechanic — virtual boxes with random rewards of unknown value in advance.', primer: 'Example: some countries (Belgium, the Netherlands) regulate or ban loot boxes due to similarities with gambling.' },
                        { ikona: 'fa-calendar-check', naslov: 'Daily/Monthly Bonuses', opis: 'A player-retention strategy built on habit formation and positive reinforcement.', primer: 'Example: daily login rewards that build a routine of returning to the game.' }
                    ],
                    kljucniZakljucak: 'The thesis concludes that responsible reward design must balance player engagement with ethical standards — particularly regarding minors and mechanics such as loot boxes that border on gambling.',
                    vestine: ['Game Psychology', 'HCI', 'Game Design', 'Research'],
                    mentor: 'Thesis Mentor - dr Veljko Aleksić, Associate Professor'
                }
            },
            bachelor: {
                SRB: {
                    naziv: 'Diplomski rad — Primena standarda za modelovanje u razvoju informacionih sistema',
                    podnaslov: 'Diplomski rad, FTN Čačak',
                    period: '2024',
                    opis: 'Rad analizira i upoređuje standarde za modelovanje informacionih sistema — IDEF0, IDEF1X, UML i BPMN — kroz njihovu primenu u funkcionalnom, informacionom i aplikativnom modelovanju. Polazna tačka rada je problem dvosmislenosti prirodnog jezika u komunikaciji između razvojnih timova i korisnika, i potreba za formalnim, ali razumljivim jezikom modelovanja. Kroz razradu faza razvoja informacionog sistema rad pokazuje kako modelovanje smanjuje kompleksnost sistema i olakšava komunikaciju između razvojnih timova i korisnika.',
                    highlights: [
                        { ikona: 'fa-diagram-project', naslov: 'IDEF0', opis: 'Funkcionalno modelovanje — opisivanje, analiza i modelovanje sistema i procesa kroz pravougaonike, strelice i pravila.', primer: 'Primer: prikaz ulaza, izlaza, kontrola i mehanizama jednog poslovnog procesa kroz standardizovanu notaciju.' },
                        { ikona: 'fa-database', naslov: 'IDEF1X', opis: 'Informaciono modelovanje za projektovanje relacionih baza podataka — entiteti, atributi, veze.', primer: 'Primer: modelovanje entiteta poput "Korisnik" i "Narudžbina" i veza između njih.' },
                        { ikona: 'fa-sitemap', naslov: 'UML', opis: 'Objedinjeni jezik za modelovanje — dijagrami ponašanja, interakcije i strukturni dijagrami.', primer: 'Primer: dijagrami klasa, use case i sekvencijalni dijagrami u objektno-orijentisanom dizajnu.' },
                        { ikona: 'fa-people-arrows', naslov: 'BPMN', opis: 'Notacija za modelovanje poslovnih procesa kroz aktivnosti, događaje i tok podataka.', primer: 'Primer: prikaz toka odobravanja zahteva kroz aktivnosti, grananja i odluke.' }
                    ],
                    kljucniZakljucak: 'Rad zaključuje da kombinovana primena IDEF0, IDEF1X, UML i BPMN standarda obezbeđuje precizniju komunikaciju između razvojnih timova i korisnika, smanjujući dvosmislenost u svim fazama razvoja informacionog sistema.',
                    vestine: ['IDEF0', 'IDEF1X', 'UML', 'BPMN', 'Modelovanje IS'],
                    mentor: 'Mentor rada - dr Miloš Papić, redovni profesor'
                },
                ENG: {
                    naziv: 'Bachelor Thesis — Application of Modeling Standards in Information Systems Development',
                    podnaslov: 'Bachelor Thesis, FTS Cacak',
                    period: '2024',
                    opis: 'The thesis analyzes and compares information system modeling standards — IDEF0, IDEF1X, UML, and BPMN — through their application in functional, informational, and application modeling. Its starting point is the ambiguity problem of natural language in communication between development teams and users, and the need for a formal yet understandable modeling language. By elaborating on the development phases of an information system, the thesis shows how modeling reduces system complexity and facilitates communication between development teams and users.',
                    highlights: [
                        { ikona: 'fa-diagram-project', naslov: 'IDEF0', opis: 'Functional modeling — describing, analyzing and modeling systems and processes through boxes, arrows and rules.', primer: 'Example: representing the inputs, outputs, controls and mechanisms of a business process through standardized notation.' },
                        { ikona: 'fa-database', naslov: 'IDEF1X', opis: 'Information modeling for relational database design — entities, attributes, relationships.', primer: 'Example: modeling entities such as "Customer" and "Order" and the relationships between them.' },
                        { ikona: 'fa-sitemap', naslov: 'UML', opis: 'Unified Modeling Language — behavioral, interaction and structural diagrams.', primer: 'Example: class diagrams, use case diagrams and sequence diagrams in object-oriented design.' },
                        { ikona: 'fa-people-arrows', naslov: 'BPMN', opis: 'Business process modeling notation using activities, events and data flow.', primer: 'Example: representing a request-approval workflow through activities, branches and decisions.' }
                    ],
                    kljucniZakljucak: 'The thesis concludes that combining IDEF0, IDEF1X, UML and BPMN standards provides more precise communication between development teams and users, reducing ambiguity across every phase of information system development.',
                    vestine: ['IDEF0', 'IDEF1X', 'UML', 'BPMN', 'IS Modeling'],
                    mentor: 'Thesis Mentor - dr Miloš Papić, Full Professor'
                }
            }
        };

        const pedagoski = {
            SRB: { stepen: 'Master profesor predmetne nastave', ustanova: 'Fakultet tehničkih nauka u Čačku, Univerzitet u Kragujevcu', period: 'Novembar 2025 - Trenutno', opis: 'Master program fokusiran na pedagošku metodologiju, psihologiju obrazovanja i integraciju modernih tehnologija u učionici.', link_programa: 'https://www.ftn.kg.ac.rs/studije/program/MAS_PN', vestine: ['Psihologija', 'Pedagogija', 'Komunikacione veštine', 'Metodika nastave', 'Obrazovne tehnologije', 'Multimedijalne tehnologije i komunikacije'] },
            ENG: { stepen: 'Master Professor of Subject Teaching', ustanova: 'Faculty of Technical Sciences in Cacak', period: 'November 2025 - Present', opis: 'Focus on pedagogical methodology, educational psychology and classroom technology integration.', link_programa: 'https://www.ftn.kg.ac.rs/studije/program/MAS_PN', vestine: ['Psychology', 'Pedagogy', 'Docimology', 'Communication skills', 'Teaching methodology', 'Educational technologies', 'Multimedia technologies and communication'] }
        };

        const neformalnoPodaci = {
            SRB: [
                { kurs: 'Baze podataka', izdavac: 'freeCodeCamp', period: 'Maj 2026', githubLink: 'https://github.com/NenaK3/freecodecamp-Relational-Databases.git', verifikacijaLink: 'https://www.freecodecamp.org/certification/nena_k/relational-database-v8', opis: 'Intenzivan kurs posvećen radu sa relacionim bazama podataka, u okviru kog sam kroz praktične zadatke naučila da projektujem šeme baza, pišem složene SQL upite i optimizujem njihove performanse. Radila sam u Linux okruženju koristeći komandnu liniju i Bash skripte za automatizaciju svakodnevnih zadataka, dok sam kroz Git usvojila disciplinu verzionisanja koda i praćenja izmena. Poseban fokus bio je na PostgreSQL sistemu upravljanja bazama, uključujući normalizaciju podataka, indeksiranje i pisanje agregatnih upita.', vestine: ['PostgreSQL', 'SQL', 'Git & GitHub'] },
                { kurs: 'Responzivni veb dizajn', izdavac: 'freeCodeCamp', period: 'Mart 2026', githubLink: 'https://github.com/NenaK3/freecodecamp-Responsive-Web-Design.git', verifikacijaLink: 'https://www.freecodecamp.org/certification/nena_k/responsive-web-design', opis: 'Sveobuhvatan kurs kroz koji sam usavršila principe responzivnog dizajna — od fleksibilnih layout tehnika poput Flexbox-a i CSS Grid-a, do medijskih upita koji obezbeđuju da sajt izgleda besprekorno na svim veličinama ekrana. Naučila sam da strukturiram semantički ispravan HTML5 kod i primenim napredne CSS tehnike stilizovanja, uključujući animacije, tranzicije i pristupačan dizajn. Kroz niz praktičnih projekata izgradila sam naviku da razmišljam mobile-first i testiram rešenja na različitim rezolucijama.', vestine: ['HTML', 'HTML5', 'CSS'] },
                { kurs: 'Excel VBA programiranje', izdavac: 'Kampster AI', period: 'April 2025', sertifikatFajl: 'assets/sertifikat/srb - Excel VBA programiranje - osnovni nivo.pdf', opis: 'Kurs fokusiran na automatizaciju repetitivnih zadataka unutar Excel-a pomoću VBA (Visual Basic for Applications) programskog jezika. Naučila sam da pišem makroe koji ubrzavaju obradu podataka, kreiram korisničke forme (UserForms) za unos podataka i kontrolišem tok izvršavanja pomoću petlji i uslovnih struktura. Ovo znanje mi je pomoglo da razumem kako se poslovni procesi mogu automatizovati bez potrebe za razvojem posebne softverske aplikacije.', vestine: ['VBA', 'Automatizacija'] },
                { kurs: 'Power BI', izdavac: 'Kampster AI', period: 'Decembar 2024', sertifikatFajl: 'assets/sertifikat/srb - Microsoft Power BI.pdf', opis: 'Obuka posvećena analizi, modelovanju i vizuelizaciji podataka kroz Power BI Desktop alat. Naučila sam da povežem različite izvore podataka, kreiram relacije između tabela i pišem DAX formule za napredna izračunavanja. Kroz izradu interaktivnih izveštaja i dashboard-a stekla sam veštinu pretvaranja sirovih podataka u jasne vizuelne priče koje olakšavaju donošenje poslovnih odluka.', vestine: ['Power BI', 'Analiza podataka'] },
                { kurs: 'Adobe Dreamweaver', izdavac: 'Akademija Oxford', period: '2021', githubLink: 'https://github.com/NenaK3/E-portfolio.git', sertifikatFajl: 'assets/sertifikat/Adobe Dreamweaver.pdf', opis: 'Jedan od mojih prvih kurseva iz oblasti veb razvoja, kroz koji sam savladala osnove izrade veb stranica u Adobe Dreamweaver okruženju. Naučila sam standarde modernog veb dizajna, strukturiranje HTML dokumenata i osnovno CSS stilizovanje, kao i principe organizacije fajlova unutar projekta. Ovaj kurs je postavio temelje mog interesovanja za frontend razvoj koje sam kasnije nadogradila kroz akademsko obrazovanje i profesionalnu praksu.', vestine: ['HTML', 'HTML5', 'CSS', 'Web design', 'Web development'] }
            ],
            ENG: [
                { kurs: 'Databases', izdavac: 'freeCodeCamp', period: 'May 2026', githubLink: 'https://github.com/NenaK3/freecodecamp-Relational-Databases.git', verifikacijaLink: 'https://www.freecodecamp.org/certification/nena_k/relational-database-v8', opis: 'An intensive course focused on relational database systems, where I learned to design database schemas, write complex SQL queries, and optimize query performance through hands-on exercises. I worked within a Linux environment using the command line and Bash scripts to automate everyday tasks, while Git taught me the discipline of version control and change tracking. Special emphasis was placed on PostgreSQL, including data normalization, indexing, and writing aggregate queries.', vestine: ['PostgreSQL', 'SQL', 'Git & GitHub'] },
                { kurs: 'Responsive Web Design', izdavac: 'freeCodeCamp', period: 'March 2026', githubLink: 'https://github.com/NenaK3/freecodecamp-Responsive-Web-Design.git', verifikacijaLink: 'https://www.freecodecamp.org/certification/nena_k/responsive-web-design', opis: 'A comprehensive course through which I mastered responsive design principles — from flexible layout techniques such as Flexbox and CSS Grid, to media queries that ensure a site looks flawless across all screen sizes. I learned to structure semantically correct HTML5 and apply advanced CSS styling techniques, including animations, transitions, and accessible design. Through a series of hands-on projects I built the habit of thinking mobile-first and testing solutions across different resolutions.', vestine: ['HTML', 'HTML5', 'CSS'] },
                { kurs: 'Excel VBA Programming', izdavac: 'Kampster AI', period: 'April 2025', sertifikatFajl: 'assets/sertifikat/eng - Excel VBA programiranje - osnovni nivo.pdf', opis: 'A course focused on automating repetitive tasks in Excel using the VBA (Visual Basic for Applications) programming language. I learned to write macros that speed up data processing, build UserForms for data entry, and control program flow using loops and conditional structures. This knowledge helped me understand how business processes can be automated without developing a separate software application.', vestine: ['VBA', 'Automation'] },
                { kurs: 'Power BI', izdavac: 'Kampster AI', period: 'December 2024', sertifikatFajl: 'assets/sertifikat/eng - Microsoft Power BI.pdf', opis: 'Training focused on analyzing, modeling, and visualizing data using the Power BI Desktop tool. I learned to connect multiple data sources, build relationships between tables, and write DAX formulas for advanced calculations. Through building interactive reports and dashboards, I developed the skill of turning raw data into clear visual stories that support business decision-making.', vestine: ['Power BI', 'Data Analysis'] },
                { kurs: 'Adobe Dreamweaver', izdavac: 'Oxford Academy', period: '2021', githubLink: 'https://github.com/NenaK3/E-portfolio.git', sertifikatFajl: 'assets/sertifikat/Adobe Dreamweaver.pdf', opis: 'One of my first courses in web development, through which I learned the basics of building websites in the Adobe Dreamweaver environment. I learned modern web design standards, HTML document structuring, and basic CSS styling, as well as project file organization principles. This course laid the foundation for my interest in frontend development, which I later built upon through academic study and professional experience.', vestine: ['HTML', 'HTML5', 'CSS', 'Web design', 'Web development'] }
            ]
        };

        function formalnoZa(j) {
            return {
                IT: [mastIT[j], bachIT[j]],
                Edukacija: [pedagoski[j], mastIT[j], bachIT[j]]
            };
        }

        const recnik = {
            SRB: {
                navProfil: 'Profil', navIskustvo: 'Iskustvo', navEdukacija: 'Edukacija', navBlog: 'Blog', navPromeni: 'Promeni portfolio',
                naslovFormalno: 'Formalno obrazovanje', naslovNeformalno: 'Neformalno obrazovanje',
                tekstPogledajSertifikat: 'Pogledaj sertifikat',
                tekstEksterniOpis: 'Ovaj sertifikat se nalazi na freeCodeCamp platformi. Iz bezbednosnih razloga sajt ne dozvoljava prikaz unutar ovog prozora — klikni dugme ispod da ga pogledaš.',
                tekstOtvoriSertifikat: 'Otvori sertifikat',
                footer: '©Copyright by Nena Kozić',
                bcTrenutna: 'Edukacija'
            },
            ENG: {
                navProfil: 'Profile', navIskustvo: 'Experience', navEdukacija: 'Education', navBlog: 'Blog', navPromeni: 'Switch Portfolio',
                naslovFormalno: 'Formal education', naslovNeformalno: 'Non-formal education',
                tekstPogledajSertifikat: 'View Certificate',
                tekstEksterniOpis: 'This certificate is hosted on the freeCodeCamp platform. For security reasons the site does not allow it to be displayed inside this window — click the button below to view it.',
                tekstOtvoriSertifikat: 'Open Certificate',
                footer: '©Copyright by Nena Kozić',
                bcTrenutna: 'Education'
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
            bcSepDodatno: document.getElementById('bc-sep-dodatno'),
            bcDodatno: document.getElementById('bc-dodatno'),
            naslovFormalno: document.getElementById('naslov-formalno'),
            naslovNeformalno: document.getElementById('naslov-neformalno'),
            footer: document.getElementById('idx-footer-copy'),
            footerDatum: document.getElementById('idx-footer-datum'),
            glavniKontejner: document.getElementById('edu-glavni-kontejner'),
            kolonaFormalno: document.getElementById('kolona-formalno'),
            kolonaNeformalno: document.getElementById('kolona-neformalno'),
            formalnoKontejner: document.getElementById('formalno-kontejner'),
            neformalnoKontejner: document.getElementById('neformalno-kontejner'),
            langBtn: document.getElementById('nav-lang-btn'),
            themeBtn: document.getElementById('nav-theme-btn'),
            hamburgerBtn: document.getElementById('hamburger-btn'),
            navLinks: document.getElementById('nav-links-id'),
            eduFormalnoLink: document.getElementById('nav-edu-formalno'),
            eduNeformalnoLink: document.getElementById('nav-edu-neformalno'),
            radModal: document.getElementById('rad-modal'),
            radModalNaslov: document.getElementById('rad-modal-naslov'),
            radModalTelo: document.getElementById('rad-modal-telo'),
            sertifikatModal: document.getElementById('sertifikat-modal'),
            sertifikatModalNaslov: document.getElementById('sertifikat-modal-naslov'),
            sertifikatModalTelo: document.getElementById('sertifikat-modal-telo')
        };

        function karticaHTML({ naslov, podnaslov, period, opis, link, linkTekst, vestine, extraClass = '', tagClass = 'skill-tag', radDugme = '', sertifikatHTML = '' }) {
            return `
                <div class="card experience-card edu-split-card fade-in-up ${extraClass}">
                    <div class="exp-header">
                        <div><h3>${naslov}</h3><h4>${podnaslov}</h4></div>
                        <span class="block-date">${period}</span>
                    </div>
                    <p class="exp-opis">${opis}</p>
                    ${link ? `<a href="${link}" target="_blank" class="project-link"><i class="${extraClass ? 'fa-brands fa-github' : 'fa-solid fa-link'}"></i> ${linkTekst}</a>` : ''}
                    ${radDugme}
                    ${sertifikatHTML}
                    <div class="tag-container" style="${extraClass ? 'margin-top:10px;' : ''}">${vestine.map(v => `<span class="${tagClass}">${v}</span>`).join('')}</div>
                </div>`;
        }

        function sertifikatDugmadHTML(n, r) {
            const putanja = n.verifikacijaLink || n.sertifikatFajl;
            if (!putanja) return '';

            const naslovEskejp = n.kurs.replace(/'/g, "\\'");
            return `<div class="cert-buttons-row"><a href="javascript:void(0)" onclick="otvoriSertifikatModal('${putanja}', '${naslovEskejp}')" class="project-link cert-link"><i class="fa-solid fa-certificate"></i> ${r.tekstPogledajSertifikat}</a></div>`;
        }

        function otvoriRadModal(kljuc) {
            const r = radovi[kljuc][jezik];
            const highlightsHTML = (r.highlights || []).map(h => `
                <div class="case-study-highlight-card">
                    <div class="case-study-highlight-icon"><i class="fa-solid ${h.ikona}"></i></div>
                    <h4 class="case-study-highlight-naslov">${h.naslov}</h4>
                    <p class="case-study-highlight-opis">${h.opis}</p>
                    ${h.primer ? `<p class="case-study-highlight-primer">${h.primer}</p>` : ''}
                </div>
            `).join('');

            const takeawayHTML = r.kljucniZakljucak ? `
                <div class="case-study-takeaway">
                    <i class="fa-solid fa-quote-left case-study-takeaway-icon"></i>
                    <p class="case-study-takeaway-tekst">${r.kljucniZakljucak}</p>
                </div>
            ` : '';

            el.radModalNaslov.innerText = r.naziv;
            el.radModalTelo.innerHTML = `
                <p style="font-style:italic; opacity:0.85; margin-bottom:10px;">${r.podnaslov} • ${r.period}</p>
                <p class="exp-opis">${r.opis}</p>
                ${highlightsHTML ? `<div class="case-study-highlights">${highlightsHTML}</div>` : ''}
                ${takeawayHTML}
                <div class="tag-container" style="margin-top:20px;">${r.vestine.map(v => `<span class="skill-tag">${v}</span>`).join('')}</div>
                <p class="exp-mentor" style="font-style: italic; font-weight: 500; margin-top: 15px;"><i class="fa-solid fa-user-tie" style="margin-right: 8px;"></i>${r.mentor}</p>
            `;
            el.radModal.style.display = 'flex';
            Common.otvoriModal(el.radModal);
        }

        function zatvoriRadModal() {
            el.radModal.style.display = 'none';
            Common.zatvoriModal(el.radModal);
        }

        el.radModal.addEventListener('click', event => {
            if (event.target === el.radModal) zatvoriRadModal();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && el.radModal.style.display === 'flex') zatvoriRadModal();
        });

        function otvoriSertifikatModal(putanja, naslov) {
            el.sertifikatModalNaslov.innerText = naslov;
            const staza = putanja.toLowerCase();

            if (staza.endsWith('.pdf')) {
                el.sertifikatModalTelo.innerHTML = `
                    <div class="modal-loading-wrap">
                        <div class="modal-spinner" id="sertifikat-spinner"><div class="spinner-krug"></div></div>
                        <iframe src="${putanja}" title="${naslov}" onload="document.getElementById('sertifikat-spinner')?.classList.add('sakriven')"></iframe>
                    </div>`;
            } else if (staza.endsWith('.png') || staza.endsWith('.jpg') || staza.endsWith('.jpeg')) {
                el.sertifikatModalTelo.innerHTML = `<img src="${putanja}" alt="${naslov}" loading="lazy">`;
            } else {
                const r = recnik[jezik];
                el.sertifikatModalTelo.innerHTML = `
                    <div class="cert-external-card">
                        <i class="fa-solid fa-shield-halved cert-external-icon"></i>
                        <p class="cert-external-tekst">${r.tekstEksterniOpis}</p>
                        <a href="${putanja}" target="_blank" class="cert-external-btn"><i class="fa-solid fa-up-right-from-square"></i> ${r.tekstOtvoriSertifikat}</a>
                    </div>`;
            }

            el.sertifikatModal.style.display = 'flex';
            Common.otvoriModal(el.sertifikatModal);
        }

        function zatvoriSertifikatModal() {
            el.sertifikatModal.style.display = 'none';
            el.sertifikatModalTelo.innerHTML = '';
            Common.zatvoriModal(el.sertifikatModal);
        }

        el.sertifikatModal.addEventListener('click', event => {
            if (event.target === el.sertifikatModal) zatvoriSertifikatModal();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && el.sertifikatModal.style.display === 'flex') zatvoriSertifikatModal();
        });

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
            el.navBlog.innerText = r.navBlog;
            el.navPromeni.innerHTML = `<i class="fa-solid fa-repeat"></i> ${r.navPromeni}`;
            el.bcPocetna.innerText = jezik === 'SRB'
                ? (mod === 'IT' ? 'Početna IT strana' : 'Početna pedagoška strana')
                : (mod === 'IT' ? 'Home (IT)' : 'Home (Teaching)');
            el.bcTrenutna.innerText = r.bcTrenutna;

            if (tip === 'formalno' || tip === 'neformalno') {
                el.bcTrenutna.classList.remove('bc-current');
                el.bcSepDodatno.style.display = 'inline';
                el.bcDodatno.style.display = 'inline';
                el.bcDodatno.innerText = tip === 'formalno' ? r.naslovFormalno : r.naslovNeformalno;
            } else {
                el.bcTrenutna.classList.add('bc-current');
                el.bcSepDodatno.style.display = 'none';
                el.bcDodatno.style.display = 'none';
            }
            el.naslovFormalno.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${r.naslovFormalno}`;
            el.naslovNeformalno.innerHTML = `<i class="fa-solid fa-certificate"></i> ${r.naslovNeformalno}`;
            el.footer.innerText = r.footer;
            azurirajDatumFootera();
            el.langBtn.innerText = jezik === 'SRB' ? 'EN' : 'SRB';

            const jeEdukacijaMod = mod === 'Edukacija';
            const prikaziSamoFormalno = jeEdukacijaMod || tip === 'formalno';
            const prikaziSamoNeformalno = mod === 'IT' && tip === 'neformalno';
            const jednaKolona = prikaziSamoFormalno || prikaziSamoNeformalno;

            el.kolonaFormalno.style.display = prikaziSamoNeformalno ? 'none' : 'block';
            el.kolonaNeformalno.style.display = (jeEdukacijaMod || prikaziSamoFormalno) ? 'none' : 'block';
            el.glavniKontejner.classList.toggle('single-column', jednaKolona);
            el.glavniKontejner.style.gridTemplateColumns = jednaKolona ? '1fr' : '1fr 1fr';
            el.glavniKontejner.style.maxWidth = jednaKolona ? '900px' : '1400px';

            if (el.eduFormalnoLink && el.eduNeformalnoLink) {
                el.eduFormalnoLink.classList.toggle('active', tip === 'formalno');
                el.eduNeformalnoLink.classList.toggle('active', tip === 'neformalno');
            }

            const formalno = formalnoZa(jezik)[mod];
            el.formalnoKontejner.innerHTML = formalno.map(f => karticaHTML({
                naslov: f.stepen, podnaslov: f.ustanova, period: f.period, opis: f.opis,
                link: f.link_programa, linkTekst: 'Studijski program', vestine: f.vestine,
                radDugme: f.radKey ? `<a href="javascript:void(0)" onclick="otvoriRadModal('${f.radKey}')" class="rad-link"><i class="fa-solid fa-book"></i> ${f.radLinkTekst}</a>` : ''
            })).join('');

            if (mod === 'IT') {
                el.neformalnoKontejner.innerHTML = neformalnoPodaci[jezik].map(n => karticaHTML({
                    naslov: n.kurs, podnaslov: n.izdavac, period: n.period, opis: n.opis,
                    link: n.githubLink, linkTekst: 'GitHub Code', vestine: n.vestine,
                    extraClass: 'spec-course-card', tagClass: 'skill-tag course-tag',
                    sertifikatHTML: sertifikatDugmadHTML(n, r)
                })).join('');
            }
            initFadeInReveal();
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
            el.hamburgerBtn.querySelector('i').classList.toggle('fa-bars', !prikazano);
            el.hamburgerBtn.querySelector('i').classList.toggle('fa-xmark', prikazano);
        }

        function podesiEduDropdown() {
            Common.initEduDropdown(mod);
        }

        primeniRezim();
        osvezi();
        podesiEduDropdown();
        initFadeInReveal();
        initScrollTopButton();