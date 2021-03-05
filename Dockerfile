FROM node:15.8.0 as builder
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "run", "build"]

FROM nginx
EXPOSE 80
COPY --from=builder /app/public /var/www/nickarcuri.com/html

