// WORD BUILDER MODAL

const wordBuilderPlayBtn = document.getElementById("wordBuilderPlayBtn");

const wordBuilderModal = document.getElementById("wordBuilderModal");

const closeWordBuilderBtn = document.getElementById("closeWordBuilderBtn");

const wordComboValue = document.getElementById("wordComboValue");

wordBuilderPlayBtn.addEventListener("click", () => {
  wordBuilderModal.classList.add("show-modal");

  document.body.classList.add("modal-open");

  wordBuilderScoreValue = 0;

  wordBuilderLivesValue = 3;

  wordBuilderScore.textContent = 0;

  wordBuilderLives.textContent = 3;

  wordBuilderHighest.textContent = wordBuilderHighestValue;

  wordMessage.textContent = "";

  loadWordBuilderQuestion();
});

closeWordBuilderBtn.addEventListener("click", () => {
  clearInterval(wordTimer);

  wordBuilderModal.classList.remove("show-modal");

  document.body.classList.remove("modal-open");
});

// WORD BUILDER ELEMENTS

const wordBuilderScore = document.getElementById("wordBuilderScore");

const wordBuilderHighest = document.getElementById("wordBuilderHighest");

const wordBuilderLives = document.getElementById("wordBuilderLives");

const wordCategory = document.getElementById("wordCategory");

const wordHint = document.getElementById("wordHint");

const wordSlots = document.getElementById("wordSlots");

const letterContainer = document.getElementById("letterBank");

const clearWordBtn = document.getElementById("clearWordBtn");

const removeLetterBtn = document.getElementById("removeLetterBtn");

const submitWordBtn = document.getElementById("submitWordBtn");

const wordMessage = document.getElementById("wordMessage");

const wordBuilderTimer = document.getElementById("wordBuilderTimer");

const wordGameOverScreen = document.getElementById("wordGameOverScreen");

const finalWordScore = document.getElementById("finalWordScore");

const finalHighestScore = document.getElementById("finalHighestScore");

const playAgainWordBtn = document.getElementById("playAgainWordBtn");

const closeGameOverBtn = document.getElementById("closeGameOverBtn");

const wordBuilderGameplay = document.querySelector(".word-gameplay-area");

// WORD BUILDER VARIABLES

let currentWordData = null;

let currentBuiltWord = [];

let wordBuilderScoreValue = 0;

let wordBuilderHighestValue = localStorage.getItem("wordBuilderHighest") || 0;

let wordBuilderLivesValue = 3;

let wordTimer;

let wordTimeLeft = 30;

let wordGameLocked = false;

let usedWordQuestions = [];

let wordComboStreak = 0;

function startWordTimer() {
  clearInterval(wordTimer);

  if (wordBuilderScoreValue >= 300) {
    wordTimeLeft = 15;
  } else if (wordBuilderScoreValue >= 200) {
    wordTimeLeft = 20;
  } else if (wordBuilderScoreValue >= 100) {
    wordTimeLeft = 25;
  } else {
    wordTimeLeft = 30;
  }

  wordBuilderTimer.textContent = wordTimeLeft;

  wordBuilderTimer.classList.remove("warning-time", "danger-time");

  wordTimer = setInterval(() => {
    wordTimeLeft--;

    wordBuilderTimer.textContent = wordTimeLeft;

    wordBuilderTimer.classList.remove("warning-time", "danger-time");

    if (wordTimeLeft <= 10) {
      console.log("WARNING ACTIVE");

      wordBuilderTimer.classList.add("warning-time");
    }

    if (wordTimeLeft <= 5) {
      console.log("DANGER ACTIVE");

      wordBuilderTimer.classList.remove("warning-time");

      wordBuilderTimer.classList.add("danger-time");
    }

    if (wordTimeLeft <= 0) {
      clearInterval(wordTimer);

      loseWordLife();
    }
  }, 1000);
}

