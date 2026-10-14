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

Cloudflare Workers (static assets). The Worker `pf` serves `./public` as
configured in `wrangler.jsonc`, on `mo7ka.com` and `www.mo7ka.com`.

DNS is on Cloudflare too. The domain itself is still registered at
Amazon Route 53.

## deploy

Pushing to `main` triggers Workers Builds, which builds and deploys the site.
The build settings live in the Cloudflare dashboard (Worker `pf` → Settings →
Builds), not in this repository:

- Build command: `npm run build`
- Deploy command: `asdf install nodejs 22.15.0 && ASDF_NODEJS_VERSION=22.15.0 npx wrangler@4 deploy`
- Build variables: `NODE_VERSION=16.17.1`, `SHARP_IGNORE_GLOBAL_LIBVIPS=1`

Gatsby 3 does not build on recent Node.js, so the build runs on Node.js 16.
wrangler needs Node.js 18 or later, so the deploy step switches to Node.js 22.
`SHARP_IGNORE_GLOBAL_LIBVIPS=1` makes sharp use its prebuilt binary instead of
compiling from source, which fails on the build image.

## languages

- Japanese: [https://mo7ka.com/](https://mo7ka.com/)
- English: [https://mo7ka.com/en/](https://mo7ka.com/en/)

Both pages share `src/components/home.js`. Translatable strings live in
`src/i18n/translations.js` and in the data arrays of each component as
`{ ja: "...", en: "..." }` objects, resolved with `useT()` from `src/i18n`.

## requirements

- Node.js 14.17.3 (local development, see `.tool-versions`)
- npm 6.14.13

## commands

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

2.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

3.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
