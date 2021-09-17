const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const JogoDaVelha = require('./JogoDaVelha');
const Player = require('./Player');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/jogo', (req, res) => {
    res.sendFile(__dirname + '/jogo.html');
});

let game = new JogoDaVelha(0, Array(9).fill('') );

io.on('connection', (socket) => {
    socket.on('start-game', (playerId) => {
      game.addPlayer(new Player(playerId));
      console.log(game.markers);
      io.emit('start-game', game.markers);
    });

    socket.on('update-game', (message)=>{
        console.log('send data');
        try {
            game.updateGame(message);
            const isWinner = game.checkIfWinner();
            
            if(isWinner) {
              io.emit('game-over', message);
            }
            
            if(!isWinner && game.turn.count == 9){
              io.emit('draw-game', message);

            }

            io.emit('update-game', game.markers);
        } catch (error) {
            io.emit('error', error.message);
            console.log(error);
        }
    });
    socket.on('reset-game',()=>{
      const players = [... game.players]
      game = new JogoDaVelha(0, Array(9).fill('') );
      players.forEach(p=>game.addPlayer(p))
      io.emit('update-game', game.markers);
    })
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
