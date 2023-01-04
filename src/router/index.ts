import { Request, Response, Router } from 'express'
import redoc from 'redoc-express'

import example from './example'

export const router = Router()

router.get(
  '/docs',
  redoc({
    title: 'API Docs',
    specUrl: '/swagger.json',
  }),
)

router.use('/example', example)

router.get('/version', (_req: Request, res: Response) => {
  return res.send({
    version: require('../package.json').version,
  })
})

router.get('/health', (_req: Request, res: Response) => {
  return res.status(200).send('Healthy')
})

router.use('/', (req: Request, res: Response) => {
  return res.status(404).send('Not found')
})

export default router
