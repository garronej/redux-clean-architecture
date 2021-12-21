<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/80216211-00ef5280-863e-11ea-81de-59f3a3d4b8e4.png">  
</p>
<p align="center">
    <i>📐 Toolkit for implementing <b>clean architecture</b> using <b>Redux</b> 📐</i>
    <br/>
    <i>🔩 Focuses on achieving great type inference 🔩</i>
    <br/>
    <i>🎯 Easy to navigate, easy to maintain 🎯</i>
    <br>
    <br>
    <img src="https://github.com/garronej/beyond-redux-toolkit/workflows/ci/badge.svg?branch=main">
    <img src="https://img.shields.io/bundlephobia/minzip/beyond-redux-toolkit">
    <img src="https://img.shields.io/npm/dw/beyond-redux-toolkit">
    <img src="https://img.shields.io/npm/l/beyond-redux-toolkit">
</p>

This repo aims to be a guide on how to implement Clean Architecture using [`@reduxjs/toolkit`](https://redux-toolkit.js.org).  
The NPM library `clean-redux` is a set of utils that you will need to achieve perfect type inference.

-   [Benefit](#benefit)
-   [Install / Import](#install--import)
-   [Documentation](#documentation)
-   [A production example](#a-production-example)
-   [Start the demo app](#start-the-demo-app)

# Benefit

The provided utilities internally leverage [TypeScript's template literal types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html), it makes the developer experience truly next level.
Implementing the approach exposed here enables large-scale app to remain maintainable for years even in the context
of frequent developer turnover.

This is the kind of experience you get from the UI side when used with React.

https://user-images.githubusercontent.com/6702424/146718518-41cddbe9-bcf6-4b19-bc8e-25efe9085004.mp4

Note that there is no need to explicitly call `dispatch` and the result of the selector are automatically
wrapped into object so they can be destructured with the correct name.

# Install / Import

```bash
$ yarn add @reduxjs/toolkit clean-redux
```

# Documentation

Canonical Clean Architecture setup: [`src/test/demo-app`](https://github.com/garronej/clean-redux/tree/main/src/test/demo-app).

To understand what the functions exposed by `clean-redux` do in detail, please refer to
[the compile time unit tests](https://github.com/garronej/clean-redux/tree/main/src/test/types)
they worth more than a thousand word.

# A production example

<p align="center">
  <a href="https://github.com/InseeFrLab/onyxia-web">
  <i>Onyxia: A data science-oriented container launcher.</i>
    <img src="https://user-images.githubusercontent.com/6702424/139264787-37efc793-1d55-4fa4-a4a9-782af8357cff.png">
  </a>
</p>

# Start the demo app

```bash
git clone https://github.com/garronej/clean-redux
cd clean-redux
yarn
yarn build
yarn start-demo-app
```
