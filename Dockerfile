FROM node:current-alpine3.24
WORKDIR /app
COPY . .
EXPOSE 4000
CMD ["node" , "server.js"]
