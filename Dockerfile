FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm config set cache /app/.npm-cache && npm install

COPY . .

EXPOSE 3000

USER app
CMD ["npm", "start"]
