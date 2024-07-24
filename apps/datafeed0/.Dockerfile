FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=development --silent
COPY . .
RUN npx nx build datafeed0 --prod

FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g pm2@latest
RUN npm install --only=production --silent

COPY --from=builder /app/dist/apps/datafeed0 ./build

ENTRYPOINT ["pm2-runtime","/app/build/main.js"]

