FROM node:alpine

RUN mkdir -p /usr/src/app
COPY package.json /usr/src/app

COPY bot/ usr/src/app/bot
COPY config/ usr/src/app/config
COPY service/ /usr/src/app/service
COPY util/ /usr/src/app/util
COPY tsconfig.json /usr/src/app
COPY tslint.json /usr/src/app
COPY index.ts /usr/src/app

WORKDIR /usr/src/app
RUN npm install && npm run lint && npm run build

CMD ["npm", "run", "start"]

