
const players = require('fillthis')
const games = require('fillthis')

let currentPlayer = players.players[0]
let otherPlayer = players.players[1]
let currentSymbol = players.symbols[currentPlayer]
let otherSymbol = players.symbols[otherPlayer]

let activeGame = false
let gameOver = false

let turnCount = 0
let xCount = 0
let oCount = 0

let xSessionWins = 0
let oSessionWins = 0
let sessionTies = 0

let winner = null
let winnerString = ''

let newGame = {
  id: null,
  cells: null,
  over: null,
  player_x: null,
  player_o: null
}

let gameBoard = {
  'cell-00': '',
  'cell-01': '',
  'cell-02': '',
  'cell-10': '',
  'cell-11': '',
  'cell-12': '',
  'cell-20': '',
  'cell-21': '',
  'cell-22': ''
}

const resetGame = function () {

  currentPlayer = players.players[0]
  otherPlayer = players.players[1]
  currentSymbol = players.symbols[currentPlayer]
  otherSymbol = players.symbols[otherPlayer]

  activeGame = false
  gameOver = false

  turnCount = 0
  xCount = 0
  oCount = 0

  winner = null
  winnerString = ''

  newWatcher = null


  playerJoined = false

  newGame = {
    id: null,
    cells: null,
    over: null,
    player_x: null,
    player_o: null
  }

  gameBoard = {
    'cell-00': '',
    'cell-01': '',
    'cell-02': '',
    'cell-10': '',
    'cell-11': '',
    'cell-12': '',
    'cell-20': '',
    'cell-21': '',
    'cell-22': ''
  }
  return true
}

module.exports = {
  currentPlayer,
  currentSymbol,
  otherPlayer,
  otherSymbol,
  players,
  newGame,
  gameBoard,
  activeGame,
  gameOver,
  boardTrans,
  maxTurnCount,
  turnCount,
  winner,
  winnerString,
  xCount,
  oCount,
  restartGame,
  xSessionWins,
  oSessionWins,
  sessionTies
}
