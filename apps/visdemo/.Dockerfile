FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install

CMD ["npx", "nx", "run", "visdemo:dev"]
