FROM node:14.15.5-alpine
WORKDIR /src
COPY package.json .
RUN npm install
COPY . . 
EXPOSE 4200 49153
CMD npm run start