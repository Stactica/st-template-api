import { Request, Response, Router } from 'express'

export default function example() {
  const router = Router()

  router.all('/', (_req: Request, res: Response) => {
    return res.status(501).send('Not implemented')
  })

  router.get('/hello', (_req: Request, res: Response) => {
    return res.status(200).send('world')
  })

  return router
}
