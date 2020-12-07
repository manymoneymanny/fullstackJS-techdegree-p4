/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

document.getElementById('qwerty').addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    }
});