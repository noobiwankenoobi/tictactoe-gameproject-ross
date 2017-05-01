'use strict'

const api = require('./gameAPI')
const board = require('./gameEngine.js')
const ui = require('./gameUI')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateGame = function () {
  event.preventDefault()
  api.createNew()
    .then(board.newGameSuccess)
    .catch(board.newGameFailure)
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

const addGameHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
  $('#get-all-games').on('submit', onGetAllGames)
  $('#get-one-game').on('submit', onGetOneGame)
}

module.exports = {
  addGameHandlers
}
