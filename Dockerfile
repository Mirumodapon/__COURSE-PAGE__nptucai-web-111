FROM node:16-alpine3.14
WORKDIR /app

COPY . .
RUN yarn install
RUN yarn build

EXPOSE 5000
VOLUME [ "/app/build/API" ]

ENTRYPOINT [ "yarn", "server" ]