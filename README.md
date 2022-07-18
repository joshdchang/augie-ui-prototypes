# Augie UI Prototypes

This repo demonstrates using Tailwind and Next.js to create UI

The [Sign Up page](https://augie-ui-prototypes.vercel.app/signup) is the only one currently done (`pages/signup.jsx`)

## Preview

1. `npm install`
2. `npm run dev`
3. [https://localhost:3000/signup](https://localhost:3000/signup)

## Directory Structure

`pages/`
  - This directory enables routing based on file system - React components in this directory become pages
  - Dynamic routing is available (i.e. `localhost:3000/articles/5` would be routed to `pages/articles/[id].jsx`, with `5` available as a property to the component)
  - `pages/_app.jsx` and `pages/_document.jsx` are used to customize app structure, but can mostly be ignored

`components/`
  - This directory contains global components accessible anywhere in the app
  - `components/layout.jsx` - default layout
  - `components/header.jsx` - universal header
  - `components/footer.jsx` - universal footer

`public/`
  - This directory contains static assets available from anywhere (i.e. `public/logo.svg` becomes `localhost:3000/logo.svg`)

`styles/`
  - This directory is used to hold stylesheets - can mostly be ignored when using Tailwind

`next.config.js`
  - This is the configuration file for Next.js - it is used to set Next options (i.e. whether to use Static Site Generation, Server Side Rendering, or Client-side Rendering)

`tailwind.config.js`
  -  This is the configuration file for Tailwind - it is used to set Tailwind options and customize the theme

## Design Pattern

The following steps describe a consistent pattern of progressive abstraction to be used when building out a page (in this context)

The idea is to encourage both fast prototyping and scalable modularization

1. Prototype small peices of UI in place with Tailwind (probably using CSS Grid) - this is very fast and intuitive
2. Convert inline peices of UI into local components - this allows for a single source of truth within a page, which is especially important for Tailwind classes; if these components are descriptively named, this will also turn the return of the page into a glancable, self-documenting template for easily understanding the page's structure
3. As necessary, generalize and nest components further
4. As necessary, convert local components into global components - allows for single source of truth for the whole website

One of the main reasons this pattern is effective (in my opinion) is because using Tailwind with deeply nested CSS Grids makes building production-ready (predictable and browser-consistent) layouts and components very easy

## Recommended Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
