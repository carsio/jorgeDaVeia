const JogoDaVelha = require("../../JogoDaVelha");

test('ganhou na jogada 8', () => {
    let state = [
        'x', '', 'o',
        '', 'x', 'o',
        '', '', '',
    ];
    let game = new JogoDaVelha(1, state);
    expect(game.checkIfWinner()).toBe(false);
    game.mark(8, 'o');
    expect(game.checkIfWinner()).toBe(true);
});


test('movimento invalido', () => {
    let state = [
        'x', '', 'o',
        '', 'x', 'o',
        '', '', '',
    ];
    let game = new JogoDaVelha(1, state);
    expect(() => game.mark(0, 'Y')).toThrow('Simbolo invalido');
});


test('simbolo invalido', () => {
    let state = [
        'x', '', 'o',
        '', 'x', 'o',
        '', '', '',
    ];
    let game = new JogoDaVelha(1, state);
    expect(() => game.mark(0, '')).toThrow('Simbolo invalido');
});

test('posicao ja utilizada', () => {
    let state = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];
    let game = new JogoDaVelha(1, state);
    expect(() => {
        game.mark(0, 'o');
        game.mark(0, 'x');
    }).toThrow('Posicao ja marcada');
});

test('mesmo jogardor 2 vezes', () => {
    let state = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];
    let game = new JogoDaVelha(1, state);
    expect(() => {
        game.mark(0, 'o');
        game.mark(1, 'o');
    }).toThrow('O mesmo jogador não pode jogar 2 vezes');
});