function loseWordLife() {
  if (wordBuilderLivesValue > 0) {
    wordBuilderLivesValue--;
  }

  wordBuilderLives.textContent = wordBuilderLivesValue;

  wordMessage.textContent = "Time's up!";

  wordMessage.style.color = "#dc2626";

  if (wordBuilderLivesValue <= 0) {
    endWordGame();

    return;
  }

  setTimeout(() => {
    loadWordBuilderQuestion();

    wordMessage.textContent = "";
  }, 1000);
}

function endWordGame() {
  clearInterval(wordTimer);

  wordGameLocked = true;

  finalWordScore.textContent = wordBuilderScoreValue;

  finalHighestScore.textContent = wordBuilderHighestValue;

  wordGameOverScreen.classList.add("show-game-over");

  wordBuilderGameplay.style.display = "none";

  wordComboStreak = 0;

  wordComboValue.textContent = 0;
}

function loadWordBuilderQuestion() {
  if (usedWordQuestions.length === wordBuilderQuestions.length) {
    usedWordQuestions = [];
  }

  let availableQuestions = wordBuilderQuestions.filter(
    (question) => !usedWordQuestions.includes(question.word),
  );

  const randomIndex = Math.floor(Math.random() * availableQuestions.length);

  currentWordData = availableQuestions[randomIndex];

  usedWordQuestions.push(currentWordData.word);

  wordCategory.textContent = currentWordData.category;

  wordHint.textContent = currentWordData.hint;

  currentBuiltWord = [];

  generateWordSlots();

  generateLetterButtons();

  startWordTimer();
}

function generateWordSlots() {
  wordSlots.innerHTML = "";

  for (let i = 0; i < currentWordData.word.length; i++) {
    const slot = document.createElement("div");

    slot.classList.add("word-slot");

    slot.textContent = "";

    wordSlots.appendChild(slot);
  }
}

function generateLetterButtons() {
  letterContainer.innerHTML = "";

  const shuffledLetters = currentWordData.word
    .split("")
    .sort(() => Math.random() - 0.5);

  while (shuffledLetters.join("") === currentWordData.word) {
    shuffledLetters.sort(() => Math.random() - 0.5);
  }

  shuffledLetters.forEach((letter) => {
    const button = document.createElement("button");

    button.classList.add("letter-btn");

    button.textContent = letter;

    button.addEventListener("click", () => {
      if (wordGameLocked) {
        return;
      }
      if (currentBuiltWord.length >= currentWordData.word.length) {
        return;
      }
      currentBuiltWord.push({
        letter: letter,
        button: button,
      });

      updateWordSlots();

      button.disabled = true;

      button.style.opacity = "0.4";
    });

    letterContainer.appendChild(button);
  });
}

function updateWordSlots() {
  const allSlots = document.querySelectorAll(".word-slot");

  allSlots.forEach((slot, index) => {
    slot.textContent = currentBuiltWord[index]?.letter || "";

    if (currentBuiltWord[index]?.letter) {
      slot.classList.remove("slot-pop");

      void slot.offsetWidth;

      slot.classList.add("slot-pop");
    }
  });
}

function clearCurrentWord() {
  currentBuiltWord = [];

  updateWordSlots();

  const allLetterButtons = document.querySelectorAll(".letter-btn");

  allLetterButtons.forEach((button) => {
    button.disabled = false;

    button.style.opacity = "1";
  });
}

clearWordBtn.addEventListener("click", () => {
  clearCurrentWord();
});

removeLetterBtn.addEventListener("click", () => {
  if (currentBuiltWord.length === 0) {
    return;
  }

  const removedLetter = currentBuiltWord.pop();

  removedLetter.button.disabled = false;

  removedLetter.button.style.opacity = "1";

  updateWordSlots();
});

submitWordBtn.addEventListener("click", () => {
  const joinedWord = currentBuiltWord.map((item) => item.letter).join("");

  if (joinedWord === currentWordData.word) {
    wordGameLocked = true;
    clearInterval(wordTimer);
    wordComboStreak++;

    wordComboValue.textContent = wordComboStreak;

    const comboBonus = wordComboStreak * 10;

    wordBuilderScoreValue += 50 + comboBonus;

    wordBuilderScore.textContent = wordBuilderScoreValue;

    if (wordBuilderScoreValue > wordBuilderHighestValue) {
      wordBuilderHighestValue = wordBuilderScoreValue;

      localStorage.setItem("wordBuilderHighest", wordBuilderHighestValue);

      wordBuilderHighest.textContent = wordBuilderHighestValue;
    }

    wordMessage.textContent = `🔥 Combo x${wordComboStreak}! +${50 + comboBonus} Points`;

    wordMessage.classList.remove("word-pop");

    void wordMessage.offsetWidth;

    wordMessage.classList.add("word-pop");

    wordMessage.style.color = "#16a34a";

    wordSlots.classList.remove("success-glow");

    void wordSlots.offsetWidth;

    wordSlots.classList.add("success-glow");

    setTimeout(() => {
      loadWordBuilderQuestion();

      wordGameLocked = false;

      wordMessage.textContent = "";
    }, 1200);
  } else {
    if (wordBuilderLivesValue > 0) {
      wordBuilderLivesValue--;

      wordComboStreak = 0;

      wordComboValue.textContent = 0;

      if (wordBuilderLivesValue < 0) {
        wordBuilderLivesValue = 0;
      }

      wordBuilderLives.textContent = wordBuilderLivesValue;
    }

    wordMessage.textContent = "Wrong word! Try again.";

    wordMessage.classList.remove("word-pop");

    void wordMessage.offsetWidth;

    wordMessage.classList.add("word-pop");

    setTimeout(() => {
      wordMessage.textContent = "";
    }, 1500);

    wordMessage.style.color = "#dc2626";

    wordSlots.classList.remove("shake-word");

    void wordSlots.offsetWidth;

    wordSlots.classList.add("shake-word");

    clearCurrentWord();

    if (wordBuilderLivesValue <= 0) {
      setTimeout(() => {
        wordGameLocked = true;
        wordSlots.classList.remove("shake-word");
        endWordGame();
      }, 1000);
    }
  }
});

playAgainWordBtn.addEventListener("click", () => {
  wordBuilderLivesValue = 3;

  wordBuilderScoreValue = 0;

  wordBuilderLives.textContent = 3;

  wordBuilderScore.textContent = 0;

  wordGameLocked = false;

  wordGameOverScreen.classList.remove("show-game-over");

  wordBuilderGameplay.style.display = "block";

  wordComboStreak = 0;

  wordComboValue.textContent = 0;

  loadWordBuilderQuestion();
});

closeGameOverBtn.addEventListener("click", () => {
  clearInterval(wordTimer);

  wordGameLocked = false;

  wordBuilderLivesValue = 3;

  wordBuilderScoreValue = 0;

  wordBuilderLives.textContent = 3;

  wordBuilderScore.textContent = 0;

  wordMessage.textContent = "";

  wordGameOverScreen.classList.remove("show-game-over");

  wordBuilderGameplay.style.display = "block";

  wordBuilderModal.classList.remove("show-modal");

  document.body.classList.remove("modal-open");
});

// WORD BUILDER QUESTIONS

