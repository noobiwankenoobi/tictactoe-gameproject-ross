'use strict'

const store = require('../../store.js')
const gameTemplate = require()
const gameMoves = require()
const updateView = require()
const moveSucess = require()


// gameEvents are triggering these
const clearGameBoard = function () {

}

const readyToPlay = function () {

}

const hideGameBoard = function () {
  $('.gameboard-table').hide()
}

// const moveSuccess = function() {
//   if(gameModel.newGame.id !== null && gameTemplate.newGame.id !== undefined){
//     gameMoves.refreshCounts();
//     gameMoves.refreshGameInfoTable(gameTemplate.newGame);
//   }
// };

// const updateView = function(){
//   gameMoves.refreshCounts();
//   gameMoves.refreshGameInfoTable(gameTemplate.newGame);
//   gameMoves.redrawBoard();
//   gameTemplate.gameOver = gameChecks.checkGame(gameTemplate.newGame);
//   gameTemplate.newGame.over = gameChecks.checkGame(gameTemplate.newGame);
//   gameMoves.updatePlayerTurnAnnouncement();

  // show modal if game over
if (gameTemplate.gameOver === true) {
  $('#game-update-modal').text(gameTemplate.winnerString)
  $('#gameUpdateModal').modal('show')
}

// const updateGames = function(data){
//
//   // set objects
//   if(data !== undefined && data.games !== undefined){
//     app.games = data.games;
//     $('#stats-player-id').text(app.user.id);
//     $('#stats-games').text(app.games.length);
//     $('#stats-finished-games').text(app.finished_games.length);
//
//     // get detailed results
//     let xWins = 0;
//     let oWins = 0;
//     let ties = 0;
//     let inProgress = 0;
//
//     let gameCount = app.games.length;
//     for(let i = 0; i < gameCount; i++){
//       switch(gameChecks.checkGameOutcome(app.games[i])){
//         case "X":
//           xWins += 1;
//           break;
//         case "O":
//           oWins += 1;
//           break;
//         case "tie":
//           ties += 1;
//           break;
//         default:
//           inProgress += 1;
//           break;
//       }
//     }
//
//     $('#x-wins').text(xWins);
//     $('#o-wins').text(oWins);
//     $('#ties').text(ties);
//     $('#in-progress').text(inProgress);
//
//   }
// };



module.exports = {
  clearGameBoard,
  readyToPlay,
  hideGameBoard
}
