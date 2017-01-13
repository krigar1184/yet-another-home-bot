FROM node:alpine

RUN mkdir -p /usr/src/app
COPY package.json /usr/src/app
RUN cd /usr/src/app && npm install

COPY bot/ usr/src/app/bot
COPY config/ usr/src/app/config
COPY service /usr/src/app/service
COPY util /usr/src/app/util
COPY index.js /usr/src/app

WORKDIR /usr/src/app
CMD ["npm", "run", "watch"]

