const JorgeDaVeia = class JorgeDaVeia {
    state = [];

    constructor(state) {        
        this.state = state;
    };

    

    checkIfWinnerDiag() {
        let winInMainDiag = this.checkeEquals([this.state[0],this.state[4],this.state[8]])
        let winInSecondaryDiag = this.checkeEquals([this.state[2],this.state[4],this.state[6]])

        return winInMainDiag || winInSecondaryDiag;
    }
    
    checkeEquals(array){
        return array.every((checkedItem, i, array)=> array[0] == checkedItem);
    }

}

module.exports = JorgeDaVeia;