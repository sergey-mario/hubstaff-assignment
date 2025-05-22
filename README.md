# Playwright Tests Repository

This repository contains end-to-end tests written using Playwright. The project follows best practices, including the Page Object Model, linting with ESLint, and code formatting with Prettier. GitHub Actions are set up for continuous integration, and Husky is used for pre-commit hooks. Additionally, Allure is integrated for test reporting.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** This project requires Node.js. [Download and install Node.js](https://nodejs.org/).

## Table of Contents

- [Installation](#installation)
- [Run Tests](#run-tests)
- [Linting and Formatting](#linting-and-formatting)
- [Continuous Integration](#continuous-integration)
- [Test Reporting](#test-reporting)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sergey-mario/hubstaff-assignment.git
    cd hubstaff-assignment
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Run Tests

Execute the following command to run the Playwright tests:

```bash
npm test
```

To run tests in headful mode, use the following command:

```bash
npm run test -- --headed
```

To run specific project (e.g. chromium), use the following command:

```bash
npm run test -- --project=chromium
```

## Linting and Formatting

Linting is done using ESLint, and code formatting is done using Prettier. Run the following command to lint and format the code:

```bash
npm run eslint:fix
```

## Continuous Integration

GitHub Actions are set up to run tests on each pull request creation into `main` branch. It is also possible to run tests manually. The configuration can be found in the .github/workflows/playwright.yml file.

Playwright html report generated automatically as workflow artifact.

## Test Reporting

Repository uses Allure and Playwright for test reporting.

Playwright report generated automatically as html file after each test run.

To generate Allure report Run the following command:

```bash
allure generate allure-results --clean -o allure-report
```

The generated reports can be found in the `allure-report` and `playwright-report` folders.
