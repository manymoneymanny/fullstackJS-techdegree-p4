/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/**
 * Starts a new game on click of the 'Start Game' button
 */
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

/**
 * Makes '.key' buttons interactive on click
 */
document.getElementById('qwerty').addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    }
});

/**
 * Allows for the interactivity of clicking '.key' buttons onscreen to be mirrored with the user keyboard
 */
document.addEventListener('keydown', event => {
    document.querySelectorAll(`.key`).forEach(element => {
        if (element.innerHTML === event.key) {
            if ( !element.classList.contains('wrong') && !element.classList.contains('chosen') ) {
                game.handleInteraction(element);
            }
        }
    });
});