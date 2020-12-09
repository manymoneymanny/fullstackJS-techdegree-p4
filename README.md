# fullstackJS-techdegree-p4
My fourth Techdegree — Full Stack JavaScript project

A browser-based guessing game called "Phrase Hunter", build with object-oriented JavaScript architecture based on two classes (Game and Phrase) with the following functionality:
-  the app initializes a new Game object on clicking the 'Start Game' button.
-  the Game object generates a random Phrase object from an array of possible phrases stored within itself.
-  the Phrase object adds the phrase to the display dynamically, each letter or space in the Phrase takes a separate element in the page.
-  the letter elements are hidden, the user then plays by:
    - clicking a letter represented on an onscreen keyboard; or,
    - pressing a letter key on his own keyboard.
-   either actions trigger a turn, with the interaction being handled by both the Game object and the Phrase object, as follows:    
    - the Game object calls the Phrase object to check whether the letter selected by the user is on the phrase:
        -   if it is,  the Game object calls the Phrase object to show all instances of the matched letter on the display. The corresponding onscreen key changes to a blue-ish color and is disabled.
        -   if it is not, a life is removed. The onscreen key changes to a orange-ish color and is disabled.
    - the Game object checks whether the game is won/lost or continues at this point:
        -   if the whole phrase was revealed, the game is won.
        -   if all lives have been exhausted, the game is lost.
        -   if none of the above occur, the game continues.
- either a win/lose situation triggers the Game to dynamically execute a game over sequence:
    - if the game is won, a congratulatory message is displayed.
    - if the game is lost, a consolation message is displayed.
- on the 'Game Over' state, the user has the option to start a new game, and all the changes on page are reset and a new random phrase is generated.

The following functionality has been added for **extra credit**:
-   **a listener for keydowns** that replicates the functionality of the onscreen keyboard.
-   **CSS personalization** from the template provided by [Team Treehouse](https://github.com/treehouse):
    -   the standard font was replaced by 'Inconsolata', a monospaced font, and the `font-family` property was updated accordingly.
    -   the color palette for `.start`, `.win`, and `.lose` classes was updated through global CSS variables on the `:root` pseudo-class.
