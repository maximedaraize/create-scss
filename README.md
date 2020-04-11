# CREATE SCSS

![npm version](https://img.shields.io/npm/v/create-scss)
![npm license](https://img.shields.io/npm/l/create-scss?color=%23dd2200)
![npm downloads](https://img.shields.io/npm/dw/create-scss)

### A quick and easy way to add a scss directory structure to your projet :zap:

A starter template with scss directory structure, dependencies, script for developement and production. A quick and easy way to create and organise your code.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Scripts](#scripts)
4. [Version](#version)

## Structure

```bash
     scss
        │
        ├── abstracts
        │   ├── functions.scss
        │   ├── helpers.scss
        │   ├── mixins.scss
        │   └── variables.scss
        │
        ├── base
        │   ├── global.scss
        │   ├── reset.scss
        │   ├── shame.scss
        │   └── typography.scss
        │
        ├── components
        │   ├── breadcrumb.scss
        │   ├── buttons.scss
        │   ├── forms.scss
        │   ├── icons.scss
        │   ├── menu.scss
        │   └── progressbar.scss
        │
        ├── layout
        │   ├── footer.scss
        │   ├── grid.scss
        │   ├── header.scss
        │   ├── navigation.scss
        │   └── sidebar.scss
        │
        ├── pages
        │   └── home.scss
        │
        ├── themes
        │   └── theme.scss
        │
        ├── vendor
        │
        └── main.scss

```

## Installation

```bash
npm i create-scss
```

#### Dependencies installed with this package

- [node-sass](https://www.npmjs.com/package/node-sass)
- [postcss-cli](https://www.npmjs.com/package/postcss-cli)
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [npm-run-all](https://www.npmjs.com/package/npm-run-all)
- [fs-extra](https://www.npmjs.com/package/fs-extra)

## Usage

After the installation you can use any tool to compile your sass into css, but if you want to make the best out of this pacakge, use the scripts below.

### Steps

1. You need a package.json file a the root of your project. To do so, just enter the next command into your terminal :

```bash
npm init
```

2. Answer the questions in the command line questionnaire.

3. And Voilà :tada:

You should now have a package.json that look like this:

```bash
{
  "name": "name_of_your_project",
  "version": "1.0.0",
  "description": "description of your project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "your name",
  "license": "ISC"
}

```

4. Replace the **scripts** section by this :balloon: :

```bash
"dependencies": {
    "autoprefixer": "^9.7.4",
    "fs-extra": "^9.0.0",
    "node-sass": "^4.13.0",
    "npm-run-all": "^4.1.5",
    "postcss-cli": "^7.1.0"
  },
  "scripts": {
    "watch": "node-sass scss/main.scss css/style.css --watch",
    "compile": "node-sass scss/main.scss css/style.comp.css",
    "prefix": "postcss css/style.comp.css --use autoprefixer -b 'last 4 versions' -o css/style.prefix.css",
    "compress": "node-sass css/style.prefix.css css/style.mini.css --output-style compressed",
    "build": "npm-run-all compile prefix compress",
  },
```

## Scripts

##### To compile your scss into css run everytime you save run the command

```bash
//output style.css
npm run watch
```

##### To compile your scss into css run the command

```bash
//output style.comp.css
npm run compile
```

##### To make your css ready for production (it will compile, prefix and compress your scss).

```bash
//output style.mini.css
npm run build
```

## Version

#### Version 1.2.2

- Change npm scripts inside package.json
- Remove (name ) dependency

#### Version 1.2.1

- Fix important typo in index.js that make scripts unusable

#### Version 1.2.0

- Copy scss directory at root level
- Add fs-extra dependency

#### Version 1.1.5

- Adjust REAME.md
- Fix typos in package.json

#### Version 1.1.4

- Simplify documentation
- Add mixins for breakpoints

usage example :

```bash
//.article will have a width of 50% when the browser window is 768px or bigger

.article {
  @include for(small) {
    width: 50%;
  }
}
```

#### Version 1.1.3

- Dependencies are now installed at the same time as this package
- Fix typo in package.json

#### Version 1.1.2

- Add 4 mixins in abstracts/\_mixins.scss file
- Format LICENSE

#### Vesion 1.1.1

Fix typos in package.json and improve documentation in README.md

#### Version 1.1.0

In this version, Devdependencies are add to package.json. Scripts are define in package.json to compile
scss into css, add vendor prefixes and to compress css file.

## Author

#### Maxime Daraize

[Github](https://github.com/maximedaraize/)
[Codepen](https://codepen.io/maximedaraize)

#### If you like this project, give it a :star:
