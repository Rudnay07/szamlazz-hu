FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.25-alpine


RUN rm /etc/nginx/conf.d/default.conf


COPY nginx.conf /etc/nginx/conf.d/default.conf


COPY --from=builder /app/dist/szamlazz-fe/browser/* /usr/share/nginx/html

# Port megadása
EXPOSE 80
