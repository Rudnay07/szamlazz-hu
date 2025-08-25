FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=builder /app/dist/szamlazz-fe/browser/* /usr/share/nginx/html

EXPOSE 80
