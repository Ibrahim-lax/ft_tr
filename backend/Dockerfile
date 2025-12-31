FROM node:20-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build the NestJS app
RUN npm run build

EXPOSE 3000

# Start in dev mode
CMD [ "npm", "run", "start:dev" ]

