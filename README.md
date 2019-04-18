# React tasks app
[React](https://reactjs.org/) based task list single page application.

**Demo:**  
[https://binaryjim.github.io/react-tasks-app](https://binaryjim.github.io/react-tasks-app)

**Design system:**  
[https://binaryjim.github.io/react-tasks-app/design-system](https://binaryjim.github.io/react-tasks-app/design-system)

## Current application state

The current version provides CRUD functionality for user created tasks using [Redux](https://redux.js.org/) and  [React-Redux](https://react-redux.js.org/). The [local storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage) is used for data persistence and a UUID is generated for each new task.

On first load, the application will check if existing task store is saved in the browser's local storage. If found, this data will be loaded into the store presented to the view, if not a new store will be created.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To get this project up and running on your local system you'll need both [yarn](https://yarnpkg.com/lang/en/) and [node.js](https://nodejs.org/en/) installed on your development system.

### Installing

To install all dependencies required for the project, clone or download the source `cd` into the project root and from your terminal run:

```bash
yarn install
```

### Local development / testing

The project uses [Create React App](https://facebook.github.io/create-react-app/), which includes a local development server `cd` into the project root and run the following command from the terminal:

```bash
yarn start
```

Create React App will build a development version of the app. The localhost / local network preview address will be printed to the console.

## Deployment

To build a production copy for deployment `cd` into the project root and run the following command from your terminal:

```bash
yarn run build
```

## Built with

- [React](https://reactjs.org/) - JavaScript UI development library
- [Redux](https://redux.js.org/) - JavaScript state management library
- [React-Redux](https://react-redux.js.org/) - Official React bindings for Redux
- [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start) - Routing library for React
- [Sass](https://sass-lang.com/) - CSS extension language
- [Font Awesome](https://fontawesome.com/) - Icon toolkit

## Author

Built by James Humphreys - [BinaryJim](https://binaryjim.co.uk)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/binaryjim/react-tasks-app/blob/master/license.txt) file for details

## Acknowledgements

- [Normalize.css](https://github.com/necolas/normalize.css) - CSS reset