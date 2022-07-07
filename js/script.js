// Global Variables

//ul for guessed letters
const guessedLetters = document.querySelector(".guessed-letters");
//guess button
const guessButton = document.querySelector(".guess");
//guess text input
const guessInput = document.querySelector(".letter");
//word in progress
const wordInProgress = document.querySelector(".word-in-progress");
//remaining guesses
const remainingGuesses = document.querySelector(".remaining");
//span inside remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining span");
//message on letter guess
const guessMessage = document.querySelector(".message");
//play again btn
const playAgainButton = document.querySelector(".play-again");
//testing word
const word = "magnolia";

// ------------------------------------------------------------------------------
// Function to Add Placeholders for Each Letter

const updateWordsInProgress = function (word) {
  const wordArray = word.split("");
  console.log(wordArray);
  for (let index = 0; index < wordArray.length; index++) {
    wordArray[index] = "●";
  }
  console.log(wordArray);
  wordInProgress.innerText = wordArray.join("");
};

updateWordsInProgress(word);

// ------------------------------------------------------------------------------
// Button Event listener & Key value capture

guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  const key = guessInput.value;
  guessInput.value = "";
  console.log(key);
});
