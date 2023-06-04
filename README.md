<p align="center">
  <img src="https://raw.githubusercontent.com/SubZane/treemenu-reactjs/master/public/img/github-img.png" width="400" alt="treemenu-reactjs">
</p>
<p align="center">
	<img src="https://img.shields.io/github/package-json/dependency-version/subzane/treemenu-reactjs/styled-components?color=%23DB7093?style=flat-square">
	<img src="https://img.shields.io/github/package-json/dependency-version/subzane/treemenu-reactjs/react?color=61DAFB?style=flat-square">
	<img src="https://img.shields.io/github/package-json/dependency-version/subzane/treemenu-reactjs/react-dom?color=61DAFB?style=flat-square">
	<img src="https://img.shields.io/github/package-json/dependency-version/subzane/treemenu-reactjs/react-scripts?color=61DAFB?style=flat-square">
	<img src="https://img.shields.io/github/package-json/dependency-version/subzane/treemenu-reactjs/typescript?style=flat-square">
</p>
<p align="center">
	<img src="https://img.shields.io/github/v/release/SubZane/treemenu-reactjs?sort=semver&style=flat-square">
	<img src="https://img.shields.io/github/actions/workflow/status/subzane/treemenu-reactjs/build.yml?style=flat-square">
	<img src="https://img.shields.io/static/v1?label=license&message=MIT&color=brightgreen">
	<img src="https://img.shields.io/librariesio/github/subzane/treemenu-reactjs?style=flat-square">
</p>

## Description

treemenu-reactjs is an off-canvas menu component written in ReactJS with TypeScript and Styled Components.

## Demo

A demo can be found here: <a href="https://subzane.github.io/treemenu-reactjs/">Demo</a>

## Installation

```
yarn add treemenu-reactjs
# or via npm
npm install treemenu-reactjs --save
```

## Theme Options

There is a small theme settings file located in `/src/helpers/theme.tsx` where you can change colors and such.

### Properties

`<OffCanvasPanel />` component

- `showButton = true`: If the default menu button should be used
- `state = ''`: If the menu should be visible or not. Only used when not using the default menu button `'open' | 'close' | ''`
- `animation = 'door-left'`: Animation effect of the menu. You can choose between `'door-left' | 'door-right' | 'flip-bottom' | 'flip-top'`

`<Treemenu />` component

- `menuDataSource`: Menudata object used to render the menu

## Local development and usage

Install dependencies and start the development server

```
yarn install
yarn start
```

Open [`localhost:3000`](http://localhost:3000) in your browser.

## Requirements

Requires Node 10+ to run
