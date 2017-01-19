FROM node:alpine

RUN mkdir -p /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app
RUN npm install && npm run build

CMD ["npm", "run", "start"]

