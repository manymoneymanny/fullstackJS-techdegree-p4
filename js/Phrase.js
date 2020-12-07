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
        // select phrase div
        const phraseDiv = document.getElementById('phrase');
        // break this.phrase into an array of its characters including letters and spaces
        const characters = this.phrase.split('')
        // create li element for each character according to example_phrase_html.txt template
        characters.forEach(character => {
            // if character is letter, use 'letter' class and appropriate letter class
            // if character is space, use 'space' class
            let li;
            if (character !== ' ') {
                li = `<li class="hide letter ${character}">${character}</li>`;
            } else {
                li = `<li class="space"> </li>`;
            }
            // add/append li elements to board
            phraseDiv.firstElementChild.innerHTML += li;
        });
        
    }
 }