# pwa-text-editor-gabe

## Video Walkthrough Link

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#Usage)
- [Bugs](#Bugs)
- [Screenshots](#screenshots)
- [Credits](#credits)

## Description

This project involved refactoring code to create a Progressive Web App that could run offline. An app needs to fulfill several qualifications to be considered a PWA, all of which this does: it should contain manifest JSON files and a service worker, it should run offline, and it should be highly responsive and fast given it is running locally. Preferably, it will achieve its speed by caching its static assets (such as its images, JS files, etc.) and retrieving them there.

-
-
-
-

## Installation

- One can run this note taking app in two manners: locally, or over a network. In order to run the program locally, a user must:

- First make sure they have all of this code in a folder on their machine. Without the repository, a local runtime environment will fail.

- The user must open a node/clp and run "npm install." Doing so will ensure all packages and dev packages are installed.

- In the root folder, the user can then run "npm run build" in order to build the webpack and serve the entire client folder locally; they would then need to run the server (localhost3000) by cding to the server and running the server as a node using node server.js. Alternatively, the user can combine these steps by running "npm run start," which will both build the webpack, start the service worker, and run the server.

- Should a user want to use this application over the web, they may simply navigate to its deployed heroku web link at:

## Usage

- Actually using the application is relatively simple when compared with installing it.

## Bugs

- There are no known major bugs afflicting the program. However, the initial prompt called lines 38-52 that asks the user for their role at the company is not functioning correctly. The inquirer prompts will proceed regardless of what is entered, and user input on their own role does not change their employee card generated in the final html.

## Screenshots

- ![Alt= ](./screenshots/screenshot1.jpg)
- ![Alt= ](./screenshots/screenshot2.jpg)
- ![Alt= ](./screenshots/screenshot3.jpg)
- ![Alt= ](./screenshots/screenshot4.jpg)
- ![Alt= ](./screenshots/screenshot5.jpg)

## Credits

- This project could not have been completed without the hardwork and excellent advice of my educators at UW Fullstack and tutor, Jacob Carver.
