[![Build Status](https://travis-ci.org/twitchett/twitchett.github.io.svg?branch=source)](https://travis-ci.org/twitchett/twitchett.github.io)

# Hello

This is Jekyll site built on top of the [jekyll-uno](https://github.com/joshgerdes/jekyll-uno) theme, with a few static pages and a React image gallery. The app pulls content from my Instagram and uses the excellent [react-images](https://github.com/jossmac/react-images) to view the images.

There's a two stage build process: webpack transpiles and bundles the Javascript under `/react` and puts the bundle in `/src/js`, then Jekyll builds everything under `/src` and dumps the static site in `/build`. "Deploying" is a simple matter of pushing the contents of `/build` to the master branch.

It's kind of experimental, a playground to test out ideas and learn things.

## Local set up

`bundle install` to install the Ruby gems.

`npm install` followed by `npm start` to start the jekyll server. The site will be available at `localhost:4000`.

Updating the instagram stream is a manual process at the moment (until the site is migrated off GitHub Pages). `npm run scrape` will fetch the latest (note: requires PHP)


## Updating the live site

From the `source` branch, first build the production version using:

```
npm run build-prod
```

The site will be build to `.site`. Then run:

```
npm run deploy
```

to perform all the git-juggling and push to master.




