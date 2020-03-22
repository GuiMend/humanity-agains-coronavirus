# Humanity Against Coronavirus

This is the open source project with the objective to help disseminate usefull information about the Novel Coronavirus in the hope to help contain the spread. This project was based on JungleDevs boilerplate for React Applications. \
It uses React 16 + Redux + Reach Router.

## Requirements

- Node v10.17.0 installed
- [Yarn Package Manager](https://yarnpkg.com/lang/en/)

## Running on development

- Install packages: `yarn`
- To run the application in development mode use the following command: `yarn start`

## Building the production

- In order to build the application for production use the command: `yarn build`. This will create a `build` folder.

# About this boilerplate

### Base boilerplate

This boilerplate was made on top of [Facebook's Create React App (CRA)](https://github.com/facebook/create-react-app), making use of its already setup development server and production static build. We currently use the next build of CRA.

In order to customize the webpack, a script was added to listen and modify the original webpack configuration files. This is possible due to the library [Rewire](https://github.com/jhnns/rewire). The file responsible for this is located [here](scripts/customized-config.js)

### NVM

The _.nvmrc_ file helps us to run the project with the correct node version.
If you are not familiar with NVM usage, you can check it [here](https://coda.io/d/Chapter-Frontend_dPmePxjVB5S/Style-Guide_su751#_luWDD)

### Used Libraries

#### React

This boilerplate is currently in the version 16.4.1 of react, allowing the use of the newest [Portals](https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202) and [Context](https://codeburst.io/what-can-react-context-api-do-for-you-multi-language-text-modals-and-theme-switchers-9cfbc8e5ee5e) APIs.

#### Redux

This boilerplate is also equipped with [Redux](https://github.com/reduxjs/redux) v4.

#### Router

We chose [reach-router](https://reach.tech/router) as a routing option for its simplicity.

#### Axios

[Axios](https://github.com/axios/axios) is the choice for making API requests. The boilerplate is already setup with the main configurations and is ready to work specially with Django BE Applications.

#### Webpack

This boilerplate is equipped with [webpack v4](https://github.com/webpack/webpack).

### Development

To standardize Jungle Devs development, the boilerplate has installed [ESLint](https://eslint.org/), [Stylelint](https://github.com/stylelint/stylelint) and [Prettier](https://github.com/prettier/prettier).

For those who are using VS Code as the code editor, three extensions are required: `ESLint`, `stylelint` and `Prettier - Code formatter`. You can find the code formatting settings for VS Code below as well.

```JSON
{
  // Prettier
  "prettier.eslintIntegration": true,
  "prettier.stylelintIntegration": true,
  "prettier.printWidth": 180,
  "prettier.tabWidth": 2,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5",
  "prettier.bracketSpacing": true,
  "prettier.jsxBracketSameLine": false,
  "prettier.parser": "babylon",
  "prettier.semi": false,
  "prettier.proseWrap": "never",
  // ESLint
  "eslint.autoFixOnSave": true,
}
```

### Environments

Since this boilerplate is built on top of [CRA](https://github.com/facebook/create-react-app), all the env variables must have a REACT*APP* prefix. E.g.: REACT_APP_API_URL.

Files to store the environments can be created acording to the NODE_ENV used. For `development`, for e.g., we can create a file with the name `.env.development` and insert all our environment files there. Same goes for production: `.env.production`.

As for the release v0.1.0, no enviromental variables are needed.
