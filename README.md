# Bodheesh VC · Portfolio

A static personal site: plain HTML, CSS and a small amount of JavaScript. No build step and no dependencies.

## Files

- `index.html`: all content and structure, including JSON-LD and Open Graph metadata
- `styles.css`: the design system (palette, type scale, layout, motion, responsive rules)
- `script.js`: footer year and active-section nav highlighting (the site works without it)
- `404.html`: custom not-found page
- `favicon.svg`, `og-image.png`: icon and social preview (1200 x 630)
- `robots.txt`, `sitemap.xml`: crawler files

## View locally

Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.

## Before publishing

1. Replace the canonical URL `https://bodheesh.github.io/portfolio/` in `index.html`, `robots.txt`, `sitemap.xml` and the JSON-LD block if the final address differs.
2. Confirm every item in the list below.
3. Publish only with your permission (for example, GitHub Pages from a new repo).

## Design notes

- Palette: graphite on a grey engineering-drawing paper, with one verdigris signal colour. No gradients, no glassmorphism.
- Type: Barlow Condensed for display and labels, Literata for reading text (both from Google Fonts).
- Signature element: the career rail in the hero, four stations for the career path. It respects `prefers-reduced-motion`.
- The Bodhi Tech Talks section sits on a dark panel so it reads as a different part of the work from the corporate timeline.

## Items to confirm

- **YouTube subscribers**: the channel page showed "1.59M Followers", a Malayalam tech and DIY description, and 922 videos. Your profile says 30K+. The site shows no subscriber count. Please confirm the correct channel and count.
- **Ahana role details**: your resume (Software Engineer, MERN) and LinkedIn (Sr. Engineer from Jul 2026) differ. The site uses LinkedIn. The resume also says "6-member support team and 5-member development team"; LinkedIn says "3-4 concurrent projects". The site uses LinkedIn.
- **Downtime reduction of 20%**: on the resume only, so not on the site. Confirm and it can be added.
- **npm downloads**: the site says "more than 3,000" (from your GitHub README). Your resume says "1000+". The npm profile page could not be fetched.
- **Package count**: the GitHub README table lists eight packages, but its achievements say nine. The site lists the eight from the table. If there is a ninth, send its name.
- **Location**: the site says Bengaluru. Some older pages say Thrissur or Kochi. The site shows Thrissur only for Bodhi Learning.
- **Phone number**: left off the site on purpose.
- **Draft copy**: the hero reflection, the About account, the four Leadership principles, the "Bodhi Tech Talks" approach line and the "Beyond" paragraphs are my wording from your profile. Check them.
- **Missing material**: project screenshots or demo links, two or three YouTube video titles, and a problem statement per project in your words.
- **Employer names**: confirm Ahana is happy with its projects being named publicly.
- **Domain**: confirm the final address.

## Known limitations

- Checked in headless Chrome at 1440 px and 390 px widths, with no console errors and no horizontal overflow. Google Fonts did not load in the build sandbox, so checks used fallback fonts. Look at the page once in a normal browser.
- Not deployed.
