# About
This is a test automation framework utilising open source technologies, namely, `Playwright` and `Typescript`.
It can do both UI and API based test automation.

It can run on any OS platform, one just needs to have `NodeJs` installed.

It currently has API and UI tests automated for demo puposes in the `tests` folder.

# How to Install
Clone the repo from github, one needs to have `Git` installed.

Create a `.env` file at the root of the project, the file should not be checked in. Create the below two entries in the file:
baseAPIURL=https://dog.ceo/api
baseUIURL=http://www.way2automation.com/angularjs-protractor/webtables/

One very convenient way to install Node.js is through a package manager, example, `Chocolatey`. Install `Node v18.16`.

Install necessary packages: npm install

# How to run tests
For controlled and detailed execution with extensive reporting and logging: `npx playwright test --ui`
For running in headless mode through terminal: `npx playwright test`
For looking at the reports in browser: `npx playwright show-report`




