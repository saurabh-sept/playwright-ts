# About
This is a test automation framework utilising open source technologies, namely, `Playwright` and `Typescript`. It can do both UI and API based test automation.

It can run on any OS platform, one just needs to have `Node.js` installed.

It currently has API and UI tests automated for demo puposes in the `tests` folder.

# System requirements
Node.js 16+

Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).

MacOS 12 Monterey or MacOS 13 Ventura.

Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.

# Installation
One very convenient way to install is through a package manager, example, `Chocolatey` `https://chocolatey.org/install`.

VS Code: `choco install vscode.install`. Install `VS Code extension` for Playwright.

Git: `choco install git`

NodeJs: `choco install nodejs-lts`

`Clone` the repo from github.

After cloning, create a `.env` file at the root of the project, the file should not be committed. Create the below two entries in the file:
baseAPIURL=https://dog.ceo/api

baseUIURL=http://www.way2automation.com/angularjs-protractor/webtables/.

Install necessary packages: `npm ci`

Each version of Playwright needs specific versions of browser binaries to operate. You will need to use the Playwright CLI to install these browsers. With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment. It means that every time you update Playwright, you might need to re-run the install CLI command.

Playwright can install supported browsers. Running the command without arguments will install the default browsers.
`npx playwright install`

System dependencies can get installed automatically. This is useful for CI environments.
`npx playwright install-deps`

Or combined `npx playwright install --with-deps`

# Running tests and reporting
`Recommended` for full trace of your tests complete with watch mode, time travel debugging and more, use `UI Mode`: `npx playwright test --ui`. Or `npm test` for short.

For running in headless mode on terminal: `npx playwright test`. However, you can run tests in headed mode by using the `--headed` CLI argument, browsers will open. 

Tests are currently only configured to run in `Chromium` browser as in the `playwright.config.ts`, which can be modified, or `--project` CLI argument can be used to run in multiple bowsers. e.g. `npx playwright test --project webkit --project firefox`

This framework is setup to generate `list` and `html` reports for each test runs, it is also setup to automatically open the `html` report on failure. 

For opening the last execution `html` reports: `npx playwright show-report`

For any other reporting formats the `--reporter` command line option can be passed as well.
e.g.
`npx playwright test --reporter=line`

`npx playwright test --reporter=dot`

Bash: `PLAYWRIGHT_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json`

Bash: `PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit`

# Test filtering
To run files that have `landing` or `login` in the file name, simply pass in these keywords to the CLI.
`npx playwright test landing login`

To run a test with a specific title, use the `-g` flag followed by the title of the test.
`npx playwright test -g "add a todo item"`

Tests can be run right from `VS Code` using the `VS Code extension`. 

# Video
It's `off` at the moment but can be turned on in `playwright.config.ts`.



