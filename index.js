import "dotenv/config";

import express from "express";
const app = express();
const port = 4000;

const github = {
  name: "freeapi",
  version: "1.3.1",
  description: "A API learning go",
  type: "module",
  main: "src/index.js",
  scripts: {
    start: "nodemon -r dotenv/config --experimental-json-modules src/index.js",
    "pre-commit": "lint-staged",
    prepare: "node prepare.js",
    "start:test-server":
      "node -r dotenv/config --experimental-json-modules e2e/test-server.js",
    "test:playwright":
      "set NODE_OPTIONS=--experimental-vm-modules -r dotenv/config --experimental-json-modules && npx playwright test",
  },
  repository: {
    type: "git",
    url: "git+https://github.com/hiteshchoudhary/apihub.git",
  },
  keywords: [
    "apihub",
    "freeapi",
    "open source",
    "api as a service",
    "public apis",
    "kitchen sink",
  ],
  author: "Hitesh Choudhary",
  license: "ISC",
  bugs: {
    url: "https://github.com/hiteshchoudhary/apihub/issues",
  },
  homepage: "https://github.com/hiteshchoudhary/apihub#readme",
  dependencies: {
    "@faker-js/faker": "^8.0.2",
    bcrypt: "^5.1.0",
    "cookie-parser": "^1.4.6",
    cors: "^2.8.5",
    dotenv: "^16.0.3",
    express: "^4.19.2",
    "express-compression": "^1.0.2",
    "express-rate-limit": "^6.7.0",
    "express-session": "^1.17.3",
    "express-validator": "^7.0.1",
    jsonwebtoken: "^9.0.0",
    mailgen: "^2.0.27",
    mongoose: "^7.4.0",
    "mongoose-aggregate-paginate-v2": "^1.0.6",
    morgan: "^1.10.0",
    multer: "^1.4.5-lts.1",
    nanoid: "^4.0.2",
    nodemailer: "^6.9.3",
    passport: "^0.6.0",
    "passport-github2": "^0.1.12",
    "passport-google-oauth20": "^2.0.0",
    razorpay: "^2.8.6",
    "request-ip": "^3.3.0",
    "socket.io": "^4.7.1",
    "swagger-ui-express": "^4.6.3",
    winston: "^3.11.0",
    yaml: "^2.3.1",
  },
  devDependencies: {
    "@babel/core": "^7.23.7",
    "@babel/plugin-syntax-import-assertions": "^7.23.3",
    "@babel/preset-env": "^7.23.8",
    "@commitlint/cli": "^17.6.6",
    "@commitlint/config-conventional": "^17.6.5",
    "@playwright/test": "^1.41.1",
    "@shelf/jest-mongodb": "^4.2.0",
    "@types/node": "^20.11.5",
    "babel-jest": "^29.7.0",
    husky: "^8.0.3",
    jest: "^29.7.0",
    "lint-staged": "^13.2.2",
    "mongodb-memory-server": "^9.1.6",
    nodemon: "^2.0.22",
    prettier: "^3.0.0",
    supertest: "^6.3.4",
    "supertest-session": "^5.0.1",
  },
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("hiteshdotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai aur code</h2>");
});

app.get("/github", (req, res) => {
  res.json(github);
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Chai aur youtube</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
