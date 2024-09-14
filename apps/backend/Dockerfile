FROM node:20.9.0-alpine

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install 

COPY . .

ARG PORT
ENV PORT $PORT

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]
