
<!-- LAYOUT------------->

-Nice and clean white background
-Heading with title top-middle with margin above
-Game Board centered and slightly below center line
-Sign-in/sign-out dropdown menu in the top right, fixed
  -Turns into hamburger menu with a "user" icon when switching to mobile
-List signed-in user and "player 2" at the bottom with their wins for this session
-Add a button to "get player stats" on the user side of the scoreboard (or in the top right dropdown )
-Show the stats in terms of wins, losses, draws, and games played
-


<!--GAME ENGINE-------->

-Make an empty game board with 9 cells
-On page entry, ask person to either "sign-in" or "sign-up" if they don't have an account
-Make the person who signs in always the X character
-Randomize whether user or player 2 goes first at the beginning of each game
-Show below the board whose turn it (highlight around their name maybe)

-Have each cell be clickable, sparking an event
-Have clicking a button enter either "X" or "O" depending on whose turn it is, change turn after click
-Each cell on the board has an index number, ranging 0-8, left to right, top to bottom
-Each cell can only have 3 states: 1 (for X placements), -1 (for O placements), or undefined (empty)
-Each time a cell is clicked and a value/character entered, it can no longer be clicked (clicking does nothing)
-After each click, check the potential winning index combinations
  -Always a group of 3 indexes
  -3 horizontal conditions, 3 vertical conditions, and 2 diagonal conditions, for a total of 8 possible
  -If any of these 8 conditions, when their values are added, equals either 3 or -3, the game ends
  -If the sum is 3, player X wins (user). If the sum is -3, player O wins (player 2)
-Whenever the game ends, announce who won with a popup
-When game ends, make board un-clickable until "New Game" button is clicked
-When game ends, log the game result to the db, and log whether X won to the users' stats
-Optional: Make a button to "Restart Game" mid-game, without logging any of the data
-If the game board is full of values, contains no empty(undefined) cells, but nobody has won, then it is a "Draw"
-If it's a draw, announce the draw, log "draw" to user's data

-When game ends, giver user option to "Start New Game" (button)
-

<!-- GAME API -->

-Request a new game/board (empty array with 9 spots)
-After each move, update the game board



<!--BONUS/OPTIONAL-------->

-Allow user to choose which character they want, automatically assigning other character to Player 2
-Allow two users to sign in on different devices and each log in and play each other
-
