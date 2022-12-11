// eslint-disable-next-line
import express from 'express'
import { getRandomService } from '../services/spanishWordsService.js'

export {
  getRandomController
}

/**
 * @param {express.Request} request
 * @param {express.Response} response
 */
async function getRandomController (request, response) {
  const { query } = request
  const { minLength, maxLength } = query
  const obj = await getRandomService(minLength, maxLength)

  if (obj.randomWord != null) {
    response.send(obj)
  } else {
    response.status(404)
    response.send({ message: 'Not found' })
  }
}
