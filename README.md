# CREATE SCSS

![npm version](https://img.shields.io/npm/v/create-scss)
![npm license](https://img.shields.io/npm/l/create-scss?color=%2321bab3)
![npm downloads](https://img.shields.io/npm/dw/create-scss)

### A quick and easy way to add a scss directory structure to your projet :zap:

A starter template with scss directory structure, dependencies, scripts for developement and production.

## Table of Contents

1. [Structure](#structure)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Version](#version)
5. [Contribution and support](#contribution)

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

You should find a scss directory and a package.json at the root of your project. All depedencies you need to compile you scss are located on **node_modules** folder.

#### Dependencies installed with this package

- [node-sass](https://www.npmjs.com/package/node-sass)
- [postcss-cli](https://www.npmjs.com/package/postcss-cli)
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [npm-run-all](https://www.npmjs.com/package/npm-run-all)
- [fs-extra](https://www.npmjs.com/package/fs-extra)

## Usage

After the installation you can use any tool to compile your sass into css, but if you want to make the best out of this pacakge, use the scripts below.

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

### 2.1.0

- Add new partials in components directory. ( \_alert.scss, \_banner.scss, \_card.scss, \_modal.scss )
- Remove \_breadcrums.scss
- Rename \_progressbar.scss by \_progress.scss

## Contribution

If you want to contribute to this project go to the [create-scss repo](https://github.com/maximedaraize/create-scss/issues) and open an issue :v:

Show your support be giving a :star: on [Github](https://github.com/maximedaraize/create-scss)

## Author

#### Maxime Daraize

[Github](https://github.com/maximedaraize/)
[Codepen](https://codepen.io/maximedaraize)
