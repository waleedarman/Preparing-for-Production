# Optimizing and Testing Project: Study Night

## 🚀 Project Overview

In this project, students will optimize and test the front-end web application **Study Night**, a flashcard tool. You will:

* Create tests to ensure product quality.
* Install and configure project dependencies.
* Optimize and automate application tasks.

### Key Tools

* **Mocha & Chai** – Unit Testing
* **Cypress** – End-to-End Testing
* **Parcel** – Build & Optimization
* **Gulp** – Task Automation

---

## 📅 Getting Started

If using a local machine, install **Node.js**:

### Mac / Linux

```bash
curl -fsSL https://fnm.vercel.app/install | bash
source ~/.bashrc
fnm use --install-if-missing 20
node -v
npm -v
```

### Windows (PowerShell)

```powershell
winget install Schniz.fnm
fnm env --use-on-cd | Out-String | Invoke-Expression
fnm use --install-if-missing 20
node -v
npm -v
```

---

## 📁 Project Setup Instructions

### Step 1: Initialize npm

```bash
npm init
```

* Fill in: name, version, description
* Use **MIT license**
* Add: `"type": "module"` to `package.json`

---

## 🛠️ Linting & Formatting

### Install VS Code Extensions

* ESLint
* Prettier

### Configure ESLint

```bash
npm init --save-dev @eslint/config@latest
```

* Restart VS Code
* Fix issues in:

  * `src/Shuffle.js`
  * `src/utilityRenderFunctions.js`

> **⚠ Only fix underlined errors. Don't change logic.**

---

## ⚙️ Install & Configure Gulp and Parcel

### Install

```bash
npm i --save-dev gulp gulp-cli gulp-shell
npm i --save-dev parcel
```

### Configure `gulpfile.js`

```js
import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('default', shell.task(['parcel src/index.html']));
gulp.task('test', shell.task(['mocha']));
gulp.task('e2e', shell.task(['npx cypress run']));
```

### Run App

```bash
npm run gulp
```

Open: `http://localhost:1234`

> Verify Parcel optimized files inside the `dist/` folder (minified, concatenated, and compressed images).

---

## ✅ Unit Testing with Mocha & Chai

### Install Dependencies

```bash
npm i --save-dev mocha chai
```

### Create Unit Test

* Create: `test/shuffle.js`
* Add a `describe()` block for `shuffle()`
* Write at least 1 test that verifies shuffling changes array indexes

### Add Task to `gulpfile.js`

```js
gulp.task('test', shell.task(['mocha']));
```

### Run Test

```bash
npm run gulp test
```

---

## 🌐 End-to-End Testing with Cypress

### Install Cypress

```bash
npm i --save-dev cypress
```

### Run Cypress UI

```bash
npx cypress open
```

* Select **E2E Testing**
* Cypress creates default files

### Create Test Files:

* `cypress/e2e/navigation.cy.js`
* `cypress/e2e/form.cy.js`

---

## 🕹️ Navigation Test (`navigation.cy.js`)

```js
describe('Navigation Tests', () => {
  it('Navigates to Card Set page', () => {...});
  it('Navigates to About page', () => {...});
  it('Navigates to Home page', () => {...});
});
```

## 🗒️ Form Test (`form.cy.js`)

```js
describe('Form Tests', () => {
  it('Create Set - happy path', () => {...});
  it('Add Card - happy path', () => {...});
  it('Create Set - empty input shows error', () => {...});
  it('Add Card - empty input shows error', () => {...});
});
```

### Add Gulp Task to Run Cypress

```js
gulp.task('e2e', shell.task(['npx cypress run']));
```

> Run `npm run gulp` (in one terminal) before `npm run gulp e2e`

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for more details.
