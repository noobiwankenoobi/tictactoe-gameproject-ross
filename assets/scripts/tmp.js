index.js

$(() => {
  gameEvents.addHandlers()
})
Calls
gameEvents.js

const addHandlers = () => {
  $('#create-game').on('submit', onCreateGame) // when browser hears on submit event on
}
// Which when clicked triggers the function in
// gameEvents.js

const onCreateGame = function (event) {
  console.log('on create game in ran!!!!!')
  event.preventDefault()
  // $('#board').show()
  gameApi.createGame()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}
Which then calls
gameApi.js

const createGame = function (data) { // we don't need a data parameter here
  alert('1')
  console.log('inside createGame, data is :', data)
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {} // empty data object
  })
}
At that point, data IS undefined. You did not pass any argument to the createGame function and you WANT to pass an empty data object so you don't need or want data to have a value.

If the API call is successful or fails it will call either

.then(gameUi.createGameSuccess)
.catch(gameUi.createGameFailure)
If it was successful then the gameUi.createGameSuccess function will have an argument that is the game object.

Please try to console.log() the data inside the createGameSuccess() function.
What do you get?
