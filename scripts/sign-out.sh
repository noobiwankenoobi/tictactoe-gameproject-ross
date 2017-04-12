#!/bin/bash

curl --include --request DELETE http://localhost:4741/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN"

# data output from curl doesn't have a trailing newline
echo



BAhJIiVhMWViNjZhNjViNGQzNWU2NDU2YTE3Y2ZiNTJmODFkMwY6BkVG--cc031074a463897c4cf679d0eae78ec16a18852d


curl --include --request DELETE http://localhost:4741/sign-out/1 \
  --header "Authorization: Token token=BAhJIiVhMWViNjZhNjViNGQzNWU2NDU2YTE3Y2ZiNTJmODFkMwY6BkVG--cc031074a463897c4cf679d0eae78ec16a18852d
"
