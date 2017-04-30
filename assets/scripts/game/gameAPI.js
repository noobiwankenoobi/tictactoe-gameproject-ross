'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createNew = () => {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = (index, value, isOver) => {
  return $.ajax({
    url: config.apiOrigin + '/games/ ' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': isOver
      }
    }
  })
}

const getSingleGame = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/games/' + data.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token }
  })
}

const getAllGames = () => {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token }
  })
}

module.exports = {
  createNew,
  updateGame,
  getAllGames,
  getSingleGame
}
