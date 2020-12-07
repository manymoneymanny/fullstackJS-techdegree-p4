/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const phraseDiv = document.getElementById('phrase');
        const characters = this.phrase.split('')
        characters.forEach(character => {
            let li;
            if (character !== ' ') {
                li = `<li class="hide letter ${character}">${character}</li>`;
            } else {
                li = `<li class="space"> </li>`;
            }
            phraseDiv.firstElementChild.innerHTML += li;
        });
    }

    /**
    * Checks if passed letter is in phrase
    * @param {string} letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param {string} letter - Letter to display
    */
    showMatchedLetter(letter) {
        document.querySelectorAll(`.${letter}`).forEach(
            matchedLetter => matchedLetter.classList.replace('hide', 'show')
        );
    }
 }