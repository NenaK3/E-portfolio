# Nena Kozić | Digitalni Portfolio

Dvodelni digitalni portfolio sajt koji predstavlja dva profesionalna profila jedne osobe — **IT inženjering** i **Edukaciju / Prosvetu**. Korisnik na početnoj stranici bira koji profil želi da istraži, nakon čega sajt prilagođava navigaciju, sadržaj i temu (boju) tom profilu.

🔗 **Live demo:** [e-portfolio-nena-kozic.vercel.app](https://e-portfolio-nena-kozic.vercel.app)

---

## 📋 O projektu

Portfolio je zamišljen kao jedinstveno rešenje za dve karijerne putanje:

- **IT Inženjering** — frontend razvoj, baze podataka, softverska arhitektura
- **Edukacija / Prosveta** — metodika nastave računarstva, pedagoški rad

Umesto dva odvojena sajta, korisnik bira profil na početnoj stranici, a zatim se kroz sve ostale stranice (Profil, Iskustvo, Edukacija, Projekti, Blog) prikazuje sadržaj i vizuelni identitet prilagođen izabranom profilu (pastelno plava tema za IT, pastelno roze za Edukaciju).

## ✨ Funkcionalnosti

- 🌗 **Dark / Light mod** — čuva se u `localStorage`, automatski prepoznaje sistemsku temu pri prvoj poseti
- 🌍 **Dvojezičnost (SRB / ENG)** — kompletan sadržaj sajta dostupan na oba jezika
- 🔀 **Dva profila u jednom sajtu** — IT i Edukacija dele istu strukturu stranica, ali sa različitim sadržajem i bojama
- 📱 **Potpuno responzivan dizajn** — prilagođen mobilnim, tablet i desktop rezolucijama
- 🎬 **Interaktivni Python Turtle kod** (`kod.html`) — klikom na označene linije koda otvara se video objašnjenje
- 📝 **Blog sa pretragom** — pretraga beleški po naslovu/sadržaju uživo, bez učitavanja nove stranice
- 📄 **CV i sertifikati u modalu** — PDF dokumenti se prikazuju direktno na sajtu kroz iframe, bez napuštanja stranice
- ⬆️ **Scroll-to-top dugme** — na dužim stranicama (Projekti, Blog, Edukacija)
- 🎞️ **Scroll-triggered fade-in animacije** — animacije se aktiviraju kroz `IntersectionObserver` prilikom skrolovanja
- 🗂️ **Dropdown navigacija** — Edukacija sekcija u navbaru ima podmeni (Formalno / Neformalno obrazovanje)
- ♿ **Pristupačnost (a11y)** — skip-link, focus-trap u modalima, `focus-visible` stilovi, podrška za `prefers-reduced-motion`, ARIA atributi
- 🖨️ **Print stilovi** — sajt je optimizovan i za štampanje/eksport u PDF
- 🔍 **SEO optimizacija** — meta tagovi, Open Graph, Twitter Card, JSON-LD (Person i BreadcrumbList schema), `sitemap.xml`, `robots.txt`
- 📊 **Analitika** — Vercel Analytics i Vercel Insights integracija (vidljivo samo vlasniku sajta)
- 🧩 **PWA podrška** — `manifest.json` za instalaciju sajta kao aplikacije
- 🔒 **Sigurnosni HTTP headeri** — konfigurisani kroz `vercel.json` (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- 🚫 **Prilagođena 404 stranica**

## 🛠️ Tehnologije

Sajt je izgrađen bez frontend frameworka — čist, ručno pisan kod radi pune kontrole nad performansama i pristupačnošću.

| Kategorija | Tehnologije                                                              |
| Frontend   | HTML5, CSS3 (custom svojstva / CSS varijable), Vanilla JavaScript (ES6+) |
| Ikonice    | Font Awesome 6                                                           |
| Fontovi    | Google Fonts (Parisienne)                                                |
| Hosting    | Vercel                                                                   |
| Analitika  | Vercel Analytics, Vercel Insights                                        |
| Ostalo     | JSON-LD (structured data), Web App Manifest (PWA)                        |

## 📁 Struktura projekta

```
├── index.html              # Početna — izbor profila (IT / Edukacija)
├── portfolio.html           # Profil — O meni, Veštine, Ambicije, Kontakt
├── iskustvo.html             # Radno iskustvo i stručne prakse
├── edukacija.html            # Formalno i neformalno obrazovanje
├── projekti.html             # Pregled projekata
├── kod.html                  # Interaktivni Python Turtle kod (edukativni sadržaj)
├── blog.html                  # Beleške / blog sa pretragom
├── 404.html                    # Stranica za nepostojeće rute
├── manifest.json               # PWA manifest
├── robots.txt                   # Uputstva za pretraživače
├── sitemap.xml                   # Mapa sajta za SEO
├── vercel.json                    # Sigurnosni HTTP headeri (deploy konfiguracija)
│
├── script/
│   ├── common.js              # Deljene funkcije (tema, jezik, footer, fade-in, modal a11y, kopiranje teksta)
│   ├── index.js                 # Logika početne stranice
│   ├── portfolio.js              # Logika stranice Profil
│   ├── iskustvo.js                # Logika stranice Iskustvo
│   ├── edukacija.js                # Logika stranice Edukacija
│   ├── projekti.js                  # Logika stranice Projekti
│   ├── kod.js                        # Logika interaktivnog Turtle koda
│   ├── blog.js                        # Logika bloga i pretrage
│   ├── 404.js                          # Logika 404 stranice
│   └── analytics.js                     # Vercel Analytics inicijalizacija
│
├── style/
│   ├── index.css,
│   ├── portfolio.css,
│   ├──iskustvo.css,
│   ├── edukacija.css, 
│   ├── projekti.css, 
│   ├── kod.css, 
│   ├── blog.css, 
│   ├── 404.css
│   ├── fa-fix.css                # Lokalno učitavanje Font Awesome fontova (performanse)
│   └── print.css                  # Stilovi za štampu / PDF eksport
│
└── assets/
    ├── images/                # Slike, favikoni, OG-slike
    ├── cv/                     # CV dokument (PDF)
    └── sertifikati/            # Sertifikati (PDF)
    └── priprema/               # Pripreme za čas (PDF)
```

## 🎨 Arhitektura koda

- **`common.js`** centralizuje logiku koja se ponavlja na svim stranicama (dark/light mod, footer datum, jezičko dugme, edukacija-dropdown, fade-in animacije, focus-trap za modale, kopiranje teksta u klipbord) — svaka stranica poziva ove funkcije umesto da ih iznova piše
- Svaka stranica ima **svoj JS fajl** sa sopstvenim rečnikom prevoda (SRB/ENG) i sadržajem, koji se renderuje dinamički u DOM
- Tema (IT / Edukacija) se čuva kroz `sessionStorage` (`portfolioMod`) i utiče na boje kroz CSS klase (`it-theme` / `edukacija-theme`)
- Dark/light mod i jezik se čuvaju trajno kroz `localStorage`, tako da se biraju samo jednom po uređaju

## 🚀 Pokretanje lokalno

Pošto je sajt napisan u čistom HTML/CSS/JS bez build koraka, dovoljno je:

```bash
# Kloniraj repozitorijum
git clone https://github.com/NenaK3/[naziv-repozitorijuma].git

# Uđi u folder
cd [naziv-repozitorijuma]

# Pokreni lokalni server (npr. Live Server ekstenzija u VS Code-u,
# ili Python-ov ugrađeni server)
python -m http.server 5500
```

Zatim otvori `http://localhost:5500` u browseru.

## 📦 Deploy

Sajt je hostovan na **Vercel**-u, sa automatskim deploy-om pri svakom push-u na `main` granu. Sigurnosni headeri (CSP, X-Frame-Options i ostali) konfigurisani su kroz `vercel.json`.

## 📄 Licenca

© Nena Kozić. Sadržaj i dizajn ovog portfolija su lično autorsko delo — kod je dostupan za pregled u edukativne svrhe, ali molim da se sadržaj (tekstovi, slike, sertifikati) ne kopira bez dozvole.

## 📬 Kontakt

- **Email:** nena.kozic3@gmail.com
- **LinkedIn:** [Nena Kozić](https://www.linkedin.com/in/nena-kozi%C4%87-9665552b7/)
- **GitHub:** [NenaK3](https://github.com/NenaK3)
- **Portfolio:** [e-portfolio-nena-kozic.vercel.app](https://e-portfolio-nena-kozic.vercel.app)