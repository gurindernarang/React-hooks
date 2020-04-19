This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

### `npm install -D cross-env npm-run-all json-server`

Installed at this course of time:

- npm-run-all@4.1.5
- cross-env@7.0.2
- json-server@0.16.1

installed by plural site tutor

### `npm install =D cross-env@5.2.0 npm-run-all@4.1.5 json-server@0.15.0`

Changes done in script file
Add new script inside "scripts"
"start": "run-p start:dev start:api",
"start:dev": "cross-env REACT_APP_API_URL=http://localhost:3001 react-scripts start",
"start:api": "node tools/apiServer.js",
