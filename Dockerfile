FROM node:13.3.0-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --quiet && \
    npm cache clean --force

COPY . .

EXPOSE 5001

CMD npm run start