const wordBuilderQuestions = [
  // VALUES
  {
    word: "FREEDOM",
    hint: "The state of being free",
    category: "Values",
  },

  {
    word: "HONESTY",
    hint: "Telling the truth",
    category: "Values",
  },

  {
    word: "COURAGE",
    hint: "Being brave even when afraid",
    category: "Values",
  },

  {
    word: "RESPECT",
    hint: "Showing kindness and good manners",
    category: "Values",
  },

  {
    word: "LOYALTY",
    hint: "Staying faithful to someone",
    category: "Values",
  },

  {
    word: "KINDNESS",
    hint: "Being caring to others",
    category: "Values",
  },

  {
    word: "PATIENCE",
    hint: "Waiting calmly without anger",
    category: "Values",
  },

  {
    word: "DISCIPLINE",
    hint: "Following rules and self-control",
    category: "Values",
  },

  {
    word: "JUSTICE",
    hint: "Fair treatment for everyone",
    category: "Values",
  },

  {
    word: "CHARITY",
    hint: "Helping those in need",
    category: "Values",
  },

  // NATURE
  {
    word: "JUNGLE",
    hint: "A thick forest with many trees and animals",
    category: "Nature",
  },

  {
    word: "OCEAN",
    hint: "A very large body of salt water",
    category: "Nature",
  },

  {
    word: "VOLCANO",
    hint: "A mountain that erupts lava",
    category: "Nature",
  },

  {
    word: "DESERT",
    hint: "A very dry place with little rain",
    category: "Nature",
  },

  {
    word: "FOREST",
    hint: "A large area filled with trees",
    category: "Nature",
  },

  {
    word: "ISLAND",
    hint: "Land surrounded by water",
    category: "Nature",
  },

  {
    word: "RIVER",
    hint: "Flowing natural water",
    category: "Nature",
  },

  {
    word: "THUNDER",
    hint: "Loud sound during a storm",
    category: "Nature",
  },

  {
    word: "TORNADO",
    hint: "A violently rotating column of air",
    category: "Nature",
  },

  {
    word: "WATERFALL",
    hint: "Water dropping from a high place",
    category: "Nature",
  },

  // SPACE
  {
    word: "MERCURY",
    hint: "The closest planet to the Sun",
    category: "Space",
  },

  {
    word: "SATURN",
    hint: "The planet famous for its rings",
    category: "Space",
  },

  {
    word: "GALAXY",
    hint: "A huge system of stars",
    category: "Space",
  },

  {
    word: "NEPTUNE",
    hint: "A blue planet far from the Sun",
    category: "Space",
  },

  {
    word: "ASTEROID",
    hint: "A rocky object orbiting the Sun",
    category: "Space",
  },

  {
    word: "COMET",
    hint: "An icy object with a glowing tail",
    category: "Space",
  },

  {
    word: "ORBIT",
    hint: "The path of a planet around a star",
    category: "Space",
  },

  {
    word: "ROCKET",
    hint: "Vehicle used for space travel",
    category: "Space",
  },

  {
    word: "TELESCOPE",
    hint: "Tool used to observe stars",
    category: "Space",
  },

  {
    word: "ASTRONAUT",
    hint: "A person trained to travel in space",
    category: "Space",
  },

  // TECHNOLOGY
  {
    word: "COMPUTER",
    hint: "An electronic device for processing data",
    category: "Technology",
  },

  {
    word: "KEYBOARD",
    hint: "Used to type letters into a computer",
    category: "Technology",
  },

  {
    word: "MONITOR",
    hint: "Displays images from a computer",
    category: "Technology",
  },

  {
    word: "SOFTWARE",
    hint: "Programs used by computers",
    category: "Technology",
  },

  {
    word: "INTERNET",
    hint: "Global network connecting computers",
    category: "Technology",
  },

  {
    word: "DATABASE",
    hint: "An organized collection of data",
    category: "Technology",
  },

  {
    word: "PROGRAM",
    hint: "A set of coded instructions",
    category: "Technology",
  },

  {
    word: "ROUTER",
    hint: "Device that provides internet connection",
    category: "Technology",
  },

  // SCHOOL
  {
    word: "SCIENCE",
    hint: "Study of the natural world",
    category: "School",
  },

  {
    word: "ALGEBRA",
    hint: "Branch of math using symbols",
    category: "School",
  },

  {
    word: "HISTORY",
    hint: "Study of past events",
    category: "School",
  },

  {
    word: "ENGLISH",
    hint: "Language subject in school",
    category: "School",
  },

  {
    word: "PROJECT",
    hint: "A task assigned to students",
    category: "School",
  },

  {
    word: "LIBRARY",
    hint: "Place with many books",
    category: "School",
  },

  {
    word: "TEACHER",
    hint: "Person who educates students",
    category: "School",
  },

  {
    word: "STUDENT",
    hint: "A person who studies",
    category: "School",
  },
];
