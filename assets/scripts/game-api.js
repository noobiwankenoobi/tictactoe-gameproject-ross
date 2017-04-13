'use strict'

const config = require('./config')
const store = require('./store')


// how to tell API to create new game
// POST	/games	games#create
// body 'n/a'
const newGame = () => {
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  })
}

// hot to tell API to get all the "over" games associated with user
// GET	/games/	games#show
// body n/a
const getGames = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/games[?over=]/:' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  })
}

// games#index
// body 'n/a'
const getGame = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/games/:' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  })
}

// PATCH	`/games/:id`
// 'empty' body
const joinGame = () => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/games/:' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  })
}

// how you update the game board
// PATCH	/games/:id	games#update
// body = 'game delta'
const updateGame = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/games/:' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// GET	/games/:id/watch	games#watch  ??


GET	/games	 games#index
POST	/games	 games#create
GET	/games/:id	 games#show
PATCH	/games/:id	 games#update
GET	/games/:id/watch	 games#watch




module.exports = {
  newGame,
  getGames,
  getGame,
  joinGame,
  updateGame
}
