/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

    /**
    * Creates phrases for use in game
    * @returns {Array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase("A bird in the hand is worth two in the bush"),
            new Phrase("A penny saved is a penny earned"),
            new Phrase("Actions speak louder than words"),
            new Phrase("Birds of a feather flock together"),
            new Phrase("It is always darkest before the dawn")
        ];
        return phrases;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none'
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param {HTMLButtonElement} button - The clicked button element
    */
    handleInteraction(button) {
        // - The clicked/chosen letter must be captured.
        const letter = button.innerHTML;
        // - The clicked letter must be checked against the phrase for a match.
        if ( this.activePhrase.checkLetter(letter) ) {
            // - If there’s a match, the letter must be displayed on screen instead of the placeholder.
            button.classList.add('chosen');
            button.disabled = true;
            this.activePhrase.showMatchedLetter(letter);
            if ( this.checkForWin() ) {
                this.gameOver(true);
            }
        } else {
            // - If there’s no match, the game must remove a life from the scoreboard.
            button.classList.add('wrong');
            button.disabled = true;
            this.removeLife();
        }
        // - The game should check if the player has won the game by revealing all of the letters in the phrase or if the game is lost because the player is out of lives.
        // - If the game is won or lost, a message should be displayed on screen.
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        return document.querySelectorAll('.hide').length === 0? true: false;
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed++;
        const tries = document.querySelectorAll('.tries');
        const i = 5 - this.missed;
        tries[i].firstElementChild.src = 'images/lostHeart.png';
        if(this.missed === 5){
            this.gameOver(false);
        }
    }

    /**
    * Displays game over message
    * Resets the gameboard in preparation for another game
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const gameOverMessage = document.getElementById('game-over-message');
        overlay.style.display = 'inherit';
        if(gameWon) {
            gameOverMessage.innerHTML = "You got this! Phrase hunt successful!";
            overlay.classList.replace('start', 'win');
        } else {
            gameOverMessage.innerHTML = "Oh, no! You're out of lives. Better luck next time!";
            overlay.classList.replace('start', 'lose');
        }
        const phraseList = document.getElementById('phrase').firstElementChild;
        while ( phraseList.hasChildNodes() ) {
            phraseList.removeChild(phraseList.firstChild);
        }
        document.querySelectorAll('.key').forEach(element => {
            element.disabled = false;
            element.classList.remove('chosen', 'wrong');
            element.classList.add('key');
        });
        document.querySelectorAll('.tries').forEach(element => {
            element.firstElementChild.src = 'images/liveHeart.png';
        });
    }
 }