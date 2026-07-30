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
                btnPokreniKod: 'Pokreni kod',
                naslovRunModala: 'Simulacija crtanja',
                btnPonovoPokreni: 'Pokreni ponovo',
                napomenaRun: 'Napomena: ovo je pojednostavljen vizuelni prikaz koda, pa može doći do sitnih odstupanja u odnosu na izgled crteža kada se isti kod pokrene u Python Turtle okruženju na računaru.',
                btnProbajSam: 'Probaj sam',
                naslovProbajModala: 'Probaj sam',
                probajPomocTekst: 'Podržane komande: forward/fd, backward/bk, left/lt, right/rt, penup, pendown, color, goto, begin_fill, end_fill, width, shape, shapesize, stamp, setheading, home, bgcolor i for _ in range(n):',
                probajPokreniTekst: 'Pokreni',
                probajOcistiTekst: 'Očisti platno',
                probajGreskaPrefix: 'Greška u liniji',
                probajPrimer: 'color("purple")\nbegin_fill()\nfor _ in range(4):\n    forward(100)\n    left(90)\nend_fill()',
                footer: '©Copyright by Nena Kozić'
            },
            ENG: {
                navProfil: 'Profile', navIskustvo: 'Experience', navEdukacija: 'Education', navProjekti: 'Projects', navPromeni: 'Switch Portfolio',
                naslovStrane: 'Interactive Python Turtle Code',
                podnaslovStrane: 'Click on the pink, underlined lines of code to watch their video explanation!',
                btnPokreniKod: 'Run code',
                naslovRunModala: 'Drawing simulation',
                btnPonovoPokreni: 'Run again',
                napomenaRun: 'Note: this is a simplified visual representation of the code, so there may be small differences compared to how the drawing actually looks when the same code runs in a Python Turtle environment on a computer.',
                btnProbajSam: 'Try it yourself',
                naslovProbajModala: 'Try it yourself',
                probajPomocTekst: 'Supported commands: forward/fd, backward/bk, left/lt, right/rt, penup, pendown, color, goto, begin_fill, end_fill, width, shape, shapesize, stamp, setheading, home, bgcolor, and for _ in range(n):',
                probajPokreniTekst: 'Run',
                probajOcistiTekst: 'Clear canvas',
                probajGreskaPrefix: 'Error on line',
                probajPrimer: 'color("purple")\nbegin_fill()\nfor _ in range(4):\n    forward(100)\n    left(90)\nend_fill()',
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
            kopirajBtn: document.getElementById('kopiraj-kod-btn'),
            pokreniBtn: document.getElementById('pokreni-kod-btn'),
            runModal: document.getElementById('runModal'),
            canvas: document.getElementById('turtleCanvas'),
            runNaslov: document.getElementById('run-modal-naslov'),
            ponovoBtn: document.getElementById('run-ponovo-btn'),
            ponovoTekst: document.getElementById('run-ponovo-tekst'),
            napomenaRun: document.getElementById('run-napomena-tekst'),
            probajBtn: document.getElementById('probaj-kod-btn'),
            probajModal: document.getElementById('probajModal'),
            probajModalNaslov: document.getElementById('probaj-modal-naslov'),
            probajPomoc: document.getElementById('probaj-pomoc-tekst'),
            probajUnos: document.getElementById('probaj-unos'),
            probajPokreniBtn: document.getElementById('probaj-pokreni-btn'),
            probajPokreniTekst: document.getElementById('probaj-pokreni-tekst'),
            probajOcistiBtn: document.getElementById('probaj-ocisti-btn'),
            probajOcistiTekst: document.getElementById('probaj-ocisti-tekst'),
            probajGreska: document.getElementById('probaj-greska'),
            probajCanvas: document.getElementById('probajCanvas')
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

            el.pokreniBtn.innerHTML = `<i class="fa-solid fa-play"></i> ${r.btnPokreniKod}`;
            el.runNaslov.innerText = r.naslovRunModala;
            el.ponovoTekst.innerText = r.btnPonovoPokreni;
            el.napomenaRun.innerText = r.napomenaRun;

            el.probajBtn.innerHTML = `<i class="fa-solid fa-flask"></i> ${r.btnProbajSam}`;
            el.probajModalNaslov.innerText = r.naslovProbajModala;
            el.probajPomoc.innerText = r.probajPomocTekst;
            el.probajPokreniTekst.innerText = r.probajPokreniTekst;
            el.probajOcistiTekst.innerText = r.probajOcistiTekst;
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

        function initFadeInReveal(root) {
            Common.initFadeInReveal(root);
        }

        // ============================================================
        // Simulacija crtanja kornjače (Canvas) — "Pokreni kod" dugme
        // ============================================================
        const koraciKornjace = [
            { t: 'sirina', v: 4 },
            { t: 'boja', v: 'blue' },
            { t: 'forward', v: 150 }, { t: 'levo', v: 90 },
            { t: 'forward', v: 150 }, { t: 'levo', v: 90 },
            { t: 'forward', v: 150 }, { t: 'levo', v: 90 },
            { t: 'forward', v: 150 }, { t: 'levo', v: 90 },
            { t: 'penup' },
            { t: 'levo', v: 90 },
            { t: 'forward', v: 150 },
            { t: 'levo', v: 90 },
            { t: 'forward', v: 25 },
            { t: 'desno', v: 180 },
            { t: 'boja', v: 'red' },
            { t: 'beginfill' },
            { t: 'goto', x: 75, y: 225 },
            { t: 'goto', x: 175, y: 150 },
            { t: 'goto', x: -25, y: 150 },
            { t: 'endfill' },
            { t: 'oblik', v: 'square' },
            { t: 'boja', v: 'lightblue' },
            { t: 'goto', x: 40, y: 100 },
            { t: 'velicina', a: 1.5, b: 1.5 },
            { t: 'stamp' },
            { t: 'goto', x: 110, y: 100 },
            { t: 'stamp' },
            { t: 'boja', v: 'brown' },
            { t: 'goto', x: 75, y: 30 },
            { t: 'velicina', a: 3, b: 2 },
            { t: 'stamp' },
            { t: 'oblik', v: 'turtle' },
            { t: 'boja', v: 'green' },
            { t: 'velicina', a: 1.5, b: 1.5 },
            { t: 'goto', x: 75, y: -50 },
            { t: 'heading', v: 90 }
        ];

        const GRANICE = { minX: -45, maxX: 195, minY: -75, maxY: 250 };
        const RAZMERA = 1.7;

        let simToken = 0;

        function sacekaj(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function podesiCanvas() {
            el.canvas.width = (GRANICE.maxX - GRANICE.minX) * RAZMERA;
            el.canvas.height = (GRANICE.maxY - GRANICE.minY) * RAZMERA;
        }

        function uTacku(x, y) {
            return {
                x: (x - GRANICE.minX) * RAZMERA,
                y: (GRANICE.maxY - y) * RAZMERA
            };
        }

        function crtajTrouglic(ctx, cx, cy, ugaoRad, velicina) {
            const duzina = 14 * velicina * RAZMERA;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(ugaoRad);
            ctx.beginPath();
            ctx.moveTo(duzina, 0);
            ctx.lineTo(-duzina * 0.6, duzina * 0.55);
            ctx.lineTo(-duzina * 0.6, -duzina * 0.55);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
        }

        function crtajOp(ctx, op) {
            if (op.type === 'linija') {
                const a = uTacku(op.x1, op.y1);
                const b = uTacku(op.x2, op.y2);
                ctx.strokeStyle = op.boja;
                ctx.lineWidth = (op.sirina || 3) * 0.8;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            } else if (op.type === 'popuna') {
                ctx.fillStyle = op.boja;
                ctx.beginPath();
                op.tacke.forEach((t, i) => {
                    const p = uTacku(t.x, t.y);
                    if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
                });
                ctx.closePath();
                ctx.fill();
            } else if (op.type === 'stamp') {
                const p = uTacku(op.x, op.y);
                ctx.fillStyle = op.boja;
                if (op.oblik === 'square') {
                    const sirina = 20 * op.a * RAZMERA;
                    const visina = 20 * op.b * RAZMERA;
                    ctx.fillRect(p.x - sirina / 2, p.y - visina / 2, sirina, visina);
                    ctx.strokeStyle = 'rgba(15,23,42,0.25)';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(p.x - sirina / 2, p.y - visina / 2, sirina, visina);
                } else {
                    crtajTrouglic(ctx, p.x, p.y, -op.heading * Math.PI / 180, op.a);
                }
            }
        }

        function crtajKornjacu(ctx, stanje) {
            const p = uTacku(stanje.x, stanje.y);
            ctx.fillStyle = stanje.boja;
            if (stanje.oblik === 'square') {
                const s = 20 * (stanje.velicina.a || 1) * RAZMERA;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(-stanje.heading * Math.PI / 180);
                ctx.strokeStyle = '#334155';
                ctx.lineWidth = 1.5;
                ctx.fillRect(-s / 2, -s / 2, s, s);
                ctx.strokeRect(-s / 2, -s / 2, s, s);
                ctx.restore();
            } else {
                crtajTrouglic(ctx, p.x, p.y, -stanje.heading * Math.PI / 180, stanje.velicina.a || 1);
            }
        }

        function nacrtajScenu(ctx, stanje, privremenaLinija) {
            ctx.clearRect(0, 0, el.canvas.width, el.canvas.height);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, el.canvas.width, el.canvas.height);

            stanje.ops.forEach(op => crtajOp(ctx, op));
            if (privremenaLinija) crtajOp(ctx, privremenaLinija);

            crtajKornjacu(ctx, stanje);
        }

        async function animirajKorak(stanje, ctx, korak, token) {
            if (token !== simToken) return;

            if (korak.t === 'sirina') {
                stanje.linijaSirina = korak.v;
                await sacekaj(50);
            } else if (korak.t === 'boja') {
                stanje.boja = korak.v;
                await sacekaj(120);
            } else if (korak.t === 'penup') {
                stanje.dolePenu = false;
                await sacekaj(80);
            } else if (korak.t === 'levo' || korak.t === 'desno') {
                stanje.heading = (stanje.heading + (korak.t === 'levo' ? korak.v : -korak.v) + 360) % 360;
                nacrtajScenu(ctx, stanje);
                await sacekaj(180);
            } else if (korak.t === 'heading') {
                stanje.heading = korak.v;
                nacrtajScenu(ctx, stanje);
                await sacekaj(150);
            } else if (korak.t === 'oblik') {
                stanje.oblik = korak.v;
                nacrtajScenu(ctx, stanje);
                await sacekaj(100);
            } else if (korak.t === 'velicina') {
                stanje.velicina = { a: korak.a, b: korak.b || korak.a };
                await sacekaj(80);
            } else if (korak.t === 'beginfill') {
                stanje.punjenje = true;
                stanje.tackePunjenja = [{ x: stanje.x, y: stanje.y }];
                await sacekaj(80);
            } else if (korak.t === 'endfill') {
                stanje.punjenje = false;
                stanje.ops.push({ type: 'popuna', tacke: stanje.tackePunjenja, boja: stanje.boja });
                stanje.tackePunjenja = [];
                nacrtajScenu(ctx, stanje);
                await sacekaj(250);
            } else if (korak.t === 'stamp') {
                stanje.ops.push({
                    type: 'stamp', x: stanje.x, y: stanje.y, a: stanje.velicina.a,
                    b: stanje.velicina.b, boja: stanje.boja, oblik: stanje.oblik, heading: stanje.heading
                });
                nacrtajScenu(ctx, stanje);
                await sacekaj(200);
            } else if (korak.t === 'forward' || korak.t === 'goto') {
                const pocetakX = stanje.x, pocetakY = stanje.y;
                let krajX, krajY;
                if (korak.t === 'forward') {
                    const rad = stanje.heading * Math.PI / 180;
                    krajX = pocetakX + korak.v * Math.cos(rad);
                    krajY = pocetakY + korak.v * Math.sin(rad);
                } else {
                    krajX = korak.x; krajY = korak.y;
                }
                const rastojanje = Math.hypot(krajX - pocetakX, krajY - pocetakY);
                const trajanje = Math.min(900, Math.max(180, rastojanje * 3.2));
                const start = performance.now();

                await new Promise(resolve => {
                    function frame(now) {
                        if (token !== simToken) { resolve(); return; }
                        const t = Math.min(1, (now - start) / trajanje);
                        stanje.x = pocetakX + (krajX - pocetakX) * t;
                        stanje.y = pocetakY + (krajY - pocetakY) * t;
                        const privremena = stanje.dolePenu
                            ? { type: 'linija', x1: pocetakX, y1: pocetakY, x2: stanje.x, y2: stanje.y, boja: stanje.boja, sirina: stanje.linijaSirina }
                            : null;
                        nacrtajScenu(ctx, stanje, privremena);
                        if (t < 1) requestAnimationFrame(frame); else resolve();
                    }
                    requestAnimationFrame(frame);
                });

                stanje.x = krajX; stanje.y = krajY;
                if (stanje.dolePenu) {
                    stanje.ops.push({ type: 'linija', x1: pocetakX, y1: pocetakY, x2: krajX, y2: krajY, boja: stanje.boja, sirina: stanje.linijaSirina });
                }
                if (stanje.punjenje) {
                    stanje.tackePunjenja.push({ x: krajX, y: krajY });
                }
                nacrtajScenu(ctx, stanje);
            }
        }

        async function pokreniSimulaciju() {
            simToken++;
            const token = simToken;
            podesiCanvas();
            const ctx = el.canvas.getContext('2d');

            const stanje = {
                x: 0, y: 0, heading: 0, dolePenu: true, boja: 'black', linijaSirina: 1,
                oblik: 'turtle', velicina: { a: 1, b: 1 }, punjenje: false,
                tackePunjenja: [], ops: []
            };

            nacrtajScenu(ctx, stanje);

            for (const korak of koraciKornjace) {
                if (token !== simToken) return;
                await animirajKorak(stanje, ctx, korak, token);
            }
        }

        function otvoriRun() {
            el.runModal.style.display = 'flex';
            Common.otvoriModal(el.runModal);
            pokreniSimulaciju();
        }

        function zatvoriRun() {
            simToken++;
            el.runModal.style.display = 'none';
            Common.zatvoriModal(el.runModal);
        }

        if (el.pokreniBtn) el.pokreniBtn.addEventListener('click', otvoriRun);
        if (el.ponovoBtn) el.ponovoBtn.addEventListener('click', pokreniSimulaciju);

        el.runModal.addEventListener('click', event => {
            if (event.target === el.runModal) zatvoriRun();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && el.runModal.style.display === 'flex') zatvoriRun();
        });

        primeniRezim();
        osvezi();
        podesiEduDropdown();
        initFadeInReveal();

        // ============================================================
        // "Probaj sam" — mini Turtle interpreter i plejgraund
        // ============================================================
        function probajOcistiKomentar(linija) {
            let rezultat = '';
            let uNavodnicima = null;
            for (let i = 0; i < linija.length; i++) {
                const c = linija[i];
                if (uNavodnicima) {
                    rezultat += c;
                    if (c === uNavodnicima) uNavodnicima = null;
                    continue;
                }
                if (c === '"' || c === "'") { uNavodnicima = c; rezultat += c; continue; }
                if (c === '#') break;
                rezultat += c;
            }
            return rezultat;
        }

        function probajBrojIndentacije(linija) {
            const m = linija.match(/^[ \t]*/);
            return m ? m[0].replace(/\t/g, '    ').length : 0;
        }

        function probajParsirajArgumente(tekst) {
            return tekst.split(',').map(a => a.trim()).filter(a => a.length > 0);
        }

        function probajArgKaoBroj(arg) {
            if (arg === undefined) return null;
            const broj = parseFloat(arg);
            return Number.isNaN(broj) ? null : broj;
        }

        function probajArgKaoString(arg) {
            const m = arg.match(/^['"](.*)['"]$/);
            return m ? m[1] : arg;
        }

        const PROBAJ_IGNORISI = /import\s|Screen\s*\(|Turtle\s*\(|mainloop\s*\(|exitonclick\s*\(|title\s*\(|speed\s*\(|done\s*\(\s*\)/;

        function probajParsirajLiniju(sirovaLinija, brojLinije) {
            const linija = probajOcistiKomentar(sirovaLinija).trim();
            if (!linija) return { koraci: [] };
            if (PROBAJ_IGNORISI.test(linija)) return { koraci: [] };

            const m = linija.match(/^(?:[a-zA-Z_]\w*\.)?([a-zA-Z_]\w*)\s*\(([^)]*)\)\s*$/);
            if (!m) {
                return { greska: { linija: brojLinije, poruka: `nepoznata ili nepodržana instrukcija: "${linija}"` } };
            }

            const komanda = m[1].toLowerCase();
            const argumenti = probajParsirajArgumente(m[2]);

            switch (komanda) {
                case 'forward': case 'fd': {
                    const v = probajArgKaoBroj(argumenti[0]);
                    if (v === null) return { greska: { linija: brojLinije, poruka: `${komanda}() zahteva broj` } };
                    return { koraci: [{ t: 'forward', v }] };
                }
                case 'backward': case 'bk': case 'back': {
                    const v = probajArgKaoBroj(argumenti[0]);
                    if (v === null) return { greska: { linija: brojLinije, poruka: `${komanda}() zahteva broj` } };
                    return { koraci: [{ t: 'forward', v: -v }] };
                }
                case 'left': case 'lt': {
                    const v = probajArgKaoBroj(argumenti[0]);
                    if (v === null) return { greska: { linija: brojLinije, poruka: `${komanda}() zahteva ugao` } };
                    return { koraci: [{ t: 'levo', v }] };
                }
                case 'right': case 'rt': {
                    const v = probajArgKaoBroj(argumenti[0]);
                    if (v === null) return { greska: { linija: brojLinije, poruka: `${komanda}() zahteva ugao` } };
                    return { koraci: [{ t: 'desno', v }] };
                }
                case 'penup': case 'pu': return { koraci: [{ t: 'penup' }] };
                case 'pendown': case 'pd': return { koraci: [{ t: 'pendown' }] };
                case 'color': case 'pencolor': case 'fillcolor': {
                    if (!argumenti.length) return { greska: { linija: brojLinije, poruka: 'color() zahteva naziv boje' } };
                    return { koraci: [{ t: 'boja', v: probajArgKaoString(argumenti[0]) }] };
                }
                case 'goto': case 'setpos': case 'setposition': {
                    const x = probajArgKaoBroj(argumenti[0]);
                    const y = probajArgKaoBroj(argumenti[1]);
                    if (x === null || y === null) return { greska: { linija: brojLinije, poruka: `${komanda}() zahteva dve koordinate (x, y)` } };
                    return { koraci: [{ t: 'goto', x, y }] };
                }
                case 'setx': {
                    const x = probajArgKaoBroj(argumenti[0]);
                    if (x === null) return { greska: { linija: brojLinije, poruka: 'setx() zahteva broj' } };
                    return { koraci: [{ t: 'gotoRelX', x }] };
                }
                case 'sety': {
                    const y = probajArgKaoBroj(argumenti[0]);
                    if (y === null) return { greska: { linija: brojLinije, poruka: 'sety() zahteva broj' } };
                    return { koraci: [{ t: 'gotoRelY', y }] };
                }
                case 'begin_fill': return { koraci: [{ t: 'beginfill' }] };
                case 'end_fill': return { koraci: [{ t: 'endfill' }] };
                case 'width': case 'pensize': {
                    const v = probajArgKaoBroj(argumenti[0]);
                    if (v === null) return { greska: { linija: brojLinije, poruka: `${komanda}() zahteva broj` } };
                    return { koraci: [{ t: 'sirina', v }] };
                }
                case 'shape': {
                    if (!argumenti.length) return { greska: { linija: brojLinije, poruka: 'shape() zahteva naziv oblika' } };
                    return { koraci: [{ t: 'oblik', v: probajArgKaoString(argumenti[0]) }] };
                }
                case 'shapesize': case 'turtlesize': {
                    const a = probajArgKaoBroj(argumenti[0]);
                    if (a === null) return { greska: { linija: brojLinije, poruka: `${komanda}() zahteva broj` } };
                    const b = probajArgKaoBroj(argumenti[1]);
                    return { koraci: [{ t: 'velicina', a, b: b === null ? a : b }] };
                }
                case 'stamp': return { koraci: [{ t: 'stamp' }] };
                case 'setheading': case 'seth': {
                    const v = probajArgKaoBroj(argumenti[0]);
                    if (v === null) return { greska: { linija: brojLinije, poruka: `${komanda}() zahteva ugao` } };
                    return { koraci: [{ t: 'heading', v }] };
                }
                case 'home': return { koraci: [{ t: 'goto', x: 0, y: 0 }, { t: 'heading', v: 0 }] };
                case 'bgcolor': {
                    if (!argumenti.length) return { greska: { linija: brojLinije, poruka: 'bgcolor() zahteva naziv boje' } };
                    return { koraci: [{ t: 'pozadina', v: probajArgKaoString(argumenti[0]) }] };
                }
                default:
                    return { greska: { linija: brojLinije, poruka: `nepoznata komanda "${komanda}()"` } };
            }
        }

        function probajParsirajPodlinije(trim, brojLinije, koraci) {
            const podLinije = trim.split(';').map(s => s.trim()).filter(s => s.length > 0);
            for (const pod of podLinije) {
                const rez = probajParsirajLiniju(pod, brojLinije);
                if (rez.greska) return rez.greska;
                koraci.push(...rez.koraci);
            }
            return null;
        }

        function probajParsirajKod(tekst) {
            const sveLinije = tekst.replace(/\r\n/g, '\n').split('\n');
            const koraci = [];
            let i = 0;

            while (i < sveLinije.length) {
                const sirova = sveLinije[i];
                const trim = probajOcistiKomentar(sirova).trim();
                const brojLinije = i + 1;

                if (!trim) { i++; continue; }

                const forInline = trim.match(/^for\s+\S+\s+in\s+range\(\s*(\d+)\s*\)\s*:\s*(.+)$/);
                const forBlok = trim.match(/^for\s+\S+\s+in\s+range\(\s*(\d+)\s*\)\s*:\s*$/);

                if (forInline) {
                    const broj = parseInt(forInline[1], 10);
                    for (let k = 0; k < broj; k++) {
                        const greska = probajParsirajPodlinije(forInline[2], brojLinije, koraci);
                        if (greska) return { greska };
                    }
                    i++;
                    continue;
                }

                if (forBlok) {
                    const broj = parseInt(forBlok[1], 10);
                    const indentPetlje = probajBrojIndentacije(sirova);
                    const telo = [];
                    let j = i + 1;
                    while (j < sveLinije.length) {
                        const sledecaTrim = probajOcistiKomentar(sveLinije[j]).trim();
                        if (!sledecaTrim) { telo.push({ linija: sveLinije[j], broj: j + 1 }); j++; continue; }
                        if (probajBrojIndentacije(sveLinije[j]) <= indentPetlje) break;
                        telo.push({ linija: sveLinije[j], broj: j + 1 });
                        j++;
                    }
                    if (!telo.some(t => probajOcistiKomentar(t.linija).trim())) {
                        return { greska: { linija: brojLinije, poruka: 'for petlja nema telo (uvučene linije ispod nje)' } };
                    }
                    for (let k = 0; k < broj; k++) {
                        for (const t of telo) {
                            const trimTela = probajOcistiKomentar(t.linija).trim();
                            if (!trimTela) continue;
                            const greska = probajParsirajPodlinije(trimTela, t.broj, koraci);
                            if (greska) return { greska };
                        }
                    }
                    i = j;
                    continue;
                }

                const greska = probajParsirajPodlinije(trim, brojLinije, koraci);
                if (greska) return { greska };
                i++;
            }

            if (!koraci.length) {
                return { greska: { linija: 1, poruka: 'nema instrukcija za izvršavanje — upiši bar jednu turtle komandu' } };
            }

            return { koraci };
        }

        function probajPocetnoStanje() {
            return {
                x: 0, y: 0, heading: 0, dolePenu: true, boja: 'black', linijaSirina: 1,
                oblik: 'turtle', velicina: { a: 1, b: 1 }, punjenje: false,
                tackePunjenja: [], ops: [], pozadina: '#ffffff'
            };
        }

        function probajPrimeniInstant(stanje, korak) {
            switch (korak.t) {
                case 'sirina': stanje.linijaSirina = korak.v; break;
                case 'boja': stanje.boja = korak.v; break;
                case 'pozadina': stanje.pozadina = korak.v; break;
                case 'penup': stanje.dolePenu = false; break;
                case 'pendown': stanje.dolePenu = true; break;
                case 'levo': stanje.heading = (stanje.heading + korak.v + 360) % 360; break;
                case 'desno': stanje.heading = (stanje.heading - korak.v + 360) % 360; break;
                case 'heading': stanje.heading = korak.v; break;
                case 'oblik': stanje.oblik = korak.v; break;
                case 'velicina': stanje.velicina = { a: korak.a, b: korak.b || korak.a }; break;
                case 'beginfill':
                    stanje.punjenje = true;
                    stanje.tackePunjenja = [{ x: stanje.x, y: stanje.y }];
                    break;
                case 'endfill':
                    stanje.punjenje = false;
                    stanje.ops.push({ type: 'popuna', tacke: stanje.tackePunjenja, boja: stanje.boja });
                    stanje.tackePunjenja = [];
                    break;
                case 'stamp':
                    stanje.ops.push({
                        type: 'stamp', x: stanje.x, y: stanje.y, a: stanje.velicina.a,
                        b: stanje.velicina.b, boja: stanje.boja, oblik: stanje.oblik, heading: stanje.heading
                    });
                    break;
                case 'forward': case 'goto': case 'gotoRelX': case 'gotoRelY': {
                    let krajX, krajY;
                    if (korak.t === 'forward') {
                        const rad = stanje.heading * Math.PI / 180;
                        krajX = stanje.x + korak.v * Math.cos(rad);
                        krajY = stanje.y + korak.v * Math.sin(rad);
                    } else if (korak.t === 'goto') {
                        krajX = korak.x; krajY = korak.y;
                    } else if (korak.t === 'gotoRelX') {
                        krajX = korak.x; krajY = stanje.y;
                    } else {
                        krajX = stanje.x; krajY = korak.y;
                    }
                    if (stanje.dolePenu) {
                        stanje.ops.push({ type: 'linija', x1: stanje.x, y1: stanje.y, x2: krajX, y2: krajY, boja: stanje.boja, sirina: stanje.linijaSirina });
                    }
                    if (stanje.punjenje) stanje.tackePunjenja.push({ x: krajX, y: krajY });
                    stanje.x = krajX; stanje.y = krajY;
                    break;
                }
            }
        }

        function probajIzracunajGranice(koraci) {
            const stanje = probajPocetnoStanje();
            let minX = 0, maxX = 0, minY = 0, maxY = 0;

            function belezi(x, y, margina) {
                minX = Math.min(minX, x - margina); maxX = Math.max(maxX, x + margina);
                minY = Math.min(minY, y - margina); maxY = Math.max(maxY, y + margina);
            }

            belezi(stanje.x, stanje.y, 10);

            for (const korak of koraci) {
                probajPrimeniInstant(stanje, korak);
                const margina = korak.t === 'stamp'
                    ? 15 * Math.max(stanje.velicina.a, stanje.velicina.b)
                    : 10;
                belezi(stanje.x, stanje.y, margina);
            }

            return { minX, maxX, minY, maxY };
        }

        function probajUTacku(prostor, x, y) {
            return {
                x: (x - prostor.minX) * prostor.skala,
                y: (prostor.maxY - y) * prostor.skala
            };
        }

        function probajCrtajTrouglic(ctx, prostor, cx, cy, ugaoRad, velicina) {
            const duzina = 14 * velicina * prostor.skala;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(ugaoRad);
            ctx.beginPath();
            ctx.moveTo(duzina, 0);
            ctx.lineTo(-duzina * 0.6, duzina * 0.55);
            ctx.lineTo(-duzina * 0.6, -duzina * 0.55);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
        }

        function probajCrtajOp(ctx, prostor, op) {
            if (op.type === 'linija') {
                const a = probajUTacku(prostor, op.x1, op.y1);
                const b = probajUTacku(prostor, op.x2, op.y2);
                ctx.strokeStyle = op.boja;
                ctx.lineWidth = (op.sirina || 3) * 0.8;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            } else if (op.type === 'popuna') {
                ctx.fillStyle = op.boja;
                ctx.beginPath();
                op.tacke.forEach((t, i) => {
                    const p = probajUTacku(prostor, t.x, t.y);
                    if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
                });
                ctx.closePath();
                ctx.fill();
            } else if (op.type === 'stamp') {
                const p = probajUTacku(prostor, op.x, op.y);
                ctx.fillStyle = op.boja;
                if (op.oblik === 'square') {
                    const sirina = 20 * op.a * prostor.skala;
                    const visina = 20 * op.b * prostor.skala;
                    ctx.fillRect(p.x - sirina / 2, p.y - visina / 2, sirina, visina);
                    ctx.strokeStyle = 'rgba(15,23,42,0.25)';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(p.x - sirina / 2, p.y - visina / 2, sirina, visina);
                } else {
                    probajCrtajTrouglic(ctx, prostor, p.x, p.y, -op.heading * Math.PI / 180, op.a);
                }
            }
        }

        function probajCrtajKornjacu(ctx, prostor, stanje) {
            const p = probajUTacku(prostor, stanje.x, stanje.y);
            ctx.fillStyle = stanje.boja;
            if (stanje.oblik === 'square') {
                const s = 20 * (stanje.velicina.a || 1) * prostor.skala;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(-stanje.heading * Math.PI / 180);
                ctx.strokeStyle = '#334155';
                ctx.lineWidth = 1.5;
                ctx.fillRect(-s / 2, -s / 2, s, s);
                ctx.strokeRect(-s / 2, -s / 2, s, s);
                ctx.restore();
            } else {
                probajCrtajTrouglic(ctx, prostor, p.x, p.y, -stanje.heading * Math.PI / 180, stanje.velicina.a || 1);
            }
        }

        function probajNacrtajScenu(canvas, ctx, prostor, stanje, privremenaLinija) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = stanje.pozadina || '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stanje.ops.forEach(op => probajCrtajOp(ctx, prostor, op));
            if (privremenaLinija) probajCrtajOp(ctx, prostor, privremenaLinija);

            probajCrtajKornjacu(ctx, prostor, stanje);
        }

        let probajToken = 0;

        async function probajAnimirajKorak(stanje, canvas, ctx, prostor, korak, token) {
            if (token !== probajToken) return;

            if (korak.t === 'forward' || korak.t === 'goto' || korak.t === 'gotoRelX' || korak.t === 'gotoRelY') {
                const pocetakX = stanje.x, pocetakY = stanje.y;
                let krajX, krajY;
                if (korak.t === 'forward') {
                    const rad = stanje.heading * Math.PI / 180;
                    krajX = pocetakX + korak.v * Math.cos(rad);
                    krajY = pocetakY + korak.v * Math.sin(rad);
                } else if (korak.t === 'goto') {
                    krajX = korak.x; krajY = korak.y;
                } else if (korak.t === 'gotoRelX') {
                    krajX = korak.x; krajY = pocetakY;
                } else {
                    krajX = pocetakX; krajY = korak.y;
                }
                const rastojanje = Math.hypot(krajX - pocetakX, krajY - pocetakY);
                const trajanje = Math.min(700, Math.max(120, rastojanje * 2.4));
                const start = performance.now();

                await new Promise(resolve => {
                    function frame(now) {
                        if (token !== probajToken) { resolve(); return; }
                        const t = Math.min(1, (now - start) / trajanje);
                        stanje.x = pocetakX + (krajX - pocetakX) * t;
                        stanje.y = pocetakY + (krajY - pocetakY) * t;
                        const privremena = stanje.dolePenu
                            ? { type: 'linija', x1: pocetakX, y1: pocetakY, x2: stanje.x, y2: stanje.y, boja: stanje.boja, sirina: stanje.linijaSirina }
                            : null;
                        probajNacrtajScenu(canvas, ctx, prostor, stanje, privremena);
                        if (t < 1) requestAnimationFrame(frame); else resolve();
                    }
                    requestAnimationFrame(frame);
                });

                stanje.x = krajX; stanje.y = krajY;
                if (stanje.dolePenu) {
                    stanje.ops.push({ type: 'linija', x1: pocetakX, y1: pocetakY, x2: krajX, y2: krajY, boja: stanje.boja, sirina: stanje.linijaSirina });
                }
                if (stanje.punjenje) stanje.tackePunjenja.push({ x: krajX, y: krajY });
                probajNacrtajScenu(canvas, ctx, prostor, stanje);
                return;
            }

            probajPrimeniInstant(stanje, korak);
            probajNacrtajScenu(canvas, ctx, prostor, stanje);

            const pauze = { levo: 130, desno: 130, heading: 120, oblik: 90, stamp: 180, beginfill: 60, endfill: 200 };
            await sacekaj(pauze[korak.t] || 60);
        }

        function probajPrikaziGresku(poruka) {
            el.probajGreska.textContent = poruka;
            el.probajGreska.style.display = 'block';
        }

        function probajSakrijGresku() {
            el.probajGreska.style.display = 'none';
            el.probajGreska.textContent = '';
        }

        async function pokreniProbaj() {
            probajSakrijGresku();
            const parsirano = probajParsirajKod(el.probajUnos.value);

            if (parsirano.greska) {
                probajPrikaziGresku(`${recnik[jezik].probajGreskaPrefix} ${parsirano.greska.linija}: ${parsirano.greska.poruka}`);
                return;
            }

            probajToken++;
            const token = probajToken;

            const granice = probajIzracunajGranice(parsirano.koraci);
            const rangeX = Math.max(40, granice.maxX - granice.minX);
            const rangeY = Math.max(40, granice.maxY - granice.minY);
            let skala = Math.min(420 / rangeX, 420 / rangeY);
            skala = Math.min(4, Math.max(0.4, skala));

            const prostor = { minX: granice.minX, maxX: granice.maxX, minY: granice.minY, maxY: granice.maxY, skala };

            const canvas = el.probajCanvas;
            canvas.width = rangeX * skala;
            canvas.height = rangeY * skala;
            const ctx = canvas.getContext('2d');

            const stanje = probajPocetnoStanje();
            probajNacrtajScenu(canvas, ctx, prostor, stanje);

            for (const korak of parsirano.koraci) {
                if (token !== probajToken) return;
                await probajAnimirajKorak(stanje, canvas, ctx, prostor, korak, token);
            }
        }

        function probajOcistiPlatno() {
            probajToken++;
            probajSakrijGresku();
            const canvas = el.probajCanvas;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        function otvoriProbaj() {
            el.probajModal.style.display = 'flex';
            Common.otvoriModal(el.probajModal);
            if (!el.probajUnos.value.trim()) {
                el.probajUnos.value = recnik[jezik].probajPrimer;
            }
        }

        function zatvoriProbaj() {
            probajToken++;
            el.probajModal.style.display = 'none';
            Common.zatvoriModal(el.probajModal);
        }

        if (el.probajBtn) el.probajBtn.addEventListener('click', otvoriProbaj);
        if (el.probajPokreniBtn) el.probajPokreniBtn.addEventListener('click', pokreniProbaj);
        if (el.probajOcistiBtn) el.probajOcistiBtn.addEventListener('click', probajOcistiPlatno);

        el.probajModal.addEventListener('click', event => {
            if (event.target === el.probajModal) zatvoriProbaj();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && el.probajModal.style.display === 'flex') zatvoriProbaj();
        });