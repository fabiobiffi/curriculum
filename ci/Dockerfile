FROM node:lts-alpine

# make the 'curriculum' folder the current working directory
WORKDIR /curriculum

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json .

# install project dependencies
RUN npm install

EXPOSE 8080