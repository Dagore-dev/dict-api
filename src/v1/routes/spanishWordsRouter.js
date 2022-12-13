import { Router } from 'express'
import { getRandomController, notAllowed } from '../../controllers/spanishWordsController.js'

export const spanishWordsRouter = Router()

spanishWordsRouter
  .route('/random')
  .get(getRandomController)
  .all(notAllowed)
