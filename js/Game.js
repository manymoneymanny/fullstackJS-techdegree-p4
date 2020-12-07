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
 }