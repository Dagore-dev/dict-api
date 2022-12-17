import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { spanishWordsRouter } from './v1/routes/spanishWordsRouter.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => response.sendFile(process.cwd() + '/views/index.html'))

app.use('/api/v1/spanishWords', spanishWordsRouter)

app.all('*', (request, response) => {
  const path = request.baseUrl + request.path

  response.status(404)
  response.send({ message: `${path} resource not found` })
})

const port = process.env.PORT ?? '3000'
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
