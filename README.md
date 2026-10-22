<p align="center">
  <a href="https://mo7ka.com">
    <img alt="ogp" src="https://mo7ka.com/ogp.png" width="600" />
  </a>
</p>
<h1 align="center">
  monaka's portfolio site
</h1>

<div  align="center">
  <a href="https://mo7ka.com">https://mo7ka.com</a>
</div>

## hosting

Cloudflare Workers (static assets). The Worker `pf` serves `./dist` as
configured in `wrangler.jsonc`, on `mo7ka.com` and `www.mo7ka.com`.

DNS is on Cloudflare too. The domain itself is still registered at
Amazon Route 53.

## deploy

Pushing to `main` triggers Workers Builds, which builds and deploys the site.
The build settings live in the Cloudflare dashboard (Worker `pf` → Settings →
Builds), not in this repository:

- Build command: `npm run build`
- Deploy command: `npx wrangler@4 deploy`
- Build variables: `NODE_VERSION=24.18.0`

## languages

- Japanese: [https://mo7ka.com/](https://mo7ka.com/)
- English: [https://mo7ka.com/en/](https://mo7ka.com/en/)

Both pages share `src/components/Home.astro`. Translatable strings live in
`src/i18n/translations.js` and in the data arrays of each component as
`{ ja: "...", en: "..." }` objects, resolved with `localize()` from `src/i18n`.

## dependencies

Dependabot opens a grouped PR every Monday for minor and patch updates, and
grouped PRs for security fixes (`.github/dependabot.yml`). The Build workflow
builds every PR and fails on high or critical vulnerabilities in production
dependencies.

## commands

Requires Node.js 24 (see `.tool-versions`).

```shell
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves dist/
```
