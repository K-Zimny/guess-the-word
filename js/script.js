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
//guessed letters
const guessedLetters = [];
//-------------------------------------------------

// Display our symbols as placeholders for the chosen word's letters
//-------------------------------------------------
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
//-------------------------------------------------
guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();
  const textInputGuess = letterInput.value;
  // console.log(textInputGuess);
  const goodGuess = validateInput(textInputGuess);
  if (goodGuess) {
    makeGuess(textInputGuess);
  }
  letterInput.value = "";
});

//check player input
//-------------------------------------------------

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    // Is the input empty?
    message.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    // Did you type more than one letter?
    message.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    // Did you type a number, a special character or some other non letter thing?
    message.innerText = "Please enter a letter from A to Z.";
  } else {
    // We finally got a single letter, omg yay
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter, silly. Try again.";
  } else {
    guessedLetters.push(guess);
    // console.log(guessedLetters);
    playerGuesses();
    updateWordInProgress(guessedLetters);
  }
};

//show guessed letters
//-------------------------------------------------

const playerGuesses = function () {
  guessedLettersElement.innerHTML = "";
  for (const letter of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    guessedLettersElement.append(li);
  }
};

const updateWordInProgress = function (guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  const revealWord = [];
  for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
      revealWord.push(letter.toUpperCase());
    } else {
      revealWord.push("●");
    }
  }
  // console.log(revealWord);
  wordInProgress.innerText = revealWord.join("");
  checkIfWin();
};

const checkIfWin = function () {
  if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
  }
};
