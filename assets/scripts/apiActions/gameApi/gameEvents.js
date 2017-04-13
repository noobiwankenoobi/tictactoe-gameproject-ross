'use strict'

const getFormFields = require('../../../../lib/get-form-fields.js')
const gameUi = require('./gameUi.js')
const gameApi = require('./gameApi.js')

const onNewGame = function (event) {
  event.preventDefault()
    .then(gameApi.newGame)
    .then(gameUi.clearGameBoard)
    .then(gameUi.readyToPlay)
    // initiate whose turn it is
}

// const onUpdateGameBoard = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   gameApi.updateGame(data)
//     .then(ui.updateGameBoardSuccess)
//     .catch(ui.updateGameBoardFailure)
// }

const addHandlers = () => {
  $('#start-new-game-button').on('click', onNewGame);
}

  // $('#game-cell').on('click', onUpdateGameBoard)
module.exports = {
  addHandlers
}
