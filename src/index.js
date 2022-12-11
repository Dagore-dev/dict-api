import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { spanishWordsRouter } from './v1/routes/spanishWordsRouter.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1/spanishWords', spanishWordsRouter)

const port = process.env.PORT ?? '3000'
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
