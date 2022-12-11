import fs from 'fs-extra'

export {
  getRandomService
}

/**
 * @param {string|undefined} minLength
 * @param {string|undefined} maxLength
 * @returns {{randomWord: string|undefined}}
 */
async function getRandomService (minLength, maxLength) {
  const letters = 'abcdefghijklmnñopqrstuvwxyz'
  const randomLetter = letters[Math.floor(Math.random() * letters.length)]
  const obj = await fs.readJSON(`assets/${randomLetter}.json`)
  const min = minLength && minLength > 0 ? Number(minLength) : 1
  const max = maxLength && maxLength > 0 ? Number(maxLength) : Infinity
  const words = obj[randomLetter].filter(word => word.length >= min && word.length <= max)
  const randomWord = words[Math.floor(Math.random() * words.length)]

  return { randomWord }
}
