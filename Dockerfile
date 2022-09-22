FROM node:14

WORKDIR /usr/src/dist

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]