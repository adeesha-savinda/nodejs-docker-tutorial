# Node JS - Docker Tutorial
This simple application will show an HTML page with a small description about sharks. This is an exercise that for the understanding of Docker.

## How to run
To run this application just execute

`npm start`

This Node JS application supports ES6 syntax. When above command is executed, Babel will complie the code into ES5, copy them to the *dist* folder and executes.

## About Docker
Examine the Dockerfile. It uses NodeJS *node:14.16.0-alpine* image. Then creates a directory for the application /home/node/app/. Then changes the ownership to the none root user *node*.
