'use strict'

const config = require('./config')
const store = require('./store')

const newGame =
// create a new array with 9 spaces (index 8)

const updateGameBoard = = (data) => {
  console.log('update to game is: ', data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
// patch current game

const gameOver =
// save current game to logs for that user

const getGames =
// retrieve all games for that user

module.exports = {
  updateGameBoard,
  gameOver,
  getGames
}
