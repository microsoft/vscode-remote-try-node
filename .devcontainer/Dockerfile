FROM node:16.20.2-alpine3.18

WORKDIR /app

COPY package*.json ./
RUN npm config set cache /app/.npm-cache && npm install

COPY . .

USER app

EXPOSE 8000

CMD ["npm", "start"]
