# E2EWebTestAutomation
Implement E2E Test Automation for the following website: “https://automationexercise.com/”

## Pre-installation requirements
- Node 16+
- NPM 7+

---

# Dependencies
Before installing playwright you must have npm, run this script for the installation

```bash
npm install
```

## Installation
### Playwright
- **Step 1:** Get started by installing Playwright using npm
```bash
npm init playwright@latest
```
- **Step 2:** Select *TypeScript* as the language you want to use in the project.
- **Step 3:** Leave *tests* as the default folder for the tests.
- **Step 4:** Leave the default github actions as yes(Y)

### Run
Select and run on your terminal any of the `scripts` you want to run under *[package.json](package.json)* 
```bash
npm run test:accountActions
```
```bash
npm run test:badLogin
```
```bash
npm run test:badSignup
```

### Results
After running the test scripts you can run this report script too check the HTML report with the results.
```bash
npx playwright show-report
``` 
Go to [`http://127.0.0.1:9323/`](`http://127.0.0.1:9323/`) to see the results
