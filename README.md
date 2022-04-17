# Projeto Setup NodeJs

Project to initialize settings with NodeJS + Express + Jest.

## Introduction

Architecture Reference service.

### Running on native machine
1. Install the dependencies with `npm install`
2. Run the docker-compose up debug option with `docker-compose -f "docker-compose.yml" up -d --build` to up mongodb database
3. Run the application in development mode with `npm run dev`
4. Access `https://localhost:3000` and you're ready to go!

## Scripts

This boilerplate comes with a collection of npm scripts to make your life easier, you'll run them with `npm run <script name>`:

- `dev`: Run the application in development mode
- `start` Run the application in production mode (prefer not to do that in development)
- `test`: Run the test suite
- `commit`: Run generate conventional changelog

## Tech

- [Node 16+](http://nodejs.org/)
- [Express](https://npmjs.com/package/express)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [NYC](https://www.npmjs.com/package/nyc)
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
