FROM node:18

WORKDIR /app-1

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start:dev" ]
