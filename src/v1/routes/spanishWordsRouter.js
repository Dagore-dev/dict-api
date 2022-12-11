import { Router } from 'express'
import { getRandomController } from '../../controllers/spanishWordsController.js'

export const spanishWordsRouter = Router()

spanishWordsRouter
  .get('/random', getRandomController)
