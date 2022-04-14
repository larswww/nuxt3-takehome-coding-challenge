# Project Description

I wanted to create a faster version of tvmaze.com. I also wanted to take the 
opportunity to play with the nuxt3 beta and try deploying the app directly on cloudflares edge network/workers.

Apart from the assignment requirements, my idea was to create an app where you see upcoming TV shows for specific countries/languages.
This is UX I'm personally interested in, which made building the app more fun :). Given the limitations of TVMaze API, it's not a bad use-case imho!

# Live App

[Link to live app, try it out!](https://nuxt-v-maze.devmc.workers.dev/) pretty fast ey? :) It has a near-perfect lighthouse score, and that 
should be the case worldwide.

### Dependencies

* [TailwindCss](https://tailwindcss.com/) to quickly build prototype UI and still be able to fully customize later, Tailwind can't be beat! [tailwindui](https://tailwindui.com/) has great examples and starting-points.
* [HeadlessUi](https://headlessui.dev/) high quality and fully customizable standard components
* [jest](https://jestjs.io/) was a bad choice due to issues in the nuxt3 beta, [vitest](https://vitest.dev/guide/) may be a better choice for nuxt3 but i discovered that too late and didn't have time to learn another new thing for this.
* [cypress](https://cypress.io) due to the jest issues, may be a better way to test this type of app anyway, so I added e2e tests for critical paths ;)
* [nuxt3](https://v3.nuxtjs.org/) is still very beta and should be avoided, but promising! Using SSR otherwise makes sense for this type of app (public facing, mobile-first, SEO)
* [datefns](https://date-fns.org/) very solid tree-shakeable date utility library

## Run Locally
Project is built using node 16 LTS and yarn
`yarn install` & `yarn dev`

## Tests
`yarn run test:unit` and/or `yarn run test:e2e`

# Deployment
To deploy the project you need to have [CloudFlare Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/install-update/) 
installed and activated with a CloudFlare account. Also FYI [nuxt cloudflare workers deployment guide](https://v3.nuxtjs.org/guide/deployment/cloudflare).

With those in place, simply update the accountId in wrangler.toml and first build with NITRO_PRESET env variable set to cloudlfare,
```bash
NITRO_PRESET=cloudflare yarn build
```
then use the cloudflare wrangler CLI's publish command.
```bash
wrangler publish
```
You can also try it in a worker locally with
```bash
wrangler dev
```

I think I would prefer Lambda@edge since it connects with the rest of aws, but overall this is a great way to do public SSR apps.

# Future Feature Ideas
Nuxt/Tailwind could easily support some great features for this type of app and UX;
- [ ] Fix the design and refactor into smaller presentational components
- [ ] Escape the html returned from the api without regex
- [ ] There's a global error handler 
- [ ] Add prettier and the plugin for sorting tailwind classes
- [ ] Add all the same content for show pages as tvmaze.com for a real better comparison (I still win 😁)
- [ ] Add meta/OpenGraph to all pages for SEO/share
- [ ] WebShare browser API implementation on show pages
- [ ] Android installable PWA / iOS add to homescreen
