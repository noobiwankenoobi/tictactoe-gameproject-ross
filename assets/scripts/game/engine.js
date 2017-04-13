'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('../gameAPI/game-api')
const ui = require('../gameAPI/game-ui.js')



const = startGame

const = newGame

const = changeTurn

const = switchPlayer
// possibly same as switchPlayer??

const = checkForWinner

const gameBoard = ['','','','','','','','']

const winningRows = {
  condition1: [gameBoard[0],gameBoard[1],gameBoard[2]],
  condition2: [gameBoard[3],gameBoard[4],gameBoard[5]],
  condition3: [gameBoard[6],gameBoard[7],gameBoard[8]],
  condition4: [gameBoard[0],gameBoard[3],gameBoard[6]],
  condition5: [gameBoard[1],gameBoard[4],gameBoard[7]],
  condition6: [gameBoard[2],gameBoard[5],gameBoard[8]],
  condition7: [gameBoard[0],gameBoard[4],gameBoard[8]],
  condition8: [gameBoard[6],gameBoard[4],gameBoard[2]]
}
// should this be an array with 8 arrays inside it
