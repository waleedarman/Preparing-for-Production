# Optimizing and Testing: Study Night

In this project, students will optimize and test a front-end web application called **Study Night**, a flashcard tool. The tasks include writing tests, configuring dependencies, optimizing the codebase, and automating build tasks.

---

## Getting Started

If you're using a local machine, install Node.js:

### Mac / Linux

```bash
curl -fsSL https://fnm.vercel.app/install | bash
source ~/.bashrc
fnm use --install-if-missing 20
node -v
npm -v
```

### Windows

```powershell
winget install Schniz.fnm
fnm env --use-on-cd | Out-String | Invoke-Expression
fnm use --install-if-missing 20
node -v
npm -v
```

---

## Project Setup

1. Initialize the project:

```bash
npm init
```

* Set name, version, description, license (MIT).
* Add: `"type": "module"` to `package.json`.

2. Install VS Code extensions:

* ESLint
* Prettier

3. Setup ESLint:

```bash
npm init --save-dev @eslint/config@latest
```

* Restart VS Code.
* Fix ESLint/Prettier issues only in:

  * `src/Shuffle.js`
  * `src/utilityRenderFunctions.js`

> Only fix underlined issues. Don't change core logic.

---

## Install Gulp and Parcel

```bash
npm i --save-dev gulp gulp-cli gulp-shell
npm i --save-dev parcel
```

Create `gulpfile.js` and add:

```js
import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('default', shell.task(['parcel src/index.html']));
gulp.task('test', shell.task(['mocha']));
gulp.task('e2e', shell.task(['npx cypress run']));
```

Start the project:

```bash
npm run gulp
```

Visit: [http://localhost:1234](http://localhost:1234)

Check the `dist/` folder for minified assets and optimized images (auto done by Parcel).

---

## Unit Testing with Mocha

1. Install dependencies:

```bash
npm i --save-dev mocha chai
```

2. Create `test/shuffle.js`:

* Add a `describe` block for `shuffle()`.
* Write a test to check that it randomizes an array.

3. Run test:

```bash
npm run gulp test
```

---

## End-to-End Testing with Cypress

1. Install Cypress:

```bash
npm i --save-dev cypress
```

2. Launch Cypress:

```bash
npx cypress open
```

Choose **E2E Testing** and let Cypress scaffold.

Create:

* `cypress/e2e/navigation.cy.js`
* `cypress/e2e/form.cy.js`

### Navigation Tests (`navigation.cy.js`)

* Click "Card Set" → goes to Card Sets page.
* Click "About" → goes to About page.
* Click "Home" → goes to Home page.

### Form Tests (`form.cy.js`)

* Test valid form submissions (happy path).
* Test empty inputs (unhappy path shows error).

Run:

```bash
npm run gulp e2e
```

> Note: Parcel must be running in a separate terminal.

---

## License

MIT License.

---
