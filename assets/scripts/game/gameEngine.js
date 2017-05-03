'use strict'

const api = require('../game/gameAPI.js')
const ui = require('../game/gameUI.js')


const checkGame = () => {}

const isFree = (idNum, arr) => {
  if (arr[idNum] === '') {
    return true
  } else {
    return false
  }
}



let turn = 'x'
let gameOver = false

module.exports = {
  addBoardHandlers,
  onNewGame,
  newGameSuccess,
  newGameFailure,
  winsArray,
  gameOver,
  turn
}
