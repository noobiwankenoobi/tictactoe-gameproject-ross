'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const ui = require('./game-ui.js')
const api = require('./game-api.js')

const onUpdateGameBoard = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateGameBoard(data)
    .then(ui.updateGameBoardSuccess)
    .catch(ui.updateGameBoardFailure)
}

const onGameOver = function

const onGetGames = function

const gameEventHandlers = () => {
  $('#game-cell').on('click', onUpdateGameBoard)
}

module.exports = {
  gameEventHandlers
}
