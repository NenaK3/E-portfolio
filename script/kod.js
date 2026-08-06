'use strict';

        const mod = 'Edukacija';
        sessionStorage.setItem('portfolioMod', mod);
        document.body.classList.add(mod.toLowerCase() + '-theme');

        let jezik = localStorage.getItem('portfolioJezik') || 'SRB';
        let rezim = localStorage.getItem('portfolioRezim') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

        const recnik = {
            SRB: {
                navProfil: 'Profil', navIskustvo: 'Iskustvo', navEdukacija: 'Edukacija', navProjekti: 'Projekti', navBlog: 'Blog', navPromeni: 'Promeni portfolio',
                bcPocetna: 'Početna pedagoška strana', bcProjekti: 'Projekti', bcKod: 'Kod',
                naslovStrane: 'Interaktivni Python Turtle Kod',
                podnaslovStrane: 'Klikni na roze, podvučene linije koda kako bi pogledao video objašnjenje za njih!',
                btnPokreniKod: 'Pokreni kod',
                naslovRunModala: 'Simulacija crtanja',
                btnPonovoPokreni: 'Pokreni ponovo',
                napomenaRun: 'Napomena: ovo je pojednostavljen vizuelni prikaz koda, pa može doći do sitnih odstupanja u odnosu na izgled crteža kada se isti kod pokrene u Python Turtle okruženju na računaru.',
                footer: '©Copyright by Nena Kozić'
            },
            ENG: {
                navProfil: 'Profile', navIskustvo: 'Experience', navEdukacija: 'Education', navProjekti: 'Projects', navBlog: 'Blog', navPromeni: 'Switch Portfolio',
                bcPocetna: 'Home (Teaching)', bcProjekti: 'Projects', bcKod: 'Code',
                naslovStrane: 'Interactive Python Turtle Code',
                podnaslovStrane: 'Click on the pink, underlined lines of code to watch their video explanation!',
                btnPokreniKod: 'Run code',
                naslovRunModala: 'Drawing simulation',
                btnPonovoPokreni: 'Run again',
                napomenaRun: 'Note: this is a simplified visual representation of the code, so there may be small differences compared to how the drawing actually looks when the same code runs in a Python Turtle environment on a computer.',
                footer: '©Copyright by Nena Kozić'
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
            bcDalje: document.getElementById('bc-dalje'),
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
            napomenaRun: document.getElementById('run-napomena-tekst')
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
            el.navBlog.innerText = r.navBlog;
            el.navPromeni.innerHTML = `<i class="fa-solid fa-repeat"></i> ${r.navPromeni}`;

            el.bcPocetna.innerText = r.bcPocetna;
            el.bcTrenutna.innerText = r.bcProjekti;
            el.bcDalje.innerText = r.bcKod;

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
        Common.initScrollTopButton();