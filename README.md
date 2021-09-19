![create scss logo](https://res.cloudinary.com/mdaraize/image/upload/v1590864320/create-scss-logo_black.svg)

⚠️⚠️⚠️

**WARNING** create-scss is deprecated. There are no plans to add additional features. 

Projects that still use it should move to [create-scss-cli](https://github.com/maximedaraize/create-scss-cli/tree/main)

⚠️⚠️⚠️

</br>

![npm version](https://img.shields.io/npm/v/create-scss)
![npm license](https://img.shields.io/npm/l/create-scss?color=%2321bab3)
![npm downloads](https://img.shields.io/npm/dt/create-scss)

### A quick and easy way to add a scss directory structure to your projet :zap:

A starter template with scss directory structure, dependencies, scripts for developement and production.

## Table of Contents

1. [Structure](#structure)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Versions](#versions)
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
        │   ├── alert.scss
        │   ├── banner.scss
        │   ├── buttons.scss
        │   ├── card.scss
        │   ├── forms.scss
        │   ├── icons.scss
        │   ├── menu.scss
        │   ├── modal.scss
        │   ├── progress.scss
        │   └── table.scss
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

`node js` is required -> [download](https://nodejs.org/en/)

`package.json` is **require** in your project

```bash
npm init -y
```

```bash
npm i create-scss
```

You should find a scss directory at the root of your project. All depedencies you need to compile you scss are located on **node_modules** folder.

#### Dependencies installed with this package

- [sass](https://www.npmjs.com/package/sass)
- [postcss-cli](https://www.npmjs.com/package/postcss-cli)
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [npm-run-all](https://www.npmjs.com/package/npm-run-all)
- [fs-extra](https://www.npmjs.com/package/fs-extra)

## Usage

After the installation you can use any tool to compile your sass into css, but if you want to make the best out of this package, use the scripts below.

Make sure all your **scss** files are imported in your `main.scss`

##### Compile your scss into css, everytime you save

```bash
npm run cs-watch
```

##### Compile your scss into css once

```bash
npm run cs-compile
```

##### Make your css ready for production (it will compile, prefix and compress your scss).

```bash
npm run cs-build
```

## Changing name of commands

By default the commands are prefixed with \*`cs-` to make sure it wont overwrite others scripts inside your `package.json`

You can remove that prefix or rename the commands in the `package.json` to suit your need.

#### default

```bash
"scripts": {
    "cs-watch": "sass scss/main.scss css/style.css --watch --no-source-map",
    "cs-compile": "sass scss/main.scss css/style.css --no-source-map",
    "cs-compress": "sass scss/main.scss css/style.css --style=compressed --no-source-map",
    "cs-prefix": "postcss css/style.css -o css/style.css --use autoprefixer -b 'last 4 versions' --no-source-map",
    "cs-build": "npm-run-all cs-compile cs-compress cs-prefix"
  },
```

#### Example of custom name

```bash
"scripts": {
    "dev": "sass scss/main.scss css/style.css --watch --no-source-map",
    "compile": "sass scss/main.scss css/style.css --no-source-map",
    "minify": "sass scss/main.scss css/style.css --style=compressed --no-source-map",
    "add-prefixes": "postcss css/style.css -o css/style.css --use autoprefixer -b 'last 4 versions' --no-source-map",
    "production": "npm-run-all cs-compile cs-compress cs-prefix"
  },
```

## Versions

### 2.7.1
- Adapt responsive helper to match new breakpoints strategy
- Change class from `responsive-helper` to `debug`
- Change some css that affect the visual of the helper
- Now showing visual feedback of (small, medium, large and xlarge)

### 2.7.0
- Simplify breakpoints, with mobile first approach
- path: `scss/abstracts/_mixins.scss`
- code example: 
```
#mixin
$small: 600px;
$medium: 1024px;
$large: 1440px;
$xlarge: 1920px;

@mixin breakpoint($breakpoint) {
  @if $breakpoint == small {
    @media (min-width: $small) {
      @content;
    }
  } @else if $breakpoint == medium {
    @media (min-width: $medium) {
      @content;
    }
  } @else if $breakpoint == large {
    @media (min-width: $large) {
      @content;
    }
  }
  @else if $breakpoint == xlarge {
    @media (min-width: $xlarge) {
      @content;
    }
  }
}

#usage
body {
  background:red;
  @include breakpoint(small){
    background:green;
  }
  @include breakpoint(medium){
    background:blue;
  }
  @include breakpoint(large){
    background:orange;
  }
  @include breakpoint(xlarge){
    background:pink;
  }
}
```

### 2.6.1

- Add support to documentation

### 2.6.0

- Replace deprecated node-sass/LibSass \*[source](https://sass-lang.com/blog/libsass-is-deprecated).
- Add sass using [dart-sass](https://github.com/sass/dart-sass)
- Change scripts in package.json to match new sass librairy

### 2.5.5

- Add responsive helper to create an breakpoint indicator inside your markup file. To use it add the snippet below to you html document.

```html
<span class="responsive-helper"></span>
```

- Clean breakpoint mixin in mixins.scss

### 2.5.4

- Remove duplicate of `@import "components/table";` in main.scss

### 2.5.3

- Update documentation + add page to github registry

### 2.5.2

- Update documentation

### 2.5.1

- Add [normalize.css](https://github.com/necolas/normalize.css/) in the \_reset.scss partial

### 2.5.0

- Installing the package will not overwrite existing `scss` folder in your project 👏
- If you **do not** have a `scss` folder, it will be added with the full starter structure 🗂
- If you **already have** a `scss` folder, it will simply added files from the starter structure to it 📄

### 2.4.0

- Add commands to compile your `sass in css` directly to your package.json, no more copy-pasting require to start working on your project :+1:

### 2.2.2

- Prevent package.json to be overwrited by installation :wink:

### 2.1.2

- minor fixes :zap:

### 2.1.1

- minor fixes :zap:

### 2.1.0

- Add new partials in components directory
- Remove \_breadcrums.scss
- Rename \_progressbar.scss by \_progress.scss
- Reorganize main.scss

## Contribution

If you want to contribute to this project go to the [create-scss repo](https://github.com/maximedaraize/create-scss/issues) and open an issue :v:

Show your support be giving a :star: on [Github](https://github.com/maximedaraize/create-scss)

## 🙋‍♂️ Author

#### Maxime Daraize

[Github](https://github.com/maximedaraize/)
[Codepen](https://codepen.io/maximedaraize)
