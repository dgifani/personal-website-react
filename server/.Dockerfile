FROM node:10.14.0-alpine

RUN mkdir -p /usr/src/app-server

WORKDIR /usr/src/app-server

COPY package.json  /usr/src/app-server
COPY package-lock.json  /usr/src/app-server

RUN npm install --silent


COPY .   /usr/src/app-server

CMD ["npm" , "start"]