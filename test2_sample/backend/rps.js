const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

const players = [];  // the sockets of two players
const player_chosen = [false, false]; // the chosen value of two players
let count = 0;  // the number of player
let round = 1;  // the round index

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  players[count++] = ws;

  if (count == 2) {
    players[0].send(`Round ${round}`);
    players[1].send(`Round ${round}`);
  }

  ws.on('message', function message(data) {
    // only process message event if there are enough players
    if (count < 2) {
      return;
    }
    data = `${data}`;  // convert to string
    
    for (let i = 0; i < 2; i++) {
      // determine the sender
      if (ws == players[i]) {
        // the sender has not sent before?
        if (player_chosen[i] == false) {
          player_chosen[i] = data;
        }
      }
    }
    // if two players have chosen
    // announce result and start next round
    if (player_chosen[0] != false && player_chosen[1] != false) {
      if (player_chosen[0] == player_chosen[1]) {
        // it's a draw
        // reset
        player_chosen[0] = player_chosen[1] = false;
        players[0].send(`Round ${round}: Draw. Round ${round + 1}`);
        players[1].send(`Round ${round}: Draw. Round ${round + 1}`);
      } else if (
        // player 1 wins
        (player_chosen[0] == 'R' && player_chosen[1] == 'S') || 
        (player_chosen[0] == 'S' && player_chosen[1] == 'P') ||
        (player_chosen[0] == 'P' && player_chosen[1] == 'R')
      ) {
        player_chosen[0] = player_chosen[1] = false;
        players[0].send(`Round ${round}: Player 1 wins. Round ${round + 1}`);
        players[1].send(`Round ${round}: Player 1 wins. Round ${round + 1}`);
      } else {
        player_chosen[0] = player_chosen[1] = false;
        players[0].send(`Round ${round}: Player 2 wins. Round ${round + 1}`);
        players[1].send(`Round ${round}: Player 2 wins. Round ${round + 1}`);
      }
      round++;
    }
  });
});
