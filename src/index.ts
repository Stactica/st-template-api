if (process.env.NODE_ENV === 'development') {
  const swaggerAutogen = require('swagger-autogen')
  const outputFile = './public/swagger.json'
  const endpointsFiles = ['./main.ts']
  const config = {}

  swaggerAutogen()(outputFile, endpointsFiles, config).then(async () => {
    await import('./main')
  })
} else {
  import('./main')
}
