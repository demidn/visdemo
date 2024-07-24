FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=development
COPY . .
RUN npx nx build api --prod

FROM node:alpine
WORKDIR /app
COPY package*.json ./
COPY wait-for-it.sh ./
COPY apps/api/docker-entrypoint.sh ./
RUN apk add --no-cache bash
RUN npm install -g pm2@latest
RUN npm install --only=production

COPY --from=builder /app/dist/apps/api ./build
RUN chmod +x ./wait-for-it.sh ./docker-entrypoint.sh

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["pm2-runtime","/app/build/main.js"]
