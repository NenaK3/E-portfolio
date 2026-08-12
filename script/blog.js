'use strict';

        const mod = sessionStorage.getItem('portfolioMod') || 'IT';
        document.body.classList.add(mod.toLowerCase() + '-theme');

        let jezik = localStorage.getItem('portfolioJezik') || 'SRB';
        let rezim = localStorage.getItem('portfolioRezim') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

        const recnik = {
            SRB: {
                navProfil: 'Profil', navIskustvo: 'Iskustvo', navEdukacija: 'Edukacija', navProjekti: 'Projekti', navBlog: 'Blog', navPromeni: 'Promeni portfolio',
                naslovBlog: 'Beleške',
                uvod: 'Kratke i detaljne refleksije o iskustvima koja su me oblikovala — ne samo šta sam radila, već i zašto, šta sam u hodu naučila i šta bih danas primenila drugačije.',
                tekstCitaj: 'Pročitaj kompletnu belešku',
                tekstVreme: (n) => n === 1 ? '1 min čitanja' : `${n} min čitanja`,
                naslovPovezano: 'Povezane beleške',
                bcTrenutna: 'Blog',
                footer: '©Copyright by Nena Kozić',
                pretragaPlaceholder: 'Pretraži beleške...',
                pretragaRezultati: (n) => n === 1 ? '1 rezultat pretrage' : `${n} rezultata pretrage`,
                pretragaNemaRezultata: 'Nema beleški koje odgovaraju pretrazi. Pokušajte drugi pojam.',
                oznakaPin: 'Zakačeno',
                oznakaIstaknuto: 'Istaknuto',
                svaKategorija: 'Sve',
                sortLabela: 'Sortiraj:',
                sortNajnovije: 'Najnovije',
                sortNajstarije: 'Najstarije',
                sortAZ: 'Sortiraj od A do Z',
                sortZA: 'Sortiraj od Z do A',
                kategorije: {
                    'projekti': 'Projekti',
                    'performanse': 'Performanse',
                    'kod-kvalitet': 'Kod i kvalitet',
                    'istrazivanje': 'Istraživanje',
                    'praksa': 'Praksa',
                    'metodika': 'Metodika'
                },
                objave: {
                    IT: [
                        {
                            naslov: 'PageSpeed Insights rezultati mog portfolija',
                            id: 'it-pagespeed',
                            kategorija: 'performanse',
                            datum: 'Jul 2026',
                            pin: true,
                            povezano: ['it-portfolio'],
                            opis: 'Proverila sam sajt kroz Google PageSpeed Insights na mobilnom i desktop uređaju — rezultat je potvrda da su prethodne optimizacije performansi, pristupačnosti i SEO-a zaista dale opipljive rezultate.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-gauge-high"></i> Lični projekat • Merenje performansi • 2026</div>
                                   <p class="modal-intro">Nakon serije unapređenja sajta — od optimizacije slika i skripti, preko ujednačavanja koda, do detaljnog rada na pristupačnosti — odlučila sam da rezultate proverim objektivnim alatom. Pokrenula sam <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener">Google PageSpeed Insights</a> i uporedila ocene na mobilnom i desktop uređaju.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-mobile-screen-button"></i> Rezultati — Mobilni uređaj</div>
                                       <div class="pagespeed-score-grid">
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">89</span><span class="pagespeed-score-naziv">Performance</span></div>
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">95</span><span class="pagespeed-score-naziv">Accessibility</span></div>
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">96</span><span class="pagespeed-score-naziv">Best Practices</span></div>
                                           <div class="pagespeed-score-card score-perfect"><span class="pagespeed-score-broj">100</span><span class="pagespeed-score-naziv">SEO</span></div>
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">2/2</span><span class="pagespeed-score-naziv">Agentic Browsing</span></div>
                                       </div>
                                       <div class="modal-example"><strong>Napomena:</strong> ocena za Performance na mobilnom uređaju varira između merenja i ide do 94, u zavisnosti od trenutnog opterećenja mreže i uređaja na kom se test pokreće — što je uobičajena pojava kod mobilnih Lighthouse merenja.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-desktop"></i> Rezultati — Desktop uređaj</div>
                                       <div class="pagespeed-score-grid">
                                           <div class="pagespeed-score-card score-perfect"><span class="pagespeed-score-broj">100</span><span class="pagespeed-score-naziv">Performance</span></div>
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">95</span><span class="pagespeed-score-naziv">Accessibility</span></div>
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">96</span><span class="pagespeed-score-naziv">Best Practices</span></div>
                                           <div class="pagespeed-score-card score-perfect"><span class="pagespeed-score-broj">100</span><span class="pagespeed-score-naziv">SEO</span></div>
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">2/2</span><span class="pagespeed-score-naziv">Agentic Browsing</span></div>
                                       </div>
                                       <div class="modal-example"><strong>Napomena:</strong> na desktop uređaju Performance dosledno dostiže maksimalnih 100, dok kategorija Agentic Browsing povremeno pokaže 1/2 umesto 2/2, u zavisnosti od merenja.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-magnifying-glass-chart"></i> Šta ove ocene zapravo pokazuju</div>
                                       <div class="modal-section-text">Kategorije Performance, Accessibility, Best Practices i SEO predstavljaju standardni Lighthouse okvir za merenje kvaliteta veb stranice, dok je Agentic Browsing novija kategorija koja procenjuje koliko je sajt razumljiv i lako upotrebljiv AI agentima i automatizovanim alatima koji pretražuju sadržaj u ime korisnika.</div>
                                       <div class="modal-example"><strong>Veza sa prethodnim radom:</strong> visoke ocene za pristupačnost i SEO direktno su rezultat ranijih izmena — jedinstvenih ARIA atributa, semantičkog HTML-a, strukturiranih JSON-LD podataka, sitemap.xml fajla i optimizovanih slika opisanih u prethodnim beleškama ovog bloga.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Zaključak:</strong> Konzistentne visoke ocene na oba tipa uređaja potvrđuju da tehnički temelji sajta — brzina učitavanja, pristupačnost i optimizacija za pretraživače — rade kako treba, a manja odstupanja na mobilnom Performance rezultatu ostaju sledeći cilj za dalju optimizaciju.
                                   </div>`
                        },
                        {
                            naslov: 'Šta sam naučila praveći ovaj e-portfolio',
                            id: 'it-portfolio',
                            kategorija: 'projekti',
                            datum: 'Jul 2026',
                            povezano: ['it-pagespeed'],
                            opis: 'Pretpostavljala sam da će najznačajniji izazov predstavljati vizuelni dizajn. Pokazalo se, međutim, da je suštinski izazov ležao u arhitekturi koda i podeli sadržaja namenjenog dvema potpuno različitim ciljnim grupama na istim stranicama.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-code"></i> Lični projekat • 2026</div>
                                   <p class="modal-intro">Izrada ovog interaktivnog e-portfolija bila je praktična studija slučaja o tome kako balansirati kompleksnu funkcionalnost, čiste arhitektonske obrasce i besprekorno korisničko iskustvo bez oslanjanja na teške eksterne biblioteke.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-layer-group"></i> Razdvajanje podataka od prikaza</div>
                                       <div class="modal-section-text">Kompletan tekstualni sadržaj, višejezični prevodi (SRB/ENG) i podaci specifični za režim rada (IT vs. Edukacija) izmenjeni su tako da se čuvaju unutar centralizovanih JavaScript objekata. HTML deluje isključivo kao strukturni skelet.</div>
                                       <div class="modal-example"><strong>Svrha:</strong> Dodavanje ili ažuriranje novog projekta, kursa ili beleške zahteva izmenu samo jednog JS objekta, čime je eliminisano bilo kakvo dupliranje koda ili ručna izmena HTML/CSS datoteka.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-universal-access"></i> Napredna pristupačnost i responzivnost</div>
                                       <div class="modal-section-text">Fokus je postavljen na univerzalnu pristupačnost (A11y). Posebna pažnja posvećena je navigaciji putem tastature, upravljanju stanja unutar modalnih prozora, ARIA atributima i podršci za korisničke preferencije prikaza.</div>
                                       <div class="modal-example"><strong>Praktični primeri:</strong> Implementiran je skip-link za brz preskok na glavni sadržaj, jasno vidljivi focus-visible okviri za navigaciju tastaturom, meta opcije za podudaranje sistemske teme, kao i prilagođeni medijski upiti za korisnike koji preferiraju smanjene animacije (prefers-reduced-motion).</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-gears"></i> Upravljanje stanjem i sesijom</div>
                                       <div class="modal-section-text">Aplikacija trenutno pamti izbor profila (IT vs. Pedagoški) putem <code>sessionStorage</code> objekta, dok se izabrani jezik i tema čuvaju u <code>localStorage</code> skladištu, obezbeđujući kontinuitet pri osvežavanju i prelistavanju stranica.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-wrench"></i> Identifikovani tehnički dug i plan optimizacije</div>
                                       <div class="modal-section-text">Iako sistem odlično funkcioniše u vanmrežnom režimu bez zavisnosti, uočene su tačke za dalje unapređenje arhitekture.</div>
                                       <div class="modal-example"><strong>Naredni korak:</strong> U sledećoj iteraciji planiram da prevaziđem duplirane skripte izdvajanjem rečnika, navigacije i podnožja u modularne Web Komponente (Custom Elements) ili samostalan JS modul radi još jednostavnijeg održavanja.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Zaključak:</strong> Sajt je iz statičke prezentacije prerastao u samostalan inženjerski projekat koji potvrđuje kompetencije u arhitekturi koda, UX/UI dizajnu i pedantnoj posvećenosti detaljima.
                                   </div>`
                        },
                                                {
                            naslov: 'Rudarstvo veba u praksi: Od analize grafa do rudarenja sentimenta',
                            id: 'it-webmining',
                            kategorija: 'istrazivanje',
                            datum: 'Jul 2025',
                            opis: 'Pregled pet praktičnih domaćih zadataka u okviru predmeta Web Mining na master studijama — analiza linkova algoritmima PageRank i HITS (Moz), analiza log fajlova veb servera (Nihuo), analiza socijalnih mreža na Marvel Universe skupu podataka (Gephi), klasterovanje K-Means i DBSCAN algoritmima u Python-u i analiza mišljenja u alatu Altair AI Studio.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-brain"></i> Master akademske studije • 2024/2025</div>
                                   <p class="modal-intro">Predmet Web Mining na master studijama obuhvatio je niz praktičnih domaćih zadataka kroz koje sam primenila teorijske koncepte veb rudarenja na realne podatke — od algoritama za analizu linkova, preko analize socijalnih mreža, do obrade log fajlova veb servera.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-link"></i> 1. Analiza linkova: algoritmi PageRank i HITS</div>
                                       <div class="modal-section-text">Analiza linkova predstavlja ključnu oblast Web Structure Mining-a. U okviru prvog domaćeg zadatka izučila sam dva najznačajnija algoritma za rangiranje veb stranica na osnovu strukture njihove povezanosti.</div>
                                       <div class="modal-example"><strong>Teorijska osnova:</strong> PageRank (Brin & Page) dodeljuje svakoj stranici ocenu ranga prema formuli PR(u) = C·Σ(PR(v)/N<sub>v</sub>), gde relevantnost stranice zavisi od broja i kvaliteta stranica koje na nju upućuju. HITS (Kleinberg) razlikuje dve uloge stranica: hub-ove, koji upućuju na mnogo autoriteta, i autoritete, koji primaju linkove od mnogo hub-ova.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-magnifying-glass-chart"></i> 1.1. Praktična analiza: sajt knjižare "Vulkan" (Moz Link Explorer)</div>
                                       <div class="modal-section-text">Za praktičan deo zadatka analizirala sam profil povratnih linkova sajta knjizare-vulkan.rs alatom Moz Link Explorer.</div>
                                       <div class="modal-example"><strong>Ključni rezultati:</strong> Domain Authority 38/100, 4.900 povezanih domena (neto gubitak od 544 u poslednjih 60 dana — 48 novih naspram 592 izgubljenih), 155.500 dolaznih linkova, Page Authority u rasponu 50–55%, sajt se rangira po 277 ključnih reči, a spam score iznosi svega 1% (73,9% povezujućih domena ima nizak rizik).</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-diagram-project"></i> 2. Analiza socijalnih mreža: Gephi i Marvel Universe</div>
                                       <div class="modal-section-text">Treći domaći zadatak bio je posvećen analizi socijalnih mreža (SNA) u alatu Gephi, na skupu podataka o zajedničkom pojavljivanju 327 Marvel likova u stripovima iz perioda 1961–1999/2000, povezanih sa 9.891 vezom izračunatom na osnovu učestalosti zajedničkih pojavljivanja.</div>
                                       <div class="modal-example"><strong>Vizuelizacija:</strong> mreža je usmerena (Directed) i prikazana Force Atlas rasporedom, uz Ranking obojenih čvorova prema stepenu povezanosti (Degree) radi lakšeg uočavanja centralnih likova.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-circle-nodes"></i> 2.1. Mere centralnosti u praksi</div>
                                       <div class="modal-section-text">Primenila sam četiri standardne mere centralnosti kako bih identifikovala najuticajnije likove u mreži.</div>
                                       <div class="modal-example"><strong>Rezultati:</strong> Degree centralnost: prosečno 30,25 veza po čvoru (od 12 do preko 240). Closeness centralnost: prosečna dužina putanje 2,123. Betweenness centralnost: izdvojila čvorove-mostove između klastera likova. Eigenvector centralnost: 0,00375 nakon 100 iteracija, što ukazuje na uticaj povezanosti sa drugim visoko-centralnim čvorovima.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-explosion"></i> 2.2. Simulacija uklanjanja ključnog čvora</div>
                                       <div class="modal-section-text">Da bih razumela otpornost mreže, simulirala sam uklanjanje čvora sa najvećim brojem veza.</div>
                                       <div class="modal-example"><strong>Efekat uklanjanja:</strong> broj čvorova pao je sa 327 na 326, broj veza sa 9.891 na 9.633 (−258), prosečan stepen povezanosti opao je sa 30,248 na 29,549, prečnik mreže porastao je sa 4 na 5, a modularnost sa 0,436 na 0,442 — mreža nakon gubitka centralnog čvora postaje nešto fragmentiranija, ali ostaje povezana.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-server"></i> 3. Analiza log fajlova: Nihuo Web Log Analyzer</div>
                                       <div class="modal-section-text">Drugi domaći zadatak fokusiran je na analizu Apache log fajlova generisanih na lokalnom XAMPP serveru za PHP aplikaciju za pretragu fajlova, uz pomoć alata Nihuo Web Log Analyzer.</div>
                                       <div class="modal-example"><strong>Opšta statistika (06–28.09.2004):</strong> 370 ukupnih pogodaka, 72 pregleda stranica, 60 poseta i ukupan protok od 24,31 MB. Prosečno trajanje posete iznosilo je 1 minut i 41 sekundu, a prosečan broj pregleda po poseti 1,20 — što ukazuje na kratke, fokusirane posete.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-clock-rotate-left"></i> 3.1. Obrasci ponašanja korisnika</div>
                                       <div class="modal-section-text">Analiza vremenskih i geografskih obrazaca otkrila je jasne trendove u korišćenju sajta.</div>
                                       <div class="modal-example"><strong>Nalazi:</strong> aktivnost je bila najveća u ranim jutarnjim (00–05h) i večernjim satima (18–21h), dok je period 10–14h bio gotovo neaktivan. Petak je bio najaktivniji dan u nedelji, a subota najmanje aktivna. Geografski, najviše poseta dolazilo je iz SAD (najaktivnija država Kalifornija), dok su Internet Explorer 6.x i Windows XP bili dominantni pregledač i platforma. Google je bio jedini izvor organskog saobraćaja, uz visoku stopu odbijanja od 93,22%.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-chart-line"></i> 4. Klasterovanje i mašinsko učenje (K-Means vs. DBSCAN) — Domaći zadatak 4</div>
                                       <div class="modal-section-text">Četvrti domaći zadatak (predmet Web mining, "Data mining") sproveden je u Python-u, u JupyterLab okruženju, nad datasetom Republike Srbije sa Portala otvorenih podataka koji opisuje emisije zagađujućih materija u vode. Cilj je bio uporediti <code>K-Means</code> i <code>DBSCAN</code> algoritme klasterovanja na istim podacima.</div>
                                       <div class="modal-example"><strong>Priprema i učitavanje podataka:</strong> Rad je organizovan u JupyterLab okruženju uz standardne biblioteke za analizu podataka (Pandas, NumPy), vizualizaciju (Matplotlib, Seaborn) i mašinsko učenje (Scikit-learn). Dataset je učitan iz CSV fajla preuzetog sa Portala otvorenih podataka, nakon čega je provereno da li sve potrebne kolone (Godina, Opština, Mesto, Zagađujuća materija, Količina) zaista postoje u tabeli.</div>

                                       <div class="modal-example"><strong>Čišćenje i deskriptivna analiza:</strong> Kolona sa količinom zagađivača pretvorena je u numerički format, a redovi sa nedostajućim vrednostima uklonjeni su iz skupa. Prikazane su osnovne deskriptivne statistike, broj uzoraka po godinama i deset najzastupljenijih zagađujućih materija, uz histogram i boxplot distribucije količine, kao i stubičasti grafikon top 10 opština po ukupnoj količini zagađenja.</div>

                                       <div class="modal-example"><strong>Filtriranje i Elbow metoda:</strong> Za klasterovanje su izdvojeni samo redovi sa parnom vrednošću u koloni Šifra mesta, a numerička kolona sa količinom zagađenja je standardizovana. Elbow metodom (praćenjem promene inercije za broj klastera od 1 do 9) grafički je određen optimalan broj klastera za K-Means algoritam.</div>

                                       <div class="modal-example"><strong>K-Means klasterovanje:</strong> Podaci su podeljeni u 5 klastera pomoću K-Means algoritma, a rezultat je vizuelno prikazan na dvodimenzionalnom grafiku (uz dodatu nasumičnu X osu, s obzirom da je klasterovana samo jedna numerička promenljiva).</div>

                                       <div class="modal-example"><strong>Grupisanje po okruzima:</strong> Dobijeni klasteri su grupisani po okruzima kako bi se videlo koliko elemenata iz svakog klastera pripada kom okrugu, a rezultat je prikazan i tabelarno i kroz stacked bar grafikon.</div>

                                       <div class="modal-example"><strong>Binarizacija podataka:</strong> Na osnovu medijane kolone sa količinom zagađenja, vrednosti su binarizovane (0 za vrednosti ispod ili jednake medijani, 1 za vrednosti iznad nje), a rezultat je prikazan tabelarno za prvih 100 redova i vizuelizovan stubičastim grafikonom. Rezultati K-Means klasterovanja sačuvani su u novi CSV fajl.</div>

                                       <div class="modal-example"><strong>DBSCAN klasterovanje:</strong> Nad istim podacima (uz uklanjanje redova sa količinom jednakom nuli) primenjen je DBSCAN algoritam sa parametrima eps=0.5 i min_samples=5. Prikazan je broj elemenata po dobijenim klasterima, kao i najzastupljenije zagađujuće materije unutar svakog klastera, uz dve vizualizacije — po indeksu uzorka i po nazivu zagađujuće materije. Rezultati su sačuvani u poseban CSV fajl.</div>

                                       <div class="modal-example"><strong>K-Means vs. DBSCAN — rezultati poređenja:</strong> K-Means je podelio podatke u 5 klastera (1105 / 1 / 3 / 6 / 1 elemenata) — izrazito neuravnoteženo, jer algoritam prisiljava svaku tačku da pripada nekom klasteru, čak i kad je znatno odudara od ostalih. DBSCAN je, nasuprot tome, formirao 1 prirodan klaster od 1737 elemenata i izdvojio tačno 16 tačaka kao šum (klaster -1), bez potrebe da unapred definišem broj klastera.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-face-smile"></i> 5. Analiza mišljenja / sentimenta — Domaći zadatak 5</div>
                                       <div class="modal-section-text">Peti domaći zadatak bio je posvećen analizi sentimenta (rudarenju mišljenja) — identifikaciji i klasifikaciji stavova, emocija i tonaliteta izraženih u tekstu, korišćenjem tehnika obrade prirodnog jezika (NLP) i alata bez pisanja koda, kroz vizuelno okruženje <strong>Altair AI Studio</strong> (RapidMiner-based platforma).</div>
                                       <div class="modal-example"><strong>Skup podataka:</strong> Korišćen je Kaggle skup podataka o TV serijama (IMDb TV Series Data) sa atributima poput naslova, žanra, broja sezona, rejtinga, broja glasova i sinopsisa — spreman za analizu bez dodatnog čišćenja.</div>
                                       <div class="modal-example"><strong>Tok rada u Altair AI Studio:</strong> 1) Import Data — uvoz CSV skupa (11.933 primera) u Repository karticu. 2) Design kartica — povezivanje uvezenog seta sa operatorom <code>Filter Examples</code> (Operators/Blending/Examples/Filter). 3) Definisanje kriterijuma filtriranja — npr. <code>Title starts with N</code>, čime se skup sužava na 235 primera. 4) Dodavanje drugog uslova <code>Rating &gt; 7</code>, čime se skup dalje sužava na 100 primera. 5) Vizualizacija rezultata kroz Scatter/Bubble dijagram (naslov serije na X-osi, rejting na Y-osi) i Pie/Donut dijagram (agregacija po žanru, funkcija Count).</div>
                                       <div class="modal-example"><strong>Nalaz iz Pie dijagrama:</strong> Najveći udeo (49 serija) zauzimaju serije žanra komedija/romantika sa ocenom većom od 7 i nazivom koji počinje na slovo N, dok je dodavanjem trećeg filtera <code>Genre equals "Animation, Adventure, Comedy"</code> izdvojena samo jedna serija — najmanji udeo u čitavom skupu.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Rezultat:</strong> Pet sprovedenih domaćih zadataka pokazuje kako se ista teorijska oblast — veb rudarenje — grana na potpuno različite analitičke izazove: prvi domaći zadatak (analiza linkova) otkriva strukturu grafa i autoritet stranica, drugi (analiza logova) ponašanje stvarnih korisnika u vremenu, treći (analiza socijalnih mreža) dinamiku i uticaj unutar mreže, četvrti (data mining) grupisanje podataka bez oznaka kroz klasterovanje, a peti (analiza mišljenja) razumevanje subjektivnog stava korisnika kroz analizu sentimenta. Zajedno, oni potvrđuju značaj multidisciplinarnog pristupa u donošenju strateških i inženjerskih odluka na osnovu velikih podataka.
                                   </div>`
                        },
                        {
                            naslov: 'Ocenjivanje kvaliteta sopstvenog koda kroz ISO/IEC 9126',
                            id: 'it-iso9126',
                            kategorija: 'kod-kvalitet',
                            povezano: ['it-tim-hms'],
                            datum: 'Decembar 2024',
                            opis: 'U okviru predmeta Upravljanje kvalitetom softvera na master studijama, analizirala sam sopstvenu aplikaciju Hospital Management System primenom međunarodnih standarda i metoda kvantitativne analize.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-award"></i> Master akademske studije • 2024/2025</div>
                                   <p class="modal-intro">Pisanje koda koji "radi" predstavlja samo prvi korak u softverskom inženjerstvu. Tokom analize sopstvenog sistema za upravljanje bolnicom (HMS), primenila sam standard ISO/IEC 9126 kako bih objektivno izmerila i procenila kvalitet izgrađenog rešenja.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-chart-diagram"></i> Struktura ISO/IEC 9126 standarda u praksi</div>
                                       <div class="modal-section-text">Standard definiše 6 ključnih karakteristika kvaliteta: funkcionalnost, pouzdanost, upotrebljivost, efikasnost, održivost i prenosivost. Umesto oslanjanja na subjektivni utisak, izgrađen je evaluacioni model.</div>
                                       <div class="modal-example"><strong>Primer iz analize:</strong> Troslojna arhitektura (Data Access, Business Logic, Presentation) ocenjena je izuzetno visoko u domenu održivosti (Maintainability), jer omogućava izmene na bazi podataka bez uticaja na korisnički interfejs. Sa druge strane, prenosivost (Portability) je dobila nižu ocenu usled čvrste vezanosti za .NET okruženje i Windows obrade.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-magnifying-glass"></i> Kvantitativne metrike koda (Code Metrics)</div>
                                       <div class="modal-section-text">Analiza obima i složenosti koda pomogla je u detekciji kritičnih tačaka pre izlaska u produkciono okruženje.</div>
                                       <div class="modal-example"><strong>Merljivi pokazatelji:</strong> Klasama domena izmereno je u proseku 32–48 LOC (linija koda), repozitorijumi za pristup podacima zauzimali su ~120 LOC, dok su forme prezentacionog sloja zadržane na oko 80 LOC po prozoru, čime je sprečeno stvaranje takozvanih "God Class" objekata.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-shield-halved"></i> Kvantifikacija bezbednosnih rizika</div>
                                       <div class="modal-section-text">Formalna matrica rizika razotkrila je nezaštićene tačke u rukovanju osetljivim medicinskim podacima pacijenata.</div>
                                       <div class="modal-example"><strong>Identifikovan rizik:</strong> Odsustvo rolske autentifikacije i enkripcije lokalne baze na samom početku ocenjeno je visokim nivoom izloženosti, što je postavilo jasne prioritete za naknadnu refaktorizaciju koda.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Zaključak:</strong> Proces evaluacije pružio mi je neprocenjivo uvid u to kako se sprovode verifikacija i validacija softvera u realnim poslovnim sistemima, izvan puke provere funkcionalnih zahteva.
                                   </div>`
                        },
                        {
                            naslov: 'Rad u timu na Hospital Management System-u',
                            id: 'it-tim-hms',
                            kategorija: 'projekti',
                            povezano: ['it-iso9126'],
                            datum: '2023/2024',
                            opis: 'Prvi obimniji timski projekat razotkrio mi je dinamičku stranu softverskog inženjerstva — usaglašavanje interfejsa, dodela uloga i kontrola verzionisanja koda često su važniji od same brzine pisanja sintakse.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-users"></i> Timski projekat • 2023/2024</div>
                                   <p class="modal-intro">Razvoj kompleksnog softvera u tročlanom timu zahtevao je jasnu raspodelu odgovornosti, čvrste dogovore oko arhitekture i stalnu sinhronizaciju kako bi se izbegli konflikti u kôdu i kašnjenja u rokovima.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-diagram-project"></i> Podela uloga i DataLayer sloj</div>
                                       <div class="modal-section-text">Moja primarna odgovornost obuhvatala je projektovanje i implementaciju sloja za pristup podacima (Data Access Layer) — kreiranje repozitorijuma za pacijente, lekare, zakazane preglede i dijagnoze, kao i pisanje unit testova za proveru integriteta.</div>
                                       <div class="modal-example"><strong>Ključni trenutak:</strong> Pre pisanja prve linije koda, timski smo definisali interfejse (C# interfaces). Ovo je omogućilo kolegama koji su radili na poslovnoj logici i interfejsu da razvijaju svoje komponente nezavisno, koristeći "mocked" podatke.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-list-check"></i> Agile praksa i praćenje projekta</div>
                                       <div class="modal-section-text">Upravljanje zadacima organizovano je putem Trello tabli po ugledu na Kanban metodologiju, uz redovne kratke sinhronizacijske sastanke.</div>
                                       <div class="modal-example"><strong>Organizacija:</strong> Svaka kartica sadržala je definisane kriterijume prihvatljivosti (Acceptance Criteria), npr. "Doctor CRUD — provera validnosti JMBG-a pre ugradnje u bazu".</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-bug"></i> Rano otkrivanje kritičnih bagova</div>
                                       <div class="modal-section-text">Kroz sistematski Code Review i pokrivenost jedinčnim testovima presretnute su greške koje bi u suprotnom narušile stabilnost cele baze.</div>
                                       <div class="modal-example"><strong>Primer:</strong> Tokom pregleda koda uočen je UPDATE upit unutar logike za osvežavanje kartona koji je u određenim uslovima propuštao WHERE klauzulu. U produkciji bi ovaj previd prebrisao podatke svih pacijenata u bazi.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Zaključak:</strong> Naučila sam da su komunikacija, jasne konvencije imenovanja koda i rigorozan Code Review pre spajanja (merge) grana temelji svakog uspešnog inženjerskog tima.
                                   </div>`
                        },
                        {
                            naslov: 'E-cvećara "Rose": Razvoj mog prvog projekta i uočene lekcije',
                            id: 'it-cvecara',
                            kategorija: 'projekti',
                            datum: '2021/2022',
                            opis: 'E-cvećara "Rose" predstavlja prvi celovit projekat koji sam ikada realizovala — nastao u drugoj godini osnovnih studija na predmetu Objektno orijentisano programiranje. Taj projekat bio je prekretnica u kom je teorija prešla u praktičan kod.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-seedling"></i> Prvi praktični projekat • 2021/2022</div>
                                   <p class="modal-intro">E-cvećara "Rose" predstavlja prvi softverski projekat koji sam samostalno osmislila i kodirala na drugoj godini osnovnih akademskih studija u okviru predmeta Objektno orijentisano programiranje (OOP). Do tog trenutka, OOP koncepti su za mene bili pretežno teorijska materija iz udžbenika: enkapsulacija, nasleđivanje i polimorfizam kao definicije za ispit. Tek u trenutku kada sam morala sama da projektujem kompletan sistem naručivanja, shvatila sam da najveći izazov nije sama sintaksa, već donošenje ispravnih arhitektonskih odluka — šta jeste klasa, šta treba da bude nasleđeno, a šta deljeno kroz interfejse.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-cubes"></i> Polimorfizam i interfejsi na praktičnom primeru</div>
                                       <div class="modal-section-text">Najveći iskorak u razumevanju napravljen je implementacijom interfejsa <code>ICena</code> i <code>IFaktura</code>. Kroz njih je apstraktni teorijski koncept polimorfizma postao opipljiv alat.</div>
                                       <div class="modal-example"><strong>Kako je to izgledalo:</strong> Metoda <code>cena()</code> kod pojedinačnog cveta vršila je prostu kalkulaciju (jedinična cena * količina). Međutim, kod složenih objekata poput <code>Buket</code> i <code>Dekoracija</code>, ista metoda je dinamički prolazila kroz liste svih upotrebljenih elemenata, dodajući cenu dodatnog materijala, rada i dostave.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-sitemap"></i> Nasleđivanje i modelovanje domena</div>
                                       <div class="modal-section-text">Nastojala sam da smanjim dupliranje koda izgrađivanjem logičkih relacija između klasa kupaca, artikala i faktura.</div>
                                       <div class="modal-example"><strong>Primer iz koda:</strong> Klasa <code>Dekoracija</code> direktno je nasleđivala svojstva klase <code>Kupac</code>, jer je svaka naručena aranžmanska dekoracija bila usko vezana za konkretnog naručioca sa njegovom adresom i popustima, izbegavajući ponovno pisanje polja za lične podatke.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-microscope"></i> Analiza sopstvenog koda iz današnje perspektive</div>
                                       <div class="modal-section-text">Prilikom nedavnog pregleda ovog koda radi dokumentovanja u e-portfoliju, uočila sam početničke greške koje u trenutku pisanja, usled neiskustva i ispitnog pritiska, nisam primetila.</div>
                                       <div class="modal-example"><strong>Uočeni previdi:</strong> Unutar metode <code>racun()</code> u klasi <code>Buket</code>, napravljen je tipičan "copy-paste" previd — umesto vrednosti promenljive <code>paprat</code>, greškom se na računu štampala vrednost promenljive <code>papir</code> za stavku "ukrasna paprat". Takođe, pojedine klase imale su nepotpune getter/setter metode (npr. nedostajući <code>getBoja()</code>), što je otežavalo naknadno osvežavanje stanja.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-vial"></i> Lekcija o potrebi za automatskim testiranjem</div>
                                       <div class="modal-section-text">Danas znam da se ovakve greške ne sprečavaju dužim gledanjem u ekran, već pisanjem automatskih testova. Tada mi koncept automatskog testiranja nije bio blizak.</div>
                                       <div class="modal-example"><strong>Šta bih danas uradila:</strong> Napisala bih jednostavan Unit Test koji poziva metodu računa i proverava ispisanu tekstualnu vrednost — takav test bi u sekundi detektovao pogrešno dodeljenu promenljivu.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-lightbulb"></i> <strong>Zaključak:</strong> I pored svih tehničkih nedoslednosti koje danas jasno vidim, E-cvećara "Rose" mi je pružila najvažnije iskustvo u karijeri — prvi nezaboravan osećaj kada linije apstraktnog koda sa papira ožive i postanu funkcionalna aplikacija.
                                   </div>`
                        }
                    ],
                    Edukacija: [
                        {
                            naslov: 'Pedagoški uvidi sa nastavne prakse u osnovnoj školi',
                            id: 'edu-praksa',
                            kategorija: 'praksa',
                            povezano: ['edu-debug'],
                            datum: 'Maj – Jun 2026',
                            opis: 'Nastavnu praksu iz informatike sprovela sam u Osnovnoj školi "Dr Dragiša Mišović" u Čačku radaći sa VI, VII i VIII razredom. To iskustvo razotkrilo mi je koliko se metodika rada mora menjati u zavisnosti od uzrasta i kognitivnog razvoja učenika.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-chalkboard-user"></i> Nastavna praksa • Maj – Jun 2026</div>
                                   <p class="modal-intro">Tokom jedvomesečne prakse u OŠ "Dr Dragiša Mišović" imala sam priliku da samostalno pripremam i držim časove računarstva i informatike. Najveće pedagoško otkriće bilo je shvatanje da uspešan čas ne čini obim ispredavanog gradiva, već nivo prilagođenosti apstrakcije učenicima.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-graduation-cap"></i> Gradacija apstrakcije po uzrastima</div>
                                       <div class="modal-section-text">Ista tema — algoritam i programski kôd — zahteva potpuno drugačiju nastavu od 6. do 8. razreda.</div>
                                       <div class="modal-example"><strong>U praksi:</strong> U 6. razredu fokus je bio na Python Turtle grafici gde učenici odmah vide vizuelni rezultat svake naredbe (npr. skretanje kornjače). U 7. razredu u PyGame okruženju učenici su morali da usvoje apstraktne koncepte poput koordinatnog sistema i RGB palete, dok se u 8. razredu već diskredituje puko kucanje i prelazi na strukture podataka i napredno rešavanje problema.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-file-powerpoint"></i> Kreiranje autorskih nastavnih materijala</div>
                                       <div class="modal-section-text">Uočivši da se mlađi učenici često gube u velikom broju sintaksnih pravila, izradila sam namenske vizuelne postere i podsetnike za kabinet.</div>
                                       <div class="modal-example"><strong>Rezultat:</strong> Poster sa grafičkim prikazom komandi <code>penup()</code>, <code>pendown()</code>, <code>begin_fill()</code> i algoritmom za izračunavanje spoljašnjeg ugla višeugaonika smanjio je broj ponovljenih učeničkih pitanja za preko 50%.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-clipboard-check"></i> Formativno ocenjivanje i odbrana projekata</div>
                                       <div class="modal-section-text">Prisustvovala sam i učestvovala u ocenjivanju završnih projekata u 8. razredu, gde sam naučila kako objektivno vrednovati originalnost, uloženi trud i tehničku tačnost.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Zaključak:</strong> Prakse u školi su potvrdile da dobar nastavnik informatike mora biti podjednako izvrstan inženjer i strpljiv komunikator koji složene pojmove ume da prevede na razumljiv jezik.
                                   </div>`
                        },
                        {
                            naslov: 'Debagovanje kao ključna pedagoška metoda u nastavi',
                            id: 'edu-debug',
                            kategorija: 'metodika',
                            povezano: ['edu-praksa'],
                            datum: '2025/2026',
                            opis: 'Kao programerka, grešku u kodu ne posmatram kao neuspeh već kao prirodan korak ka rešenju. Naučiti učenike kako da čitaju poruke o greškama i ne paniče pred konzolom bio je moj glavne pedagoški cilj.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-brain"></i> Pedagoška refleksija • 2025/2026</div>
                                   <p class="modal-intro">Kada učenici počnu da uče programiranje, prva prepreka nije logika, već strah od crvenog teksta u konzoli (Error Message). Primarna uloga nastavnika jeste razvijanje inženjerskog otpora prema greškama i građenje samostalnosti u debagovanju.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-terminal"></i> Razbijanje panike pred "crvenim tekstom"</div>
                                       <div class="modal-section-text">Postavila sam pravilo: kada se pojavi greška, učenik ne podiže odmah ruku, već čita poslednju liniju poruke i naglas objašnjava šta mu računari poručuje.</div>
                                       <div class="modal-example"><strong>Primer:</strong> Umesto odgovora "Meni ovo ne radi", usmeravala sam učenike pitanjima: "Koji broj reda ti spominje Python?" i "Šta znači rec 'IndentationError' na engleskom?". Na taj način učenici su sami dolazili do rešenja u 80% slučajeva.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-people-arrows"></i> Vršnjačka edukacija (Peer Code Review)</div>
                                       <div class="modal-section-text">Uvela sam metodu gde učenici iz klupe prvo proveravaju kod svog para pre traženja pomoći nastavnika.</div>
                                       <div class="modal-example"><strong>Efekat:</strong> Ovo je stimulisalo timski duh, ubrzalo rad na času i naučilo ih da uočavaju sintaksne greške (poput zagrada i navodnika) u tuđem kodu.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-child-reaching"></i> Kinestetičko učenje apstraktnih pojmova</div>
                                       <div class="modal-section-text">Za razumevanje rotacija i uglova u Python Turtle grafici koristili smo telesne pokrete izvan računara.</div>
                                       <div class="modal-example"><strong>Vežba:</strong> Pre nego što ukucaju <code>left(90)</code> ili <code>right(45)</code>, učenici bi ustali i fizički okrenuli telo u smeru u kom kornjača treba da skrene. Koncept je momentalno usvojen kod svih učenika.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-lightbulb"></i> <strong>Zaključak:</strong> Programiranje ne uči decu samo kucanju koda, već ih uči rešavanju životnih problema — kako rastaviti velik problem na sitne delove i ne odustajati pred prvom preprekom.
                                   </div>`
                        },
                        {
                            naslov: 'Kvalitet doživljaja korisnika: šta seminarski rad o multimediji otkriva o dobroj nastavi',
                            id: 'edu-multimedija',
                            kategorija: 'metodika',
                            datum: '2026',
                            opis: 'Seminarski rad iz predmeta Metodički praktikum iz multimedijalnih tehnologija i komunikacija naterao me je da preispitam nešto što svaki nastavnik intuitivno zna, ali retko imenuje — da tehnički ispravan čas i čas koji učenici dožive kao dobar nisu uvek ista stvar.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-photo-film"></i> Seminarski rad • Metodički praktikum iz multimedijalnih tehnologija i komunikacija • 2026</div>
                                   <p class="modal-intro">Rad sam pisala na temu razvoja i implementacije savremenih multimedijalnih sistema u edukaciji i poslovanju, pod mentorstvom dr Marine Milošević. Iako je tema tehnički orijentisana, najviše me je iznenadilo koliko se direktno prevodi na pedagošku praksu — posebno razlika između toga da sistem tehnički radi i da ga korisnik zaista doživi kao kvalitetan.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-gauge"></i> QoS naspram QoE — tehnička ispravnost nije isto što i dobar utisak</div>
                                       <div class="modal-section-text">Rad razlikuje kvalitet servisa (QoS) — merljive tehničke parametre poput kašnjenja, gubitka paketa i propusnog opsega — od kvaliteta doživljaja korisnika (QoE), koji je subjektivna procena koliko je neko zadovoljan uslugom.</div>
                                       <div class="modal-example"><strong>Paralela sa učionicom:</strong> Video-predavanje bez ijednog tehničkog prekida (visok QoS) učenicima može i dalje delovati zbunjujuće i neangažujuće ako je materijal loše strukturiran (nizak QoE) — tehnička besprekornost ne garantuje da je čas dobro primljen.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-mobile-screen-button"></i> Mobilno učenje i pristupačnost u svakom trenutku</div>
                                       <div class="modal-section-text">Poglavlje o mobilnim i pametnim uređajima pokazuje kako je razvoj 4G/5G mreža i pametnih telefona omogućio koncept učenja "bilo kada i bilo gde" (m-learning), gde učenici pristupaju materijalima nezavisno od fizičkog prisustva u učionici.</div>
                                       <div class="modal-example"><strong>Veza sa praksom:</strong> Ovo direktno potvrđuje ono što sam primetila i tokom nastavne prakse — mlađi učenici uče najbrže kada mogu odmah da vide vizuelni rezultat svoje akcije, bez obzira na uređaj sa kog pristupaju sadržaju.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-database"></i> Multimedijalni informacioni sistemi kao osnova LMS platformi</div>
                                       <div class="modal-section-text">Analizirala sam i arhitekturu multimedijalnih informacionih sistema — višeslojni model koji razdvaja prezentacioni, aplikativni i sloj podataka — na kom se, u suštini, zasnivaju sve platforme za učenje na daljinu (LMS) koje škole danas koriste.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-wand-magic-sparkles"></i> Trendovi koji stižu u učionicu: AI, VR/AR i IoT</div>
                                       <div class="modal-section-text">Poslednji deo rada bavi se pravcima daljeg razvoja — personalizacijom nastave putem veštačke inteligencije, virtuelnim laboratorijama zasnovanim na VR/AR tehnologiji i pametnim učionicama povezanim putem Interneta stvari.</div>
                                       <div class="modal-example"><strong>Zašto je ovo relevantno:</strong> Kao budući nastavnik informatike, ove trendove ne posmatram kao daleku budućnost, već kao alate koje ću vrlo verovatno koristiti već u prvim godinama rada u učionici.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Zaključak:</strong> Rad me je naučio da kvalitetna nastava — kao i kvalitetan multimedijalni sistem — nije samo pitanje tehničke ispravnosti, već i pažljivog dizajniranja iskustva sa gledišta onoga ko ga prima.
                                   </div>`
                        },
                        {
                            naslov: 'Šta sam naučila pišući o prevenciji elektronskog nasilja kroz školski kurikulum',
                            id: 'edu-e-nasilje',
                            kategorija: 'istrazivanje',
                            datum: '2026',
                            opis: 'Seminarski rad o etičkim i pedagoškim aspektima prevencije elektronskog nasilja promenio je način na koji razmišljam o ulozi nastave računarstva i informatike — ne samo kao predmeta koji uči tehnička znanja, već i digitalnu etiku i odgovorno ponašanje.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-shield-heart"></i> Seminarski rad • Etički i pedagoški aspekti prevencije elektronskog nasilja kroz školski kurikulum • 2026</div>
                                   <p class="modal-intro">Ovaj rad bavi se etičkim i pedagoškim aspektima prevencije elektronskog nasilja kroz školski kurikulum, na osnovu analize savremene naučne literature. Pisanje rada me je navelo da preispitam sopstvenu ulogu — kao budućeg nastavnika informatike, ali i kao nekoga ko svakodnevno gradi digitalne proizvode — u oblikovanju odgovornog ponašanja mladih na internetu.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-magnifying-glass"></i> Šta pokazuje literatura</div>
                                       <div class="modal-section-text">Analizirala sam tri sistematska pregleda i meta-analize (Lan, Law i Pan, 2022; Kamaruddin i sar., 2023; Tozzo i sar., 2022), kao i priručnik Saveta Evrope o digitalnom građanstvu. Zajednički zaključak svih izvora: tehničke mere zaštite same po sebi nisu dovoljne — najveći efekat imaju obrazovne intervencije koje aktivno uključuju učenike.</div>
                                       <div class="modal-example"><strong>Konkretan nalaz:</strong> Programi koji su uključivali grupne aktivnosti, diskusiju i razvoj empatije pokazali su bolje rezultate od onih zasnovanih isključivo na predavanjima — pasivno slušanje pravila bezbednosti na internetu jednostavno ne menja ponašanje.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-globe"></i> Digitalno građanstvo kao širi okvir od "internet bezbednosti"</div>
                                       <div class="modal-section-text">Priručnik Saveta Evrope posmatra digitalnu bezbednost kao samo jedan deo šireg koncepta digitalnog građanstva, koji obuhvata i etiku, empatiju, prava i odgovornosti, kao i kritičko mišljenje u digitalnom okruženju.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-chalkboard-user"></i> Uloga nastave računarstva i informatike</div>
                                       <div class="modal-section-text">Rad posebno ističe da ovaj predmet ima jedinstvenu priliku da temu digitalne bezbednosti ne tretira kao izdvojenu lekciju, već je integriše u redovan rad — kroz razgovor o odgovornoj upotrebi tehnologija koje učenici i inače uče da koriste.</div>
                                       <div class="modal-example"><strong>Moj zaključak kao (buduće) nastavnice:</strong> Čas na kom učenici prave sopstvenu Python igru savršena je prilika da se, usput, popriča i o tome šta znači deliti tuđe podatke bez dozvole ili se sakriti iza anonimnosti na internetu.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-people-group"></i> Socioekološki pristup: niko ovo ne rešava sam</div>
                                       <div class="modal-section-text">Jedan od najvažnijih uvida bio je socioekološki model prevencije — uspešni programi uključuju učenike, nastavnike, roditelje i širu zajednicu istovremeno, a ne samo školu ili samo porodicu.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Zaključak:</strong> Prevencija elektronskog nasilja nije jednokratna lekcija, već trajan deo vaspitno-obrazovnog procesa — a nastava informatike ima priliku da u tome bude mnogo više od pukog "časa o pravilima interneta".
                                   </div>`
                        }
                    ]
                }
            },
            ENG: {
                navProfil: 'Profile', navIskustvo: 'Experience', navEdukacija: 'Education', navProjekti: 'Projects', navBlog: 'Blog', navPromeni: 'Switch Portfolio',
                naslovBlog: 'Notes',
                uvod: 'Short and detailed reflections on the experiences that shaped me — not just what I did, but why, what I learned along the way, and what I would apply differently today.',
                tekstCitaj: 'Read full note',
                tekstVreme: (n) => n === 1 ? '1 min read' : `${n} min read`,
                naslovPovezano: 'Related notes',
                bcTrenutna: 'Blog',
                footer: '©Copyright by Nena Kozić',
                pretragaPlaceholder: 'Search notes...',
                pretragaRezultati: (n) => n === 1 ? '1 search result' : `${n} search results`,
                pretragaNemaRezultata: 'No notes match your search. Try a different term.',
                oznakaPin: 'Pinned',
                oznakaIstaknuto: 'Featured',
                svaKategorija: 'All',
                sortLabela: 'Sort:',
                sortNajnovije: 'Newest',
                sortNajstarije: 'Oldest',
                sortAZ: 'Sort A to Z',
                sortZA: 'Sort Z to A',
                kategorije: {
                    'projekti': 'Projects',
                    'performanse': 'Performance',
                    'kod-kvalitet': 'Code Quality',
                    'istrazivanje': 'Research',
                    'praksa': 'Practicum',
                    'metodika': 'Methodology'
                },
                objave: {
                    IT: [
                        {
                            naslov: 'PageSpeed Insights results for my portfolio',
                            id: 'it-pagespeed',
                            kategorija: 'performanse',
                            datum: 'July 2026',
                            pin: true,
                            povezano: ['it-portfolio'],
                            opis: 'I ran the site through Google PageSpeed Insights on both mobile and desktop — the results confirm that the earlier performance, accessibility, and SEO optimizations actually paid off.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-gauge-high"></i> Personal Project • Performance Audit • 2026</div>
                                   <p class="modal-intro">After a series of site upgrades — from optimizing images and scripts, through unifying the codebase, to detailed accessibility work — I decided to check the results with an objective tool. I ran <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener">Google PageSpeed Insights</a> and compared the scores on mobile and desktop.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-mobile-screen-button"></i> Results — Mobile</div>
                                       <div class="pagespeed-score-grid">
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">89</span><span class="pagespeed-score-naziv">Performance</span></div>
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">95</span><span class="pagespeed-score-naziv">Accessibility</span></div>
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">96</span><span class="pagespeed-score-naziv">Best Practices</span></div>
                                           <div class="pagespeed-score-card score-perfect"><span class="pagespeed-score-broj">100</span><span class="pagespeed-score-naziv">SEO</span></div>
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">2/2</span><span class="pagespeed-score-naziv">Agentic Browsing</span></div>
                                       </div>
                                       <div class="modal-example"><strong>Note:</strong> the mobile Performance score fluctuates between runs and reaches as high as 94, depending on current network load and the device running the test — a common trait of mobile Lighthouse audits.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-desktop"></i> Results — Desktop</div>
                                       <div class="pagespeed-score-grid">
                                           <div class="pagespeed-score-card score-perfect"><span class="pagespeed-score-broj">100</span><span class="pagespeed-score-naziv">Performance</span></div>
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">95</span><span class="pagespeed-score-naziv">Accessibility</span></div>
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">96</span><span class="pagespeed-score-naziv">Best Practices</span></div>
                                           <div class="pagespeed-score-card score-perfect"><span class="pagespeed-score-broj">100</span><span class="pagespeed-score-naziv">SEO</span></div>
                                           <div class="pagespeed-score-card score-good"><span class="pagespeed-score-broj">2/2</span><span class="pagespeed-score-naziv">Agentic Browsing</span></div>
                                       </div>
                                       <div class="modal-example"><strong>Note:</strong> on desktop, Performance consistently reaches a perfect 100, while the Agentic Browsing category occasionally shows 1/2 instead of 2/2, depending on the run.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-magnifying-glass-chart"></i> What these scores actually show</div>
                                       <div class="modal-section-text">Performance, Accessibility, Best Practices, and SEO make up the standard Lighthouse framework for measuring web page quality, while Agentic Browsing is a newer category that evaluates how well a site can be understood and used by AI agents and automated tools browsing on a user's behalf.</div>
                                       <div class="modal-example"><strong>Connection to earlier work:</strong> the high accessibility and SEO scores are a direct result of earlier changes — consistent ARIA attributes, semantic HTML, structured JSON-LD data, a sitemap.xml file, and optimized images described in previous posts on this blog.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Conclusion:</strong> Consistently high scores across both device types confirm that the site's technical foundations — load speed, accessibility, and search-engine optimization — are working as intended, and the minor mobile Performance fluctuation remains the next target for further optimization.
                                   </div>`
                        },
                        {
                            naslov: 'What I learned building this e-portfolio',
                            id: 'it-portfolio',
                            kategorija: 'projekti',
                            datum: 'July 2026',
                            povezano: ['it-pagespeed'],
                            opis: 'I assumed the most significant challenge would be visual design. It turned out that the essential challenge lay in code architecture and structuring content for two entirely different target audiences on the same pages.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-code"></i> Personal Project • 2026</div>
                                   <p class="modal-intro">Building this interactive e-portfolio was a practical case study in balancing complex functionality, clean architectural patterns, and a seamless user experience without relying on heavy external frameworks.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-layer-group"></i> Separation of Data and Presentation</div>
                                       <div class="modal-section-text">All textual content, bilingual translations (SRB/ENG), and mode-specific data (IT vs. Teaching) are stored inside centralized JavaScript objects. The HTML serves strictly as a structural skeleton.</div>
                                       <div class="modal-example"><strong>Purpose:</strong> Adding or updating a new project, course, or blog note requires modifying only a single JS object, eliminating code duplication and manual HTML/CSS edits.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-universal-access"></i> Advanced Accessibility & Responsiveness</div>
                                       <div class="modal-section-text">Strong focus was placed on Web Accessibility (A11y). Particular attention was paid to keyboard navigation, modal focus traps, ARIA attributes, and user display preferences.</div>
                                       <div class="modal-example"><strong>Practical examples:</strong> Implemented a skip-link for quick content jumping, clear focus-visible outlines for keyboard users, theme meta tags, and media queries for users preferring reduced motion.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-wrench"></i> Technical Debt & Optimization Plan</div>
                                       <div class="modal-section-text">While the system works reliably offline without external dependencies, clear opportunities for further architectural refinement were identified.</div>
                                       <div class="modal-example"><strong>Next step:</strong> In the next iteration, I plan to extract navigation, footer, and translation logic into Web Components or standalone JS modules for easier maintenance.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Result:</strong> The portfolio evolved from a static page into an engineering project proving core competencies in code architecture, UX design, and attention to detail.
                                   </div>`
                        },
                                                {
                            naslov: 'Web Mining in Practice: From Graph Theory to Sentiment Analysis',
                            id: 'it-webmining',
                            kategorija: 'istrazivanje',
                            datum: 'July 2025',
                            opis: 'An overview of five practical assignments completed during the Web Mining master course — link analysis with PageRank and HITS (Moz), web server log analysis (Nihuo), social network analysis on the Marvel Universe dataset (Gephi), K-Means and DBSCAN clustering in Python, and opinion analysis in Altair AI Studio.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-brain"></i> Master Academic Studies • 2024/2025</div>
                                   <p class="modal-intro">The Web Mining course included a series of practical assignments through which I applied theoretical web mining concepts to real data — from link analysis algorithms, through social network analysis, to web server log processing.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-link"></i> 1. Link Analysis: PageRank and HITS Algorithms</div>
                                       <div class="modal-section-text">Link analysis is a core area of Web Structure Mining. For the first assignment, I studied the two most significant algorithms for ranking web pages based on their link structure.</div>
                                       <div class="modal-example"><strong>Theoretical basis:</strong> PageRank (Brin & Page) assigns each page a rank score using PR(u) = C·Σ(PR(v)/N<sub>v</sub>), where a page's relevance depends on the number and quality of pages linking to it. HITS (Kleinberg) distinguishes two roles: hubs, which point to many authorities, and authorities, which receive links from many hubs.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-magnifying-glass-chart"></i> 1.1. Practical Analysis: Bookstore "Vulkan" Website (Moz Link Explorer)</div>
                                       <div class="modal-section-text">For the practical part of the assignment, I analyzed the backlink profile of knjizare-vulkan.rs using Moz Link Explorer.</div>
                                       <div class="modal-example"><strong>Key results:</strong> Domain Authority 38/100, 4,900 linking domains (a net loss of 544 over the past 60 days — 48 discovered vs. 592 lost), 155,500 inbound links, Page Authority of 50–55%, ranking for 277 keywords, and a spam score of just 1% (73.9% of linking domains carry low risk).</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-diagram-project"></i> 2. Social Network Analysis: Gephi and the Marvel Universe</div>
                                       <div class="modal-section-text">The third assignment focused on social network analysis (SNA) in Gephi, using a dataset of 327 Marvel characters co-appearing in comics from 1961–1999/2000, connected by 9,891 edges weighted by co-appearance frequency.</div>
                                       <div class="modal-example"><strong>Visualization:</strong> the network is directed and was rendered using the Force Atlas layout, with node color ranked by Degree to highlight the most central characters.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-circle-nodes"></i> 2.1. Centrality Measures in Practice</div>
                                       <div class="modal-section-text">I applied four standard centrality measures to identify the most influential characters in the network.</div>
                                       <div class="modal-example"><strong>Results:</strong> Degree centrality: an average of 30.25 connections per node (ranging from 12 to over 240). Closeness centrality: an average path length of 2.123. Betweenness centrality: highlighted bridge nodes between character clusters. Eigenvector centrality: 0.00375 after 100 iterations, reflecting influence derived from connections to other highly central nodes.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-explosion"></i> 2.2. Simulating the Removal of a Key Node</div>
                                       <div class="modal-section-text">To understand the network's resilience, I simulated removing the node with the highest degree.</div>
                                       <div class="modal-example"><strong>Effect of removal:</strong> node count dropped from 327 to 326, edge count from 9,891 to 9,633 (−258), average degree fell from 30.248 to 29.549, network diameter increased from 4 to 5, and modularity rose from 0.436 to 0.442 — the network becomes somewhat more fragmented after losing its central node, but remains connected.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-server"></i> 3. Log Analysis: Nihuo Web Log Analyzer</div>
                                       <div class="modal-section-text">The second assignment focused on analyzing Apache log files generated by a local XAMPP server for a PHP file-search application, using the Nihuo Web Log Analyzer tool.</div>
                                       <div class="modal-example"><strong>General statistics (Sep 6–28, 2004):</strong> 370 total hits, 72 page views, 60 visits, and 24.31 MB of total bandwidth. Average visit length was 1 minute 41 seconds, with an average of 1.20 page views per visit — indicating short, focused visits.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-clock-rotate-left"></i> 3.1. User Behavior Patterns</div>
                                       <div class="modal-section-text">Analysis of temporal and geographic patterns revealed clear trends in site usage.</div>
                                       <div class="modal-example"><strong>Findings:</strong> activity peaked in the early morning (00:00–04:59) and evening hours (18:00–20:59), while the 10:00–13:59 window was nearly inactive. Friday was the most active day of the week, Saturday the least. Geographically, most visits came from the US (California being the most active state), while Internet Explorer 6.x and Windows XP were the dominant browser and platform. Google was the sole source of organic traffic, with a high bounce rate of 93.22%.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-chart-line"></i> 4. Clustering & Machine Learning (K-Means vs. DBSCAN) — Assignment 4</div>
                                       <div class="modal-section-text">The fourth assignment (Web Mining course, "Data mining") was implemented in Python inside JupyterLab, using an open dataset from the Serbian Open Data Portal describing pollutant emissions into water. The goal was to compare <code>K-Means</code> and <code>DBSCAN</code> clustering algorithms on the same data.</div>
                                       <div class="modal-example"><strong>Setup and loading the data:</strong> The work was organized in JupyterLab using standard libraries for data analysis (Pandas, NumPy), visualization (Matplotlib, Seaborn), and machine learning (Scikit-learn). The dataset was loaded from a CSV file downloaded from the Open Data Portal, and all required columns (Year, Municipality, Place, Pollutant, Amount) were checked for existence.</div>

                                       <div class="modal-example"><strong>Cleaning and descriptive analysis:</strong> The pollutant amount column was converted to numeric format and rows with missing values were removed. Basic descriptive statistics, sample counts per year, and the ten most common pollutants were displayed, along with a histogram and boxplot of the amount distribution and a bar chart of the top 10 municipalities by total pollution.</div>

                                       <div class="modal-example"><strong>Filtering and the Elbow method:</strong> Only rows with an even value in the "Place code" column were kept for clustering, and the numeric pollution-amount column was standardized. The Elbow method (tracking inertia for cluster counts from 1 to 9) was used to visually determine the optimal number of clusters for K-Means.</div>

                                       <div class="modal-example"><strong>K-Means clustering:</strong> The data was split into 5 clusters using K-Means, with the result plotted on a two-dimensional chart (a random X axis was added for display purposes, since only one numeric variable was being clustered).</div>

                                       <div class="modal-example"><strong>Grouping by county:</strong> The resulting clusters were grouped by county to see how many elements from each cluster belonged to each county, shown both as a table and as a stacked bar chart.</div>

                                       <div class="modal-example"><strong>Data binarization:</strong> Based on the median of the pollution-amount column, values were binarized (0 for values at or below the median, 1 for values above it), shown in a table for the first 100 rows and visualized with a bar chart. The K-Means clustering results were saved to a new CSV file.</div>

                                       <div class="modal-example"><strong>DBSCAN clustering:</strong> DBSCAN (eps=0.5, min_samples=5) was applied to the same data (after removing rows with zero amount). The element count per resulting cluster was shown, along with the most common pollutants within each cluster, plus two visualizations — by sample index and by pollutant name. The results were saved to a separate CSV file.</div>

                                       <div class="modal-example"><strong>K-Means vs. DBSCAN — comparison results:</strong> K-Means split the data into 5 clusters (1,105 / 1 / 3 / 6 / 1 elements) — highly unbalanced, since the algorithm forces every point into some cluster even when it clearly differs from the rest. DBSCAN, by contrast, formed 1 natural cluster of 1,737 elements and isolated exactly 16 points as noise (cluster -1), without needing the number of clusters defined in advance.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-face-smile"></i> 5. Opinion / Sentiment Analysis — Assignment 5</div>
                                       <div class="modal-section-text">The fifth assignment focused on sentiment analysis (opinion mining) — identifying and classifying attitudes, emotions, and tone expressed in text using natural language processing (NLP), performed code-free through the visual <strong>Altair AI Studio</strong> platform (a RapidMiner-based environment).</div>
                                       <div class="modal-example"><strong>Dataset:</strong> A Kaggle dataset of TV series (IMDb TV Series Data) was used, with attributes such as title, genre, number of seasons, rating, vote count, and synopsis — already formatted as CSV and ready for analysis without additional cleaning.</div>
                                       <div class="modal-example"><strong>Workflow in Altair AI Studio:</strong> 1) Import Data — importing the CSV dataset (11,933 examples) into the Repository tab. 2) Design tab — connecting the imported set to a <code>Filter Examples</code> operator (Operators/Blending/Examples/Filter). 3) Defining the filter criteria — e.g. <code>Title starts with N</code>, narrowing the set to 235 examples. 4) Adding a second condition, <code>Rating &gt; 7</code>, further narrowing the set to 100 examples. 5) Visualizing the results via a Scatter/Bubble chart (series title on the X axis, rating on the Y axis) and a Pie/Donut chart (aggregated by genre, using the Count function).</div>
                                       <div class="modal-example"><strong>Finding from the Pie chart:</strong> The largest share (49 series) belongs to comedy/romance series rated above 7 whose title starts with N, while adding a third filter, <code>Genre equals "Animation, Adventure, Comedy"</code>, isolated just a single series — the smallest share in the whole set.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Outcome:</strong> The five assignments show how a single field — web mining — branches into distinct analytical challenges: the first assignment (link analysis) uncovers graph structure and page authority, the second (log analysis) real user behavior over time, the third (social network analysis) influence and dynamics within a network, the fourth (data mining) grouping unlabeled data through clustering, and the fifth (opinion analysis) understanding a user's subjective stance through sentiment analysis. Together, they demonstrate the value of a multidisciplinary approach to data-informed engineering and business decisions.
                                   </div>`
                        },
                        {
                            naslov: 'Assessing code quality using the ISO/IEC 9126 standard',
                            id: 'it-iso9126',
                            kategorija: 'kod-kvalitet',
                            povezano: ['it-tim-hms'],
                            datum: 'December 2024',
                            opis: 'As part of the Software Quality Management course in my master’s studies, I analyzed my own Hospital Management System application using international standards and quantitative code metrics.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-award"></i> Master Academic Studies • 2024/2025</div>
                                   <p class="modal-intro">Writing code that "just works" is only the first step in software engineering. During the analysis of my Hospital Management System (HMS), I applied the ISO/IEC 9126 framework to objectively measure software quality.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-chart-diagram"></i> ISO/IEC 9126 Framework in Practice</div>
                                       <div class="modal-section-text">The standard defines 6 key characteristics: functionality, reliability, usability, efficiency, maintainability, and portability. An evaluation model was built instead of relying on subjective impressions.</div>
                                       <div class="modal-example"><strong>Analysis example:</strong> The 3-tier architecture scored high in Maintainability, as database changes do not affect UI. However, Portability scored lower due to tight coupling with .NET and Windows Forms.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-magnifying-glass"></i> Quantitative Code Metrics</div>
                                       <div class="modal-section-text">Analyzing code volume and complexity helped pinpoint critical bottlenecks prior to production release.</div>
                                       <div class="modal-example"><strong>Measurable metrics:</strong> Domain classes averaged 32–48 LOC, data repositories ~120 LOC, and presentation forms ~80 LOC per window, successfully avoiding "God Class" anti-patterns.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Result:</strong> Provided invaluable insights into practical software verification and validation in enterprise systems beyond basic functional testing.
                                   </div>`
                        },
                        {
                            naslov: 'Working in a team on the Hospital Management System',
                            id: 'it-tim-hms',
                            kategorija: 'projekti',
                            povezano: ['it-iso9126'],
                            datum: '2023/2024',
                            opis: 'My first major team project revealed the dynamic side of software engineering — interface agreements, role assignments, and version control matter just as much as coding speed.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-users"></i> Team Project • 2023/2024</div>
                                   <p class="modal-intro">Developing complex software within a 3-person team required clear responsibilities, architectural agreements, and continuous synchronization to avoid code conflicts.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-diagram-project"></i> Roles & DataLayer Responsibilities</div>
                                       <div class="modal-section-text">My primary responsibility involved designing and implementing the Data Access Layer — building repositories for patients, doctors, appointments, and diagnoses, along with unit tests.</div>
                                       <div class="modal-example"><strong>Key takeaway:</strong> We defined C# interfaces before writing implementations, allowing team members working on Business Logic and UI to develop independently using mocked data.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Result:</strong> Highlighted communication, clear naming conventions, and mandatory Code Reviews before merging as foundations for team success.
                                   </div>`
                        },
                        {
                            naslov: 'E-flower shop "Rose": Developing my first project & lessons learned',
                            id: 'it-cvecara',
                            kategorija: 'projekti',
                            datum: '2021/2022',
                            opis: 'E-flower shop "Rose" represents the very first complete project I completed during my second year of undergraduate studies in Object-Oriented Programming. It bridged textbook theory with real code.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-seedling"></i> First Practical Project • 2021/2022</div>
                                   <p class="modal-intro">E-flower shop "Rose" represents the first software project I designed and coded during my second year of undergraduate studies in Object-Oriented Programming (OOP). Up until then, OOP concepts were abstract theory. Building a complete ordering system proved that the core challenge lies in architectural decision-making rather than syntax.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-cubes"></i> Polymorphism & Interfaces in Practice</div>
                                       <div class="modal-section-text">Implementing <code>ICena</code> and <code>IFaktura</code> interfaces made abstract polymorphism tangible.</div>
                                       <div class="modal-example"><strong>Implementation:</strong> The <code>cena()</code> method calculated unit cost for single flowers, but dynamically iterated over lists of components, wrapping paper, and labor for complex bouquets and decorations.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-microscope"></i> Spotting Early Learning Mistakes</div>
                                       <div class="modal-section-text">Revisiting this codebase for portfolio documentation revealed beginner oversights typical of early learning stages.</div>
                                       <div class="modal-example"><strong>Oversights found:</strong> Inside the <code>racun()</code> method, a copy-paste error printed the <code>papir</code> variable instead of <code>paprat</code>. Additionally, some getters/setters were missing due to time constraints.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-lightbulb"></i> <strong>Result:</strong> Despite early technical imperfections, this project provided the unforgettable moment of seeing textbook concepts come alive in working code.
                                   </div>`
                        }
                    ],
                    Edukacija: [
                        {
                            naslov: 'Pedagogical insights from school teaching practicum',
                            id: 'edu-praksa',
                            kategorija: 'praksa',
                            povezano: ['edu-debug'],
                            datum: 'May – June 2026',
                            opis: 'I conducted my teaching internship at Elementary School "Dr Dragiša Mišović" in Čačak with 6th, 7th, and 8th grades. The experience revealed how teaching methods must adapt to student age levels.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-chalkboard-user"></i> Teaching Practicum • May – June 2026</div>
                                   <p class="modal-intro">During my teaching internship, I designed and delivered computer science lessons. The key pedagogical insight was that lesson success depends on matching abstraction levels to student cognitive readiness.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-graduation-cap"></i> Abstraction Progression across Grades</div>
                                       <div class="modal-section-text">Grade 6 focused on Python Turtle graphics for immediate visual feedback. Grade 7 PyGame introduced coordinate systems and RGB colors, while Grade 8 emphasized data structures and logic.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Result:</strong> Proved that a great CS teacher must be both an able engineer and a patient communicator able to translate complex concepts.
                                   </div>`
                        },
                        {
                            naslov: 'Debugging as a core pedagogical teaching tool',
                            id: 'edu-debug',
                            kategorija: 'metodika',
                            povezano: ['edu-praksa'],
                            datum: '2025/2026',
                            opis: 'As a programmer, I view bugs not as failures, but as clues toward a solution. Teaching students to read error logs without panicking was my primary pedagogical goal.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-brain"></i> Pedagogical Reflection • 2025/2026</div>
                                   <p class="modal-intro">When learning to code, the initial barrier is fear of console error messages. A teacher's role is building engineering resilience and debugging independence.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-terminal"></i> Overcoming "Red Text" Panic</div>
                                       <div class="modal-section-text">I established a rule: when an error appears, students read the last line aloud and explain what Python tells them before raising hands.</div>
                                       <div class="modal-example"><strong>Outcome:</strong> Guided questions enabled students to resolve issues independently in over 80% of cases.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-lightbulb"></i> <strong>Result:</strong> Programming teaches children life skills — breaking down big problems into smaller parts and persisting through challenges.
                                   </div>`
                        },
                        {
                            naslov: 'User Experience Quality: what a multimedia seminar paper reveals about good teaching',
                            id: 'edu-multimedija',
                            kategorija: 'metodika',
                            datum: '2026',
                            opis: 'A seminar paper for the Multimedia Technologies and Communications Teaching Practicum course made me reconsider something every teacher senses intuitively but rarely names — that a technically flawless class and a class students experience as good are not always the same thing.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-photo-film"></i> Seminar Paper • Multimedia Technologies and Communications Teaching Practicum • 2026</div>
                                   <p class="modal-intro">I wrote this paper on the development and implementation of modern multimedia systems in education and business, mentored by Dr Marina Milošević. Although the topic is technically oriented, what surprised me most was how directly it translates to teaching practice — especially the distinction between a system working correctly and a user actually experiencing it as good.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-gauge"></i> QoS vs. QoE — technical correctness isn't the same as a good impression</div>
                                       <div class="modal-section-text">The paper distinguishes Quality of Service (QoS) — measurable technical parameters like latency, packet loss, and bandwidth — from Quality of Experience (QoE), a subjective measure of how satisfied a user actually feels.</div>
                                       <div class="modal-example"><strong>Classroom parallel:</strong> A video lecture with zero technical interruptions (high QoS) can still leave students confused and disengaged if the material is poorly structured (low QoE) — technical flawlessness doesn't guarantee a well-received lesson.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-mobile-screen-button"></i> Mobile learning and anytime access</div>
                                       <div class="modal-section-text">The chapter on smart and mobile devices shows how 4G/5G networks and smartphones enabled "anytime, anywhere" learning (m-learning), where students access materials regardless of physical classroom presence.</div>
                                       <div class="modal-example"><strong>Link to practice:</strong> This directly confirms what I noticed during my teaching practicum — younger students learn fastest when they can immediately see the visual result of their action, regardless of which device they're using.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-database"></i> Multimedia information systems behind every LMS platform</div>
                                       <div class="modal-section-text">I also analyzed the architecture of multimedia information systems — the layered model separating presentation, application, and data layers — which is, at its core, what every learning management system (LMS) schools use today is built on.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-wand-magic-sparkles"></i> Trends heading into the classroom: AI, VR/AR, and IoT</div>
                                       <div class="modal-section-text">The final part of the paper covers future directions — AI-driven personalized learning, VR/AR-based virtual labs, and smart classrooms connected through the Internet of Things.</div>
                                       <div class="modal-example"><strong>Why this matters:</strong> As a future computer science teacher, I don't see these trends as a distant future, but as tools I'll very likely be using in my first years in the classroom.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Conclusion:</strong> The paper taught me that quality teaching — like a quality multimedia system — isn't just about technical correctness, but about carefully designing the experience from the recipient's point of view.
                                   </div>`
                        },
                        {
                            naslov: 'What I learned writing about preventing cyberbullying through the school curriculum',
                            id: 'edu-e-nasilje',
                            kategorija: 'istrazivanje',
                            datum: '2026',
                            opis: 'A seminar paper on the ethical and pedagogical aspects of preventing electronic violence changed how I think about the role of computer science classes — not just as a subject teaching technical skills, but digital ethics and responsible behavior too.',
                            telo: `<div class="modal-badge"><i class="fa-solid fa-shield-heart"></i> Seminar Paper • Ethical and Pedagogical Aspects of Preventing Electronic Violence through the School Curriculum • 2026</div>
                                   <p class="modal-intro">This paper examines the ethical and pedagogical aspects of preventing electronic violence through the school curriculum, based on an analysis of current scientific literature. Writing it made me reconsider my own role — as a future computer science teacher, but also as someone who builds digital products every day — in shaping responsible online behavior among young people.</p>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-magnifying-glass"></i> What the literature shows</div>
                                       <div class="modal-section-text">I analyzed three systematic reviews and meta-analyses (Lan, Law & Pan, 2022; Kamaruddin et al., 2023; Tozzo et al., 2022), along with the Council of Europe's Digital Citizenship Education Handbook. The shared conclusion across all sources: technical protection measures alone aren't enough — educational interventions that actively involve students have the largest effect.</div>
                                       <div class="modal-example"><strong>Concrete finding:</strong> Programs that included group activities, discussion, and empathy-building showed better results than those based solely on lectures — passively listening to internet safety rules simply doesn't change behavior.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-globe"></i> Digital citizenship as a wider frame than "internet safety"</div>
                                       <div class="modal-section-text">The Council of Europe handbook frames digital safety as just one part of a broader concept of digital citizenship, which also includes ethics, empathy, rights and responsibilities, and critical thinking in digital environments.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-chalkboard-user"></i> The role of computer science classes</div>
                                       <div class="modal-section-text">The paper specifically highlights that this subject has a unique opportunity to not treat digital safety as an isolated lesson, but to integrate it into regular coursework — through conversations about responsible use of the very technologies students are already learning to use.</div>
                                       <div class="modal-example"><strong>My takeaway as a (future) teacher:</strong> A class where students build their own Python game is a perfect opportunity to also talk, in passing, about what it means to share someone else's data without permission or hide behind online anonymity.</div>
                                   </div>

                                   <div class="modal-section">
                                       <div class="modal-section-title"><i class="fa-solid fa-people-group"></i> A socio-ecological approach: no one solves this alone</div>
                                       <div class="modal-section-text">One of the most important insights was the socio-ecological model of prevention — successful programs involve students, teachers, parents, and the wider community at the same time, not just the school or just the family alone.</div>
                                   </div>

                                   <div class="modal-result">
                                       <i class="fa-solid fa-circle-check"></i> <strong>Conclusion:</strong> Preventing cyberbullying isn't a one-time lesson but an ongoing part of the educational process — and computer science classes have the opportunity to be far more than just a "lesson about internet rules".
                                   </div>`
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
            naslovBlog: document.getElementById('naslov-blog'),
            blogUvod: document.getElementById('blog-uvod'),
            blogKontejner: document.getElementById('blog-kontejner'),
            footer: document.getElementById('idx-footer-datum'),
            langBtn: document.getElementById('nav-lang-btn'),
            themeBtn: document.getElementById('nav-theme-btn'),
            hamburger: document.getElementById('nav-hamburger'),
            navLinks: document.getElementById('navbar-links'),
            blogModal: document.getElementById('blog-modal'),
            blogModalNaslov: document.getElementById('blog-modal-naslov'),
            blogModalDatum: document.getElementById('blog-modal-datum'),
            blogModalTelo: document.getElementById('blog-modal-telo'),
            searchInput: document.getElementById('blog-search-input'),
            searchClear: document.getElementById('blog-search-clear'),
            searchRezultati: document.getElementById('blog-search-rezultati'),
            nemaRezultata: document.getElementById('blog-nema-rezultata'),
            kategorije: document.getElementById('blog-kategorije'),
            featured: document.getElementById('blog-featured'),
            sortDropdown: document.getElementById('blog-sort')
        };

        let trenutnaPretraga = '';
        let aktivnaKategorija = 'sve';
        let aktivnoSortiranje = 'najnovije';

        function karticaHTML(objava, idx) {
            const r = recnik[jezik];
            const pinDeo = objava.pin
                ? `<span class="blog-pin-badge"><i class="fa-solid fa-thumbtack"></i> ${r.oznakaPin}</span>`
                : '';
            const kategorijaLabela = r.kategorije[objava.kategorija] || '';
            return `
                <div class="card edu-split-card spec-course-card fade-in-up${objava.pin ? ' blog-pinned-card' : ''}" style="animation-delay:${idx * 0.08}s">
                    <div class="exp-header">
                        <div>
                            <h3>${pinDeo}${istakniPretragu(objava.naslov)}</h3>
                        </div>
                        <div class="exp-header-meta">
                            <span class="block-date"><i class="fa-solid fa-calendar-days"></i> ${objava.datum}</span>
                            <span class="block-date blog-vreme-citanja"><i class="fa-solid fa-clock"></i> ${r.tekstVreme(vremeCitanja(objava.telo))}</span>
                        </div>
                    </div>
                    <p class="exp-opis">${istakniPretragu(objava.opis)}</p>
                    <div class="edu-buttons-container">
                        <div class="btn-row">
                            ${kategorijaLabela ? `<button type="button" class="skill-tag blog-kategorija-tag" onclick="izaberiKategoriju('${objava.kategorija}')">${kategorijaLabela}</button>` : ''}
                            <button type="button" class="skill-tag blog-citaj-link" onclick="otvoriBlogModal(${idx})">
                                <i class="fa-solid fa-book-open"></i> <span class="blog-citaj-tekst">${r.tekstCitaj}</span>
                            </button>
                        </div>
                    </div>
                </div>`;
        }

        function featuredHTML(objava, idx) {
            const r = recnik[jezik];
            const kategorijaLabela = r.kategorije[objava.kategorija] || '';
            return `
                <div class="card blog-featured-card fade-in-up">
                    <span class="blog-pin-badge blog-featured-badge"><i class="fa-solid fa-star"></i> ${r.oznakaIstaknuto}</span>
                    <h3 class="blog-featured-naslov">${escapeHtml(objava.naslov)}</h3>
                    <div class="exp-header-meta blog-featured-meta">
                        <span class="block-date"><i class="fa-solid fa-calendar-days"></i> ${objava.datum}</span>
                        <span class="block-date blog-vreme-citanja"><i class="fa-solid fa-clock"></i> ${r.tekstVreme(vremeCitanja(objava.telo))}</span>
                        ${kategorijaLabela ? `<span class="block-date">${kategorijaLabela}</span>` : ''}
                    </div>
                    <p class="exp-opis blog-featured-opis">${escapeHtml(objava.opis)}</p>
                    <div class="edu-buttons-container">
                        <div class="btn-row">
                            <button type="button" class="skill-tag blog-citaj-link" onclick="otvoriBlogModal(${idx})">
                                <i class="fa-solid fa-book-open"></i> <span class="blog-citaj-tekst">${r.tekstCitaj}</span>
                            </button>
                        </div>
                    </div>
                </div>`;
        }

        function vremeCitanja(html) {
            const cistTekst = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
            const brojReci = cistTekst ? cistTekst.split(' ').length : 0;
            return Math.max(1, Math.ceil(brojReci / 200));
        }

        function escapeHtml(tekst) {
            const div = document.createElement('div');
            div.textContent = tekst;
            return div.innerHTML;
        }

        function escapeRegExp(tekst) {
            return tekst.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        function istakniPretragu(tekst) {
            const upit = trenutnaPretraga.trim();
            if (!upit) return escapeHtml(tekst);
            const regex = new RegExp(`(${escapeRegExp(upit)})`, 'ig');
            return escapeHtml(tekst).replace(regex, '<mark class="blog-search-mark">$1</mark>');
        }

        function objaveZaPrikaz() {
            const sve = (recnik[jezik].objave[mod] || []).map((objava, idx) => ({ objava, idx }));
            const upit = trenutnaPretraga.trim().toLowerCase();
            let filtrirano = !upit ? sve : sve.filter(({ objava }) =>
                objava.naslov.toLowerCase().includes(upit) || objava.opis.toLowerCase().includes(upit)
            );
            if (aktivnaKategorija && aktivnaKategorija !== 'sve') {
                filtrirano = filtrirano.filter(({ objava }) => objava.kategorija === aktivnaKategorija);
            }
            return filtrirano.slice().sort(poredi);
        }

        function poredi(a, b) {
            if (aktivnoSortiranje === 'az') {
                return a.objava.naslov.localeCompare(b.objava.naslov, jezik === 'SRB' ? 'sr' : 'en');
            }
            if (aktivnoSortiranje === 'za') {
                return b.objava.naslov.localeCompare(a.objava.naslov, jezik === 'SRB' ? 'sr' : 'en');
            }
            if (aktivnoSortiranje === 'najstarije') {
                return b.idx - a.idx;
            }
            // 'najnovije' (podrazumevano): zakačena beleška prva, zatim originalni (hronološki) redosled
            const pinRazlika = (b.objava.pin ? 1 : 0) - (a.objava.pin ? 1 : 0);
            return pinRazlika !== 0 ? pinRazlika : a.idx - b.idx;
        }

        function izaberiSortiranje(vrednost) {
            aktivnoSortiranje = vrednost;
            renderujSortDropdown();
            prikaziBlogListu();
        }
        window.izaberiSortiranje = izaberiSortiranje;

        function svePrisutneKategorije() {
            const sve = recnik[jezik].objave[mod] || [];
            const redosled = [];
            sve.forEach(objava => {
                if (objava.kategorija && !redosled.includes(objava.kategorija)) {
                    redosled.push(objava.kategorija);
                }
            });
            return redosled;
        }

        function izaberiKategoriju(slug) {
            aktivnaKategorija = slug;
            renderujKategorije();
            prikaziBlogListu();
        }
        window.izaberiKategoriju = izaberiKategoriju;

        function renderujKategorije() {
            if (!el.kategorije) return;
            const r = recnik[jezik];
            const prisutne = svePrisutneKategorije();

            if (prisutne.length < 2) {
                el.kategorije.innerHTML = '';
                el.kategorije.style.display = 'none';
                return;
            }

            el.kategorije.style.display = '';
            const opcije = [
                { value: 'sve', label: r.svaKategorija },
                ...prisutne.map(slug => ({ value: slug, label: r.kategorije[slug] || slug }))
            ];
            Common.renderSortDropdown(el.kategorije, opcije, aktivnaKategorija, izaberiKategoriju);
        }

        function povezanePostoveHTML(idx) {
            const r = recnik[jezik];
            const sve = r.objave[mod] || [];
            const trenutna = sve[idx];
            if (!trenutna || !Array.isArray(trenutna.povezano) || !trenutna.povezano.length) return '';

            const izabrani = trenutna.povezano
                .map(id => {
                    const i = sve.findIndex(o => o.id === id);
                    return i === -1 ? null : { o: sve[i], i };
                })
                .filter(Boolean);

            if (!izabrani.length) return '';

            return `<div class="modal-section modal-povezano">
                        <div class="modal-section-title"><i class="fa-solid fa-link"></i> ${r.naslovPovezano}</div>
                        <div class="povezano-lista">
                            ${izabrani.map(({ o, i }) => `
                                <button type="button" class="povezano-stavka" onclick="otvoriBlogModal(${i})">
                                    <span class="povezano-naslov">${escapeHtml(o.naslov)}</span>
                                    <span class="block-date"><i class="fa-solid fa-calendar-days"></i> ${o.datum} <span class="bc-sep">•</span> ${r.tekstVreme(vremeCitanja(o.telo))}</span>
                                </button>`).join('')}
                        </div>
                    </div>`;
        }

        function otvoriBlogModal(idx) {
            const objava = recnik[jezik].objave[mod][idx];
            el.blogModalNaslov.innerText = objava.naslov;
            el.blogModalDatum.innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${objava.datum} <span class="bc-sep">•</span> <i class="fa-solid fa-clock"></i> ${recnik[jezik].tekstVreme(vremeCitanja(objava.telo))}`;
            el.blogModalTelo.innerHTML = objava.telo + povezanePostoveHTML(idx);
            el.blogModalTelo.scrollTop = 0;
            el.blogModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            Common.otvoriModal(el.blogModal);
        }

        function zatvoriBlogModal() {
            el.blogModal.style.display = 'none';
            document.body.style.overflow = '';
            Common.zatvoriModal(el.blogModal);
        }

        el.blogModal.addEventListener('click', event => {
            if (event.target === el.blogModal) zatvoriBlogModal();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && el.blogModal.style.display === 'flex') zatvoriBlogModal();
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

        function prikaziBlogListu() {
            const r = recnik[jezik];
            let stavke = objaveZaPrikaz();
            const brojRezultata = stavke.length;

            const upit = trenutnaPretraga.trim();
            const kategorijaAktivna = aktivnaKategorija && aktivnaKategorija !== 'sve';
            const prikaziFeatured = !upit && !kategorijaAktivna;
            const istaknuta = prikaziFeatured ? stavke.find(({ objava }) => objava.pin) : null;

            if (istaknuta) {
                el.featured.innerHTML = featuredHTML(istaknuta.objava, istaknuta.idx);
                el.featured.style.display = '';
                stavke = stavke.filter(({ idx }) => idx !== istaknuta.idx);
            } else {
                el.featured.innerHTML = '';
                el.featured.style.display = 'none';
            }

            el.blogKontejner.innerHTML = stavke.map(({ objava, idx }) => karticaHTML(objava, idx)).join('');

            const ukupno = (r.objave[mod] || []).length;

            if (upit || kategorijaAktivna) {
                el.searchRezultati.style.display = 'block';
                el.searchRezultati.innerText = r.pretragaRezultati(brojRezultata);
            } else {
                el.searchRezultati.style.display = 'none';
            }

            if ((upit || kategorijaAktivna) && brojRezultata === 0) {
                el.nemaRezultata.style.display = 'block';
                el.nemaRezultata.innerText = r.pretragaNemaRezultata;
                el.blogKontejner.style.display = 'none';
            } else {
                el.nemaRezultata.style.display = 'none';
                el.blogKontejner.style.display = '';
            }

            el.searchClear.style.display = upit ? 'flex' : 'none';

            initFadeInReveal();
        }

        function podesiPretragu() {
            if (!el.searchInput) return;
            el.searchInput.addEventListener('input', event => {
                trenutnaPretraga = event.target.value;
                prikaziBlogListu();
            });
            el.searchClear.addEventListener('click', () => {
                trenutnaPretraga = '';
                el.searchInput.value = '';
                el.searchInput.focus();
                prikaziBlogListu();
            });
        }

        function renderujSortDropdown() {
            if (!el.sortDropdown) return;
            const r = recnik[jezik];
            const opcije = [
                { value: 'najnovije', label: r.sortNajnovije },
                { value: 'najstarije', label: r.sortNajstarije },
                { value: 'az', label: r.sortAZ },
                { value: 'za', label: r.sortZA }
            ];
            Common.renderSortDropdown(el.sortDropdown, opcije, aktivnoSortiranje, izaberiSortiranje);
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
            el.naslovBlog.innerHTML = `<i class="fa-solid fa-pen-nib"></i> ${r.naslovBlog}`;
            el.blogUvod.innerText = r.uvod;
            el.searchInput.placeholder = r.pretragaPlaceholder;
            el.searchInput.setAttribute('aria-label', r.pretragaPlaceholder);

            renderujKategorije();
            renderujSortDropdown();
            prikaziBlogListu();

            el.langBtn.innerText = jezik === 'SRB' ? 'EN' : 'SRB';
            azurirajDatumFootera();
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
        podesiPretragu();
        initScrollTopButton();