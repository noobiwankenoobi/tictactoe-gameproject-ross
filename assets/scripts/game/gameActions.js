'use strict'

const api = require('./gameAPI')
const gameEngine = require('./gameEngine.js')
const ui = require('./gameUI')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateGame = function () {
  event.preventDefault()
  api.createNew()
    .then(gameEngine.newGameSuccess)
    .catch(gameEngine.newGameFailure)
}

const onGetAllGames = function () {
  event.preventDefault()
  api.getAllGames()
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

const onGetOneGame = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getOneGame(data)
    .then(ui.oneGameSuccess)
    .catch(ui.oneGameFailure)
}

const onGameCellClick = function (event) {
  const cell = event.target
  const gameOver = gameEngine.gameOver
  if ($(cell).text() === '' && gameOver === false) {
    $(cell).text(gameEngine.turn)
    if (gameEngine.turn === 'x') {
      gameEngine.turn = 'o'
    } else {
      gameEngine.turn = 'x'
    }
  }
}

const addHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
  $('#get-all-games').on('submit', onGetAllGames)
  $('#get-one-game').on('submit', onGetOneGame)
  $('.game-cell').on('click', onGameCellClick)
}

module.exports = {
  addHandlers
}
