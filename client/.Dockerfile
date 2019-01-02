FROM node:10.14.0-alpine

RUN mkdir -p /usr/src/app-client

WORKDIR /usr/src/app-client

COPY package.json  /usr/src/app-client
COPY package-lock.json  /usr/src/app-client

ENV NODE_ENV=value
ENV PUBLIC_URL=value
ENV GA=value

RUN npm install --silent
RUN npm install react-scripts -g --silent


COPY .   /usr/src/app-client

CMD ["npm" , "build"]