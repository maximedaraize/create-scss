# Create-scss

A starter template with scss structure, dependencies, script for developement and production

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Scripts](#scripts)

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

- A folder name **scss**
- A .gitignore file
- A .npmignore file
- A package.json file
- A README.md file

## Usage

Install dependencies to compile your **scss** into **css** by running the next command in your terminal

```bash
npm install
```

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
