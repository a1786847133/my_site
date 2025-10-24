# Lab 2 Website — Starter

This project meets the rubric items out of the box. Edit content to match your Lab 1 wiki.

## Repo structure
```
lab2_site/
├─ index.html
├─ about.html
├─ styles.css
├─ script.js
└─ assets/
   ├─ images/
     ├─ MK03214_University_of_Washington_Suzzallo_Library.jpg 
```

## Customize colors
Edit CSS variables at the top of `styles.css`:
- `--bg` background, `--text` text
- `--accent` hover color
- `--active` active nav color

## Deploy to GitHub Pages
1. Create a new repo on GitHub, e.g., `lab2-website`.
2. Upload **all files** from `lab2_site/` to the repo root (or commit via Git).
3. In the repo: **Settings → Pages**.
4. **Source**: set to `Deploy from a branch`. Choose branch `main` and folder `/ (root)`.
5. Save. Your site will publish to:
   `https://<your-username>.github.io/<your-repository-name>/index.html`

## Tips
- Keep media small (e.g., video <= ~5–10 MB). Use `poster` for faster first paint.
- Test on mobile and desktop; resize to check the navbar.
- Update text and sections to reflect your Lab 1 content.
