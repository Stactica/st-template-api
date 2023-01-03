# ST Template API

![Build Status](https://github.com/Stactica/st-template-api/actions/workflows/test.yaml/badge.svg?branch=main)

## Requirements

- Docker
- NodeJS

## Install

```bash
npm install
docker compose pull
```

## Run

```bash
docker compose up -d mongo
npm run dev
```

## Build

```bash
npm run build
```

## Migrations

```bash
npx prisma migrate dev --name init
```

## Seeds

```bash
npm run seed # TODO - mongo connection for seeds is not working
```

## Test

```bash
npm test
# npm test:ci # testing with coverage for continuous integration
```

## TODO

- Mongo seed debug
- Prisma package publishing
- Depencency checker
- 1-click deploy
