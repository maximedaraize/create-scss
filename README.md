# # Create-scss

A starter template with scss directory structure, dependencies, script for developement and production. A quick and easy way to create and organise your code.

## Table of Contents

1. [Structure](#structure)
2. [Version](#version)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Scripts](#scripts)

## Structure

```bash
create-scss
    ├── LICENSE
    ├── README.md
    ├── package.json
    ├── .gitignore
    ├── .npmignore
    │
    └── scss
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

## Version

### Version 1.1.2

- Add 4 mixins in abstracts/\_mixins.scss file
- Format LICENSE

### Vesion 1.1.1

Fix typos in package.json and improve documentation in README.md

### Version 1.1.0

In this version, dependencies are add to package.json. Scripts are define in package.json to compile
scss into css, add vendor prefixes and to compress css file.

## Installation

You can either install it by cloning the repo inside your project

```bash
git clone https://github.com/maximedaraize/create-scss
```

or via NPM

```bash
npm i create-scss
```

Copy what is inside that package to the root of your project.

You should have at the root of your project:

- folder name **scss**
- .gitignore file
- .npmignore file
- package.json file
- README.md file
- LICENSE file

Install dependencies to compile your **scss** into **css** by running the next command in your terminal

```bash
npm install
```

### The dependencies inside the package.json are:

- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [cssnano](https://www.npmjs.com/package/cssnano)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [postcss-cli](https://www.npmjs.com/package/postcss-cli)

## Usage

The goal of this package is to help create a quick folder structure for your projetcs. Do not hesitate to change the structure by adding or removing files.

- All file should be imported in **main.scss**
- All partial file should strart with an underscore. (_\_name-of-partial.scss_)
- In main.scss you dont need the underscore & the file extension when importing a partial. See below

  ```scss
  @import "abstracts/variables";
  ```

- Compile scss will be found in a folder named **css** at the same level of **scss** folder

## Scripts

To compile your scss into css run the command

```bash
npm run compile
```

To compile your scss into css run everytime you save run the command

```bash
npm run watch
```

To add vendor prefixes to your compiled css run the command

```bash
npm run prefix
```

To compress your compiled css run the command

```bash
npm run compress
```
