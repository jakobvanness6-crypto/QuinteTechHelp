# Quinte Tech Help

Everything behind [quintetechhelp.ca](https://quintetechhelp.ca): the website, the ops kit and the marketing kit.

```
site/        The website. This folder is what gets deployed.
ops/         Customer message templates, intake checklist, draft service terms.
marketing/   Facebook posts, Google Business Profile copy, printable flyer.
```

## Deploying the site

The site is plain HTML, CSS and one small JS file. There is no build step.

**Option A: drag and drop (how the site was first deployed).**
Cloudflare dashboard > Workers & Pages > your project > create a new deployment > upload the contents of `site/`.

**Option B: auto-deploy from this repo (recommended, one-time setup).**
Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git > pick this repo.
Build command: leave empty. Build output directory: `site`.
Then move the `quintetechhelp.ca` custom domain onto the new project.
After that, every push to `main` goes live automatically, so edit on a branch if you want to preview first.

## What's in the site

| File | Purpose |
|---|---|
| `index.html` | Homepage: services, how it works, check-up app, service area, FAQ, request form |
| `faq.html` | Full FAQ: turnaround, backups, drop-off, payment, warranty, what to bring |
| `privacy.html` | Plain-English privacy page, linked from the form and footer |
| `thanks.html` | Where the form sends people after a successful request |
| `laptop-upgrades.html`, `virus-removal.html`, `ps5-storage-upgrade.html`, `new-device-setup.html` | Service pages, one per thing people search for |
| `404.html` | Not-found page |
| `styles.css`, `site.js` | Shared styles; form handling (the site works without JS) |
| `og-image.png` | The preview card shown when the link is shared on Facebook, Messenger, etc. |
| `favicon.svg`, `apple-touch-icon.png` | Browser tab and home-screen icons |
| `_headers` | Basic security headers for Cloudflare |
| `robots.txt`, `sitemap.xml` | Search engine housekeeping |

The request form posts to Web3Forms, which emails hello@quintetechhelp.ca. The access key in the
form is a public key by design.

## After each deploy
1. Send a test request through the live form and confirm it reaches the inbox and lands on the thank-you page.
2. Paste the site URL into Facebook's Sharing Debugger and click "Scrape Again" so Facebook picks up the preview image.
3. If you added pages, add them to `sitemap.xml`.

## To do
- [ ] Review wording that makes promises on your behalf: the FAQ answers and `privacy.html` (especially "The data on your device")
- [ ] Decide the open items in `ops/service-terms-DRAFT.md`
- [ ] Link the Help Me Help You app from `index.html#checkup` once it's in the Microsoft Store
- [ ] Swap the placeholder Google review link (a Google search for the business) for your real review link from Google Business Profile > Ask for reviews. It's in the "Book a repair" strip on every page and on `thanks.html`: find `google.com/search?q=Quinte+Tech+Help+Belleville` and replace it everywhere
- [ ] Confirm the payment, warranty and turnaround answers in `faq.html` match what you actually offer (they follow the draft in `ops/service-terms-DRAFT.md`)
- [ ] Add Facebook page link to the footer once it exists
- [ ] Add a phone number to the site and schema if you want calls
