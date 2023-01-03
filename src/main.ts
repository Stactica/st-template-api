import path from 'path'
import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import redoc from 'redoc-express'

const prisma = new PrismaClient()

export async function main() {
  console.log('Connecting to database...')
  await prisma.$connect()
  console.log('Prisma Connected.')
  dotenv.config()

  const app: Express = express()
  const port = process.env.PORT

  app.use(express.static(path.join(__dirname, 'public')))

  app.get(
    '/docs',
    redoc({
      title: 'API Docs',
      specUrl: '/swagger.json',
    }),
  )

  app.get('/version', (req: Request, res: Response) => {
    return res.send({
      version: require('../package.json').version,
    })
  })

  app.get('/', (req: Request, res: Response) => {
    return res.send('Express + TypeScript Server')
  })

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
  })

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
