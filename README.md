# Bodheesh VC · Portfolio

A static personal site: HTML, CSS and a small script. No build step and no dependencies.

## Files

- `index.html`: all content, plus metadata (Open Graph, Twitter cards, JSON-LD Person schema)
- `styles.css`: the design system (palette, type, layout, motion, print and reduced-motion rules)
- `script.js`: reveal-on-scroll, reading progress, counting numbers, active-section nav
- `Certificates/`: PDF certificates for completed courses, linked from the Certificates section of `index.html`. Add a new PDF here and a matching link there.
- `Images/Bodheesh-800.jpg`, `Images/Bodheesh-480.jpg`: web-sized 4:5 crops of your photo. Your original `Images/Bodheesh.jpeg` is kept unchanged.
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `site.webmanifest`: icons
- `og-image.png`: 1200 x 630 social preview
- `404.html`, `robots.txt`, `sitemap.xml`

## View locally

Open `index.html` in a browser.

## Motion

- The career rail draws itself on load, and the stations fade in.
- Sections and items rise in as they scroll into view.
- Key numbers count up once when visible.
- A thin reading-progress bar runs along the top edge.
- Links draw an underline on hover. Project titles draw an underline too.
- The hero name rises letter by letter. Section rules draw in from the left.
- A spider hangs on a thread in the hero. It drops, hangs, then shoots its web back up and rests, on a 4.5-second cycle.

All motion is switched off when the visitor's system asks for reduced motion, and the spider is hidden then. Without JavaScript the full content is still visible.

## Standards built in

- `lang="en"`, one `h1`, sections with `h2` headings, `time` elements for dates
- Skip link, labelled navigation, descriptive photo alt text, visible focus outlines
- Text contrast above 4.5:1, and a keyboard-friendly layout
- Responsive from phone to desktop, with no horizontal overflow
- Canonical URL, meta description, Open Graph, sitemap, robots.txt, JSON-LD

## Before publishing

1. Confirm the final address. The canonical URL, sitemap and social tags use `https://bodheesh.github.io/portfolio/`.
2. Check the items below.
3. Publish only with your permission.

## Items to confirm

- **Team size**: the site says you lead more than 15 engineers across several teams, from your message. The resume says 6 support plus 5 development members, which is 11. Confirm the number and the team names if you want them shown.
- **Title**: the site uses the confirmed title "Sr. Engineer - Automation & Application Development", with the lead role described in the text.
- **YouTube subscribers**: not shown. The channel page showed 1.59M, which conflicts with your figure.
- **npm downloads**: "more than 3,000" from your GitHub README. Your resume says "1000+".
- **Package count**: the GitHub table lists eight packages, but its achievements say nine.
- **Downtime reduction of 20%**: on the resume only, so not on the site.
- **Draft wording**: the hero line, the About account, the "Leading" principles and the "Beyond" paragraphs are my wording from your profile. Check them in your voice.
- **Phone number**: left off.
- **Employer names**: confirm Ahana is happy with its projects being named publicly.
- **Domain**: confirm the final address.

## Known limitations

- Checked in headless Chrome at 1440 px and 390 px widths. Google Fonts did not load in the build sandbox, so the checks used fallback fonts. Look at the page once in a normal browser.
- Not deployed.
