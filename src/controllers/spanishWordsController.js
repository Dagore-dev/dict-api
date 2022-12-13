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
  const [min, max] = getFilteredLimits(minLength, maxLength)
  const obj = await getRandomService(min, max)

  if (obj.randomWord != null) {
    response.send(obj)
  } else {
    response.status(404)
    response.send({ message: 'Not found' })
  }
}

/**
 * @param {string} minLength
 * @param {string} maxLength
 * @returns {number[]}
 */
function getFilteredLimits (minLength, maxLength) {
  const min = minLength && minLength > 0 ? Number(minLength) : 1
  const max = maxLength && maxLength > 0 ? Number(maxLength) : Infinity

  return [min, max]
}
