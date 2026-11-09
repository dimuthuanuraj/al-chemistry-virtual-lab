# A/L Chemistry Virtual Lab

Free, interactive virtual laboratory for the **G.C.E. Advanced Level Chemistry practicals** of the Sri Lankan
**NIE Practical Handbook (2018)**, in **Sinhala, English and Tamil**.

Students can do each practical on screen. Each one has:

- a safety briefing
- a guided demo
- realistic apparatus
- named colour changes they can replay slowly
- kind feedback when a step is done in the wrong order
- exam-style questions

It works on phones, tablets, computers and school projectors. There are no accounts and nothing to install.

## Practicals included (22)

| # | Practical | Unit |
|---|---|---|
| 1 | Properties of cathode rays | 01 Atomic structure |
| 2 | Shapes of molecules and ions (VSEPR) | 02 Structure and bonding |
| 3 | Handling glassware and the four-beam balance | 03 Chemical calculations |
| 4 | Preparation of standard solutions | 03 Chemical calculations |
| 5 | Molar volume of a gas (oxygen from KMnO₄) | 04 Gaseous state |
| 6 | Relative atomic mass of magnesium from H₂ volume | 04 Gaseous state |
| 7 | Enthalpy of neutralisation | 05 Energetics |
| 8 | Validation of Hess's law | 05 Energetics |
| 9 | s-block metals with air, water and acids | 06 s, p and d block |
| 10 | Flame tests (Li, Na, K, Ca, Sr, Ba) | 06 |
| 11 | Identification of anions | 06 |
| 12 | Nitrogen in air (Mg₃N₂ from burning Mg) | 06 |
| 13 | Identification of halides (Cl⁻, Br⁻, I⁻) | 06 |
| 14 | Standardising sodium thiosulphate with KIO₃ and KI | 06 |
| 15 | Ammonia gas and ammonium salts | 06 |
| 16 | Solubility of s-block salts | 06 |
| 17 | Thermal stability of s-block carbonates, hydrogencarbonates and nitrates | 06 |
| 18 | Colours of d-block ions in aqueous solution | 06 |
| 19 | Concentration of Fe²⁺ by acidified KMnO₄ titration | 06 |
| 20 | Standardising KMnO₄ with acidified oxalate | 06 |
| Extra | Standardising KMnO₄ with Fe²⁺ | 03 |
| Extra | Complex ions of copper(II) | 06 |

## Project structure

```
index.html              Home page (trilingual): hero, how it works, practical cards, safety, teachers
assets/site.css         Home page styles (light + dark themes)
assets/site.js          Language switch, unit filter, search, saved best scores
assets/practicals.js    Generated list of practicals (titles and aims in en / si / ta)
assets/favicon.svg      Site icon
images/students/        Photos of Sri Lankan school students (illustrative, AI-generated with Canva)
images/thumbs/          Screenshots of each practical, used on the cards
practicals/*.html       The 22 practicals: each is one self-contained page (HTML + CSS + JS, images embedded)
src/*.html              The original single-file practicals that practicals/ is built from
tools/build_site.py     Rebuilds practicals/ and assets/practicals.js from src/
tools/meta.json         Titles and aims pulled from each practical
```

Every practical saves its state in `localStorage` only:

- `svl-lang`: the chosen language, shared by the home page and all practicals
- `svl-scores`: the best quiz score for each practical, shown as a badge on the home page cards
- `svl-student`: an optional `{name, cls}` record

## Run it locally

It is a static site, so any web server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

You can also open `index.html` directly from the folder.

## Rebuild after editing a practical

Edit the file in `src/`, then run:

```bash
python3 tools/build_site.py
```

## Publish with GitHub Pages

1. In the repository on GitHub, open Settings → Pages.
2. Under "Build and deployment", choose "Deploy from a branch".
3. Select the `main` branch and the `/ (root)` folder, then save.

The site will appear at `https://<user>.github.io/<repo>/`.

The `.nojekyll` file makes GitHub serve the files as they are.

## Notes

- Fonts load from Google Fonts. If they can't load, the pages fall back to system fonts.
- This is a practice and revision tool. It supports, but does not replace, real laboratory work under a teacher.
