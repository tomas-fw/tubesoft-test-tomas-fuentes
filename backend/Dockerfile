FROM node

WORKDIR /app

COPY package.json .

RUN yarn 

COPY . .

EXPOSE 4000

CMD [ "yarn","start" ]