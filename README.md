📘 Study Night – Optimization & Testing Project
A front-end flashcard web application designed to reinforce testing, automation, and optimization skills. In this project, students optimize a prebuilt app, write unit and end-to-end tests, automate tasks using Gulp, and prepare the app for production using Parcel.

🚀 Getting Started
Prerequisites
Make sure Node.js is installed:

Mac / Linux
bash
نسخ
تحرير
curl -fsSL https://fnm.vercel.app/install | bash
source ~/.bashrc
fnm use --install-if-missing 20
node -v
npm -v
Windows (PowerShell)
powershell
نسخ
تحرير
winget install Schniz.fnm
fnm env --use-on-cd | Out-String | Invoke-Expression
fnm use --install-if-missing 20
node -v
npm -v
📦 Project Setup
Initialize the project:

bash
نسخ
تحرير
npm init
In package.json, ensure the following:

json
نسخ
تحرير
{
  "name": "study-night",
  "version": "1.0.0",
  "description": "Flashcard tool optimized with testing and automation",
  "license": "MIT",
  "type": "module"
}
🛠️ Developer Tools
VS Code Extensions
ESLint

Prettier

ESLint Config
Install and configure ESLint:

bash
نسخ
تحرير
npm init --save-dev @eslint/config@latest
Fix ESLint and Prettier issues in:

src/Shuffle.js

src/utilityRenderFunctions.js

⚠️ Only fix formatting and linting errors — do not change logic.

⚙️ Tooling Setup
Install Gulp and Parcel
bash
نسخ
تحرير
npm i --save-dev gulp gulp-cli gulp-shell
npm i --save-dev parcel
Configure gulpfile.js
js
نسخ
تحرير
import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('default', shell.task(['parcel src/index.html']));

gulp.task('test', shell.task(['mocha']));

gulp.task('e2e', shell.task(['npx cypress run']));
Run with:

bash
نسخ
تحرير
npm run gulp
Visit: http://localhost:1234

✅ Unit Testing with Mocha
Install Mocha and Chai:

bash
نسخ
تحرير
npm i --save-dev mocha chai
Create test file:

test/shuffle.js

Write at least one test to check array shuffle behavior.

Run test:

bash
نسخ
تحرير
npm run gulp test
🌐 End-to-End Testing with Cypress
Install Cypress:

bash
نسخ
تحرير
npm i --save-dev cypress
Launch Cypress:

bash
نسخ
تحرير
npx cypress open
Create tests:

cypress/e2e/navigation.cy.js
✅ Navigates correctly when clicking:

"Card Set"

"About"

"Home"

cypress/e2e/form.cy.js
✅ Valid form submissions (happy path)

✅ Empty fields show error messages (unhappy path)

Run tests:

Make sure the server is running with Parcel

bash
نسخ
تحرير
npm run gulp e2e
🏁 Build Output
After running npm run gulp, check the dist folder:

✅ Images are optimized

✅ Files are minified & concatenated

No changes should be made to the dist folder.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

