# kaios-vue-starter

A simple starter template for building a KaiOS app using Vue 3.

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Development and testing

`npm run dev` builds the app in watch mode and serves the site using Vite. Great for testing your app in a desktop browser.

### Deploying to a device

`npm run build` uses rollup because using vite to compile and transpile is a bit problematic...

1. Connect your device to your computer and make sure it appears in WebIDE.
2. `npm run build`
3. In WebIDE, load the `/dist` folder as a packaged app.

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
