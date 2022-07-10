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
//guessed letters array that the player has guessed
const guessedLettersArray = [];

// ------------------------------------------------------------------------------
// Function to Add Placeholders for Each Letter

const updateWordsInProgress = function (word) {
  const wordArray = word.split("");
  // console.log(wordArray);
  for (let index = 0; index < wordArray.length; index++) {
    wordArray[index] = "●";
  }
  // console.log(wordArray);
  wordInProgress.innerText = wordArray.join("");
};

updateWordsInProgress(word);

// ------------------------------------------------------------------------------
// Button Event listener & Key value capture

guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  const key = guessInput.value;
  guessInput.value = "";
  // console.log(key);

  if (validatePlayerInput(key)) {
    console.log(key);
    makeGuess(key);
  }
});

// ------------------------------------------------------------------------------
// Check Players input

const validatePlayerInput = function (input) {
  const acceptedLetters = /[a-zA-Z]/;

  if (input === "") {
    console.log("Input is empty");
    guessMessage.innerText = "Input is empty";
  } else if (input.length > 1) {
    console.log("Please only input one character");
    guessMessage.innerText = "Please only input one character";
  } else if (!input.match(acceptedLetters)) {
    console.log("Please enter acceptable letters");
    guessMessage.innerText = "Please enter acceptable letters";
  } else {
    return input;
  }
};

// ------------------------------------------------------------------------------
// Function to capture input

const makeGuess = function (letter) {
  const uppercaseLetter = letter.toUpperCase();
  if (guessedLettersArray.includes(uppercaseLetter)) {
    console.log("Already includes this letter");
    guessMessage.innerText = "Already includes this letter";
  } else {
    guessedLettersArray.push(uppercaseLetter);
    console.log(guessedLettersArray);
  }
};
