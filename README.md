# Cassandra Krawczak-Brodie — cybersecurity portfolio

A complete, dependency-free HTML/CSS/JavaScript website prepared for **cassandrak-cyber.github.io**. Open `index.html` to view it locally. No package installation or build step is required.

## Publish with GitHub Pages

1. Sign in to GitHub as `cassandrak-cyber`.
2. Create a public repository named **cassandrak-cyber.github.io**, or open the existing repository. Back up existing website files before replacing them.
3. Upload the **contents** of this folder to the repository's `main` branch. `index.html` must be at the repository root, alongside `assets/` and `projects/`, not inside another folder. Include the hidden `.nojekyll` file; if your upload method skips it, create an empty `.nojekyll` file in GitHub.
4. In **Settings → Pages**, select **Deploy from a branch**, then **main** and **/ (root)**. Save.
5. Check the Pages deployment in the Actions tab. When it succeeds, visit **https://cassandrak-cyber.github.io/**. GitHub notes that publishing changes can take up to 10 minutes.

Official instructions: [Create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

This package is ready to upload; it has not been pushed to GitHub or published by the builder.

## Files

```text
index.html                     Portfolio home and all seven sections
.nojekyll                      Serve static files without Jekyll processing
assets/css/style.css           Responsive design and reduced-motion rules
assets/js/main.js              Background motion controls (optional enhancement)
assets/images/forest.webp      Original forest artwork, about 264 KiB
assets/favicon.svg             CKB monogram
assets/evidence/                Add sanitized screenshots here
projects/goanywhere.html
projects/sentinel.html
projects/network.html
projects/web-security.html
projects/incident-response.html
CONTENT-CHECKLIST.md            Personalization and evidence checklist
ASSET-NOTES.md                  Forest artwork provenance
```

## Update your information

Edit text directly in `index.html`. Case studies are standalone HTML files in `projects/`, so they work with JavaScript disabled. Each includes Objective, Environment, Tools, MITRE ATT&CK, Detection / Analysis, Evidence / Screenshots, and Lessons Learned.

Project descriptions are clearly labeled documentation outlines. No lab execution, measurements, successful exploits, detection results, or MITRE technique IDs have been fabricated. Replace outlines with your verified work as it becomes available. Repository-specific URLs were not supplied; the GitHub buttons link to your supplied repository listing.

Dates, exact T-Mobile title/duties, expected graduation date, and a resume were not provided. These details are intentionally omitted. All four certifications are **planned**, not earned; change a credential to “In progress” only if you are actively preparing, or to “Earned” only after completion.

### Add your resume PDF

1. Place it at `assets/Cassandra-Krawczak-Brodie-Resume.pdf`.
2. In the resume section of `index.html`, replace the “coming soon” paragraph with a short accurate summary.
3. Replace its LinkedIn button with:

```html
<a class="button" href="assets/Cassandra-Krawczak-Brodie-Resume.pdf" download>Download Resume ↓</a>
```

The hero and navigation Resume links already lead to this section. Until a PDF exists, the section offers LinkedIn and does not include a broken download.

### Add project evidence

Put sanitized screenshots in `assets/evidence/`. In the relevant case page, replace the evidence placeholder with an image and caption, for example:

```html
<figure>
  <img src="../assets/evidence/sentinel-query.webp"
       alt="Describe the actual query result and its relevance"
       width="1200" height="750" loading="lazy"
       style="max-width:100%;height:auto">
  <figcaption>Explain the observation, source, date, and limitation.</figcaption>
</figure>
```

Add an exact repository URL only once you have confirmed it. The Contact section uses LinkedIn; no email address or nonfunctional contact form has been invented.

## Accessibility and performance

- Responsive layouts; system fonts; semantic headings; keyboard focus; skip link.
- Eight decorative CSS-transform code strands (five shown on small screens), no continuous JavaScript rendering loop.
- Pause/resume control in the footer, remembered locally when storage is available.
- System reduced-motion preference removes animated code; hidden tabs pause it.
- Without JavaScript, all content, navigation, and case pages work with the static forest background.
- Without the image, a dark green background retains text readability.
- No external fonts, analytics, libraries, or remote image requests.

Optional local HTTP preview: run `python3 -m http.server 8000` from this folder and open `http://localhost:8000`. Opening `index.html` directly also works.
