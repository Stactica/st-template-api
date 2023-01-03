import { PrismaClient } from '@prisma/client'
import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
const prisma = new PrismaClient()

export async function main() {
  console.log('Hello World')
  await prisma.$connect()
  console.log('Prisma Connected')
  dotenv.config()

  const app: Express = express()
  const port = process.env.PORT

  app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
  })

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
  })
  // ...
  return true
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

// console.log('Hello World')
// // await prisma.$connect()
// console.log('Prisma Connected')
// dotenv.config()

// const app: Express = express()
// const port = process.env.PORT

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server')
// })

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
// })
