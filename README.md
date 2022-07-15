# Augie UI Prototypes
This repo demonstrates using Tailwind and Next.js to create a UI

The `/signup` page is the only one currently done (`pages/signup.jsx`)

## Preview
1. `npm install`
2. `npm run dev`
3. [https://localhost:3000/signup](https://localhost:3000/signup)

## Directory structure
`pages/`
  - Routing based on file system - React components in this directory become pages
  - Dynamic routing is available (i.e. `pages/articles/[id].jsx` would be rendered at `localhost:3000/articles/5` with `5` available to the component)
  - `pages/_app.jsx` and `pages/_document.jsx` are used to customize app structure, but can mostly be ignored
`components/`
  - Global components accessible anywhere in the app
  - `components/layout.jsx` - default layout
  - `components/header.jsx` - universal header
  - `components/footer.jsx` - universal footer
`public/`
  - static assets – available from anywhere (i.e. `public/logo.svg` becomes `localhost:3000/logo.svg`)
`styles/`
  - used to hold stylesheets - can mostly be ignored when using Tailwind
`next.config.js`
  - configuration file for Next.js - set options (i.e. whether to use Static Site Generation, Server Side Rendering, or Client-side Rendering)
`tailwind.config.js`
  - configuration file for Tailwind - set options and customize theme

## Programming pattern
The idea is to encourage both fast prototyping and scalable modularization
1. Prototype components in place with Tailwind - very fast and intuitive
2. Convert to local component - allows for easy reuse and a single source of truth on page (this has the side effect of making the return into a self-documenting template for easily understanding the structure of page)
3. As necessary, generalize and nest components further (within single page)
4. As necessary, convert to local components into global component - allows for single source of truth for the whole website
One of the main reasons behind this pattern: Using Tailwind with deeply nested CSS Grids makes building production-ready layouts and components very easy

## Recommended extensions
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
