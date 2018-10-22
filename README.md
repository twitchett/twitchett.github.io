[![Build Status](https://travis-ci.org/twitchett/twitchett.github.io.svg?branch=source)](https://travis-ci.org/twitchett/twitchett.github.io)

# Hello

This is Jekyll site built on top of the [jekyll-uno](https://github.com/joshgerdes/jekyll-uno) theme, with a few static pages, a blog, and a React image gallery. The app pulls content from my Instagram and uses the excellent [react-images](https://github.com/jossmac/react-images) to view the images.

This is definitely not an example of how to build a maintainable site. The code is not pretty: it's experimental, and cobbled together using a number of langauges, frameworks, scripts, and several hacks.

## Build

There's a two stage build process: webpack transpiles and bundles the Javascript under `/react` and puts the bundle in `/src/js`, then Jekyll builds everything under `/src` and dumps the static site in `/build`. "Deploying" is a simple matter of pushing the contents of `/build` to the master branch.

## Local set up

`bundle install` to install the Ruby gems.

`npm install` followed by `npm start` to start the jekyll server. The site will be available at `localhost:4000`.


## Updating the Instagram gallery

This is a manual process at the moment (until the site is migrated off GitHub Pages) that can be triggered by running:

`npm run scrape`

This calls a PHP script that uses [instagram-php-scraper](https://github.com/postaddictme/instagram-php-scraper) to pull the data from instagram, and writes the necessary properties to a JSON file at `src/_data/instadump.json`. 


## Pushing changes to the live site

From the `source` branch, first build the production version using:

```
npm run build-prod
```

The site will be built to `.site`. Then run:

```
npm run deploy
```

to perform all the git-juggling and push to master.




