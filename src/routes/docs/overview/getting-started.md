---
title: Getting Started
layout: overview
---

## Install the package

First of all you should install the `sveltekit-components` as a devolpment dependency.

```bash
npm install -D sveltekit-components
```

## Import the default styles

At the moment there are only the SASS files available. Please make sure that you have SASS preprocessing configured. The best way to import the default styles is in your `__layout.svelte` file:

```js
import 'sveltekit-components/sass/main.sass'
```

## Install an icon set

`svelte-components` uses the [Feather Icons](https://feathericons.com/) by default, but you can use any SVG icon set you want. You can install the Feather Icons for your project with the following command:

```bash
npm install svelte-feather-icons
```
