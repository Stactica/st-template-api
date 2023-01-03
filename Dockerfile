FROM node:18-alpine

WORKDIR /app

ADD . /app

RUN npm install -g pnpm

RUN pnpm install
RUN pnpm run build

CMD pnpm start

