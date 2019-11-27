# Electron Starter

## Minimal Electron starter pack !
Electron Starter uses GULP for developpment, Nunjucks for templating, UIKit on SCSS for design and traditional VueJS for interface.

## Installation
```
git clone https://github.com/de-sign/electron-starter my-project
cd my-project
npm i
gulp
```

## GULP
There are 3 scripts to run GULP in different environments :
```
npm run gulp-dev
npm run gulp-test
npm run gulp-prod
```

To configure the GULP modules, edit the file `gulp/config.js`.

## Nunjucks
Add your template to `src/pages/layouts/`.
All `file.html` will be parse with its data `file.json`.

## UIKit
Custom UIKit to create your theme :
    . `src/asset/scss/abstracts/` for variables and mixins
    . `src/asset/scss/base/` for font
    . `src/asset/scss/components/uikit` for UIKit components
    . `src/asset/scss/layouts` for template

## VueJs
Create components on `src/components` and edit style on `src/asset/scss/components/vue`.

## Add your page
_Look the index page for exemple_

When you want to add page :
    . create `page.html` on `src/pages/`
    . create `page.json` on `src/pages/data/`
    . create `page.scss` on `src/asset/scss/`
    . create `page.js` on `src/asset/js/`

## Good jobs !