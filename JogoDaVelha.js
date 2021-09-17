 class JogoDaVelha
 {  id;
    maxPlayers = 2;
    symbols = [ 'x' , 'o']
    markers ;
    players = [];
    turn = {
        lastMark : '',
        count : 0,
    };
    
    constructor(id, markers) {
        this.id = id;   
        this.markers = markers;
    };

    startGame(){
        console.log('Starting Game', this.id);
    
    }

    updateGame({playerId, position}){ 
        const playerIndex = this.players.findIndex(p=> p.id == playerId);
        
        console.log(this.players);
        console.log(playerIndex);
        console.log(this.players[playerIndex]);
        const marker = this.players[playerIndex]['marker'];
        this.mark(position, marker);
        console.log('update game by player', playerId);

    }

    get players(){
        return this.players;
    }

    addPlayer(player) {
        if(player.player +1 > this.maxPlayers)
            throw new Error("Cannot add player. Maximium of players reached");
        const playerAlReadAdded = this.players.some(p=> p.id === player.id);
        if(playerAlReadAdded){
            return;
        }
        player.marker = this.symbols[this.players.length]
        this.players.push(player);
        console.log(`Player ${player.id} added into game`);
    }
    
    checkIfWinnerDiag() {
        let winInMainDiag = this.checkeEquals([this.markers[0],this.markers[4],this.markers[8]])
        let winInSecondaryDiag = this.checkeEquals([this.markers[2],this.markers[4],this.markers[6]])

        return winInMainDiag || winInSecondaryDiag;
    }

    checkIfWinnerHorizontal() {
        for (let index = 0; index < 8; index += 3) {
            if (this.checkeEquals([this.markers[index], this.markers[index + 1], this.markers[index + 2]]))
                return true;
        }

        return false;
    }

    checkIfWinnerVertical() {
        for (let index = 0; index < 8; index++) {
            if (this.checkeEquals([this.markers[index], this.markers[index + 3], this.markers[index + 6]]))
                return true;
        }

        return false;
    }

    checkIfWinner() {
        return this.checkIfWinnerDiag() || this.checkIfWinnerHorizontal() || this.checkIfWinnerVertical();
    }
    
    checkeEquals(array) {
        if (array.some(x => x == '')) return false;
        return array.every((checkedItem, i, array) => array[0] == checkedItem);
    }

    mark(index, value) {       
        if (this.isInvalidSymbol(value))
            throw new Error('Simbolo invalido');

        if (this.isPlaying2Times(value))
            throw new Error('O mesmo jogador não pode jogar 2 vezes');

        if (this.markers[index] != '')
            throw new Error('Posicao ja marcada');

        this.incrementTurn(value);
        this.markers[index] = value;

    }

    isInvalidSymbol(value) {
        return !this.symbols.some(x => x == value);
    }

    isPlaying2Times(value) {
        return this.turn.count > 0 && value == this.turn.lastMark
    }

    incrementTurn(value) {
        this.turn.lastMark = value;
        this.turn.count++;
    }
    setLastMark(value) {
        this.turn.lastMark = value;
    }

}

module.exports = JogoDaVelha;