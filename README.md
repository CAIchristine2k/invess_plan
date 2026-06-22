# ODY — Investor Microsite

Premium investor data-room style microsite for **ODY** (operating system for local commerce).

Static, dependency-free site (HTML + CSS + vanilla JS with hand-built SVG charts).

## Languages
French (default), English, 中文 — switchable from the header (also via `?lang=fr|en|zh`).

## Structure
- `index.html` — all sections
- `css/styles.css` — design system
- `js/i18n.js` — FR/EN/ZH translations + language engine
- `js/charts.js` — SVG charts (cap table, use-of-funds donut, ecosystem, roadmap, orbit, pipeline)
- `js/app.js` — interactions, scroll reveal, tabs
- `assets/logoo.png` — ODY logo

## Run locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```
