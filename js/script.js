//Letters that the user has guessed
const guessedLettersElement = document.querySelector(".guessed-letters");
//guess button for playing game
const guessLetterButton = document.querySelector(".guess");
//input for letter
const letterInput = document.querySelector(".letter");
//the current word in progress
const wordInProgress = document.querySelector(".word-in-progress");
//Amount of remaining guesses left
const remainingGuessesElement = document.querySelector(".remaining");
//span for amount of remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining span");
//game message
const message = document.querySelector(".message");
//play again button
const playAgainButton = document.querySelector(".play-again");
//test word
const word = "magnolia";
//-------------------------------------------------

// Display our symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    // console.log(letter);
    placeholderLetters.push("●");
    // console.log(placeholderLetters);
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

// Button event listener

guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();
  const textInputGuess = letterInput.value;
  console.log(textInputGuess);
  letterInput.value = "";
});
