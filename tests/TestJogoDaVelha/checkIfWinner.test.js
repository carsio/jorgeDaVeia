const JogoDaVelha = require("../../JogoDaVelha");

test('x ganhou na diagonal principal', () => {
    let state = [
        'x', '', '',
        '', 'x', '',
        '', '', 'x',
    ];
    let game = new JogoDaVelha(1, state);
    expect(game.checkIfWinner()).toBe(true);
});

test('ninguem ganhou', () => {
    let state = [
        'x', '', '',
        '', 'o', '',
        '', '', 'x',
    ];
    let game = new JogoDaVelha(1, state);
    expect(game.checkIfWinner()).toBe(false);
});

test('o ganhou na diagonal secundaria', () => {
    let state = [
        'x', '', 'o',
        '', 'o', '',
        'o', '', 'x',
    ];
    let game = new JogoDaVelha(1, state);
    expect(game.checkIfWinner()).toBe(true);
});

test('x ganou na horizontal', () => {
    let state = [
        'x', 'x', 'x',
        '', 'o', '',
        'o', '', 'x',
    ];
    let game = new JogoDaVelha(1, state);
    expect(game.checkIfWinner()).toBe(true);
});


test('nao ha ganhador', () => {
    let state = [
        '', '', '',
        '', 'o', '',
        'o', '', 'x',
    ];
    let game = new JogoDaVelha(1, state);
    expect(game.checkIfWinner()).toBe(false);
});

test('o ganou na vertical', () => {
    let state = [
        'o', 'x', 'x',
        'o', 'o', '',
        'o', 'x', 'x',
    ];
    let game = new JogoDaVelha(1, state);
    expect(game.checkIfWinner()).toBe(true);
});

test('x ganhou na vertical', () => {
    let state = [
        'o', 'x', 'x',
        'x', 'o', 'x',
        'o', 'x', 'x',
    ];
    let game = new JogoDaVelha(1, state);
    expect(game.checkIfWinner()).toBe(true);
});