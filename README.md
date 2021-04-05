# Node JS - Docker Tutorial
This simple application will show an HTML page with a small description about sharks. This is an exercise that for the understanding of Docker. This Node JS application supports ES6 syntax. When above command is executed, Babel will complie the code into ES5, copy them to the **dist** folder and executes.

## How to run
To run this application using docker, first create the docker image.

`docker build -t your_dockerhub_username/nodejs-image-demo .`

Note that there is a "." at the end of the command. This means the current directory.

Then use the following command to execute the image.

`docker run --name nodejs-image-demo -p 80:8080 -d your_dockerhub_username/nodejs-image-demo`

If you want just to run this application just execute the following command.

`npm start`

## About Dockerfile
Examine the Dockerfile. It uses NodeJS **node:14.16.0-alpine** image. Then creates a directory for the application /home/node/app/. Then changes the ownership to the none root user **node**. Using a non root user is the secure and recomended way. 
