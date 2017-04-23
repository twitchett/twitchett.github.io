# Hello

This is Jekyll site built on top of the [jekyll-uno](https://github.com/joshgerdes/jekyll-uno) theme, with a few static pages and a React  image gallery. The app pulls content from my Instagram and uses the excellent [react-images](https://github.com/jossmac/react-images) to view the images.

There's a two stage build process: webpack transpiles and bundles the Javascript under `/react` and puts the bundle in `/src/js`, then Jekyll builds everything under `/src` and dumps the static site in `/build`. "Deploying" is a simple matter of pushing the contents of `/build` to the master branch.

It's kind of experimental, a playground to test out ideas and learn things.
