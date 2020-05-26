![create scss logo](https://res.cloudinary.com/mdaraize/image/upload/c_scale,q_100,w_508/v1588286427/Logo-maxime_E2_hspxgq.svg)

</br>

![npm version](https://img.shields.io/npm/v/create-scss)
![npm license](https://img.shields.io/npm/l/create-scss?color=%2321bab3)
![npm downloads](https://img.shields.io/npm/dm/create-scss)

### A quick and easy way to add a scss directory structure to your projet :zap:

A starter template with scss directory structure, dependencies, scripts for developement and production.

## Table of Contents

1. [Structure](#structure)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Version](#version)
5. [Contribution and support](#contribution)

## 🗂 Structure

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

## ✨ Installation
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

- [node-sass](https://www.npmjs.com/package/node-sass)
- [postcss-cli](https://www.npmjs.com/package/postcss-cli)
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [npm-run-all](https://www.npmjs.com/package/npm-run-all)
- [fs-extra](https://www.npmjs.com/package/fs-extra)

## 🧑‍💻 Usage

After the installation you can use any tool to compile your sass into css, but if you want to make the best out of this package, use the scripts below.

Make sure all your **scss** files are imported in your `main.scss`

##### Compile your scss into css run everytime you save run the command

```bash
//output style.css
npm run cs-watch
```

##### Compile your scss into css run the command

```bash
//output style.comp.css
npm run cs-compile
```

##### Make your css ready for production (it will compile, prefix and compress your scss).

```bash
//output style.mini.css
npm run cs-build
```

## 💾 Changing name of commands

By default the commands are prefixed with \*`cs-` to make sure it wont overwrite others scripts inside your `package.json`

You can remove that prefix or rename the commands in the `package.json` to suit your need.

#### default

```bash
"scripts": {
    "cs-watch": "node-sass scss/main.scss css/style.css --watch",
    "cs-compile": "node-sass scss/main.scss css/style.comp.css",
    "cs-prefix": "postcss css/style.comp.css --use autoprefixer -b 'last 4 versions' -o css/style.prefix.css",
    "cs-compress": "node-sass css/style.prefix.css css/style.mini.css --output-style compressed",
    "cs-build": "npm-run-all cs-compile cs-prefix cs-compress"
  },
```

#### Example of custom name

```bash
"scripts": {
    "new-command-1": "node-sass scss/main.scss css/style.css --watch",
    "new-command-2": "node-sass scss/main.scss css/style.comp.css",
    "new-command-3": "postcss css/style.comp.css --use autoprefixer -b 'last 4 versions' -o css/style.prefix.css",
    "new-command-4": "node-sass css/style.prefix.css css/style.mini.css --output-style compressed",
    "new-command-5": "npm-run-all new-command-2 new-command-3 new-command-4"
  },
```

## 💡 Versions

### 2.5.1

- Add [normalize.css](https://github.com/necolas/normalize.css/) in the _reset.scss partial

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

## 🎈 Contribution

If you want to contribute to this project go to the [create-scss repo](https://github.com/maximedaraize/create-scss/issues) and open an issue :v:

Show your support be giving a :star: on [Github](https://github.com/maximedaraize/create-scss)

## 🙋‍♂️ Author

#### Maxime Daraize

[Github](https://github.com/maximedaraize/)
[Codepen](https://codepen.io/maximedaraize)
