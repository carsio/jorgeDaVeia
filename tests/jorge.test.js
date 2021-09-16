
const { JorgeDaVeia } = require("../JorgeDaVeia");


let state = [
    'x', '', '',
    '', 'x', '',
    '', '', 'x',
];

let state2 = [
    'x', '', '',
    '', 'o', '',
    '', '', 'x',
];

let state3 = [
    'x', '', 'o',
    '', 'o', '',
    'o', '', 'x',
];

var game = new JorgeDaVeia(state);
var game2 = new JorgeDaVeia(state2);
var game3 = new JorgeDaVeia(state3);

test('', () => {
    expect(game.checkIfWinnerDiag()).toBe(true);
})



test('', () => {
    expect(game2.checkIfWinnerDiag()).toBe(false);
})


test('', () => {
    expect(game3.checkIfWinnerDiag()).toBe(true);
})