const gameModal = document.getElementById("gameModal");

const playButtons = document.querySelectorAll(".math-play-btn");

const closeModalBtn = document.getElementById("closeModal");

playButtons.forEach((button) => {
  button.addEventListener("click", () => {
    gameModal.classList.add("show-modal");

    document.body.classList.add("modal-open");

    resetGame();
  });
});

const elementaryQuestions = [
  {
    question: "15 - 8 = ?",
    answers: ["2", "14", "-3", "7"],
    correct: "7",
  },

  {
    question: "6 × 4 = ?",
    answers: ["24", "23", "25", "31"],
    correct: "24",
  },

  {
    question: "20 + 15 = ?",
    answers: ["30", "35", "40", "45"],
    correct: "35",
  },

  {
    question: "9 × 3 = ?",
    answers: ["18", "27", "21", "24"],
    correct: "27",
  },

  {
    question: "50 ÷ 5 = ?",
    answers: ["5", "10", "15", "20"],
    correct: "10",
  },

  {
    question: "14 + 28 = ?",
    answers: ["42", "48", "36", "50"],
    correct: "42",
  },

  {
    question: "81 ÷ 9 = ?",
    answers: ["7", "8", "9", "6"],
    correct: "9",
  },
  {
    question: "11 + 9 = ?",
    answers: ["18", "19", "20", "21"],
    correct: "20",
  },

  {
    question: "7 × 8 = ?",
    answers: ["54", "56", "58", "60"],
    correct: "56",
  },

  {
    question: "90 ÷ 10 = ?",
    answers: ["8", "9", "10", "11"],
    correct: "9",
  },

  {
    question: "13 + 17 = ?",
    answers: ["28", "29", "30", "31"],
    correct: "30",
  },

  {
    question: "6 × 9 = ?",
    answers: ["48", "54", "56", "58"],
    correct: "54",
  },

  {
    question: "100 - 45 = ?",
    answers: ["45", "50", "55", "60"],
    correct: "55",
  },

  {
    question: "8 + 15 = ?",
    answers: ["21", "22", "23", "24"],
    correct: "23",
  },

  {
    question: "72 ÷ 8 = ?",
    answers: ["7", "8", "9", "10"],
    correct: "9",
  },

  {
    question: "5 × 11 = ?",
    answers: ["45", "50", "55", "60"],
    correct: "55",
  },

  {
    question: "40 + 29 = ?",
    answers: ["67", "68", "69", "70"],
    correct: "69",
  },
];

const highSchoolQuestions = [
  {
    question: "12² = ?",
    answers: ["124", "144", "132", "142"],
    correct: "144",
  },

  {
    question: "√169 = ?",
    answers: ["11", "12", "13", "14"],
    correct: "13",
  },

  {
    question: "5x = 45, x = ?",
    answers: ["5", "6", "7", "9"],
    correct: "9",
  },

  {
    question: "7³ = ?",
    answers: ["343", "243", "453", "373"],
    correct: "343",
  },

  {
    question: "25% of 200 = ?",
    answers: ["25", "40", "50", "75"],
    correct: "50",
  },
  {
    question: "15² = ?",
    answers: ["205", "215", "225", "235"],
    correct: "225",
  },

  {
    question: "√81 = ?",
    answers: ["7", "8", "9", "10"],
    correct: "9",
  },

  {
    question: "9x = 72, x = ?",
    answers: ["6", "7", "8", "9"],
    correct: "8",
  },

  {
    question: "30% of 150 = ?",
    answers: ["35", "40", "45", "50"],
    correct: "45",
  },

  {
    question: "8³ = ?",
    answers: ["256", "512", "128", "64"],
    correct: "512",
  },

  {
    question: "√196 = ?",
    answers: ["12", "13", "14", "15"],
    correct: "14",
  },

  {
    question: "6x = 54, x = ?",
    answers: ["7", "8", "9", "10"],
    correct: "9",
  },

  {
    question: "40% of 250 = ?",
    answers: ["90", "100", "110", "120"],
    correct: "100",
  },
];

const seniorHighQuestions = [
  {
    question: "Solve: 2x + 5 = 15",
    answers: ["5", "10", "15", "20"],
    correct: "5",
  },

  {
    question: "Derivative of x² = ?",
    answers: ["x", "2x", "x²", "2"],
    correct: "2x",
  },

  {
    question: "sin(90°) = ?",
    answers: ["0", "1", "-1", "90"],
    correct: "1",
  },

  {
    question: "3² + 4² = ?",
    answers: ["12", "25", "49", "18"],
    correct: "25",
  },

  {
    question: "log₁₀(100) = ?",
    answers: ["1", "2", "10", "100"],
    correct: "2",
  },
  {
    question: "cos(0°) = ?",
    answers: ["0", "1", "-1", "90"],
    correct: "1",
  },

  {
    question: "Solve: x - 7 = 12",
    answers: ["17", "18", "19", "20"],
    correct: "19",
  },

  {
    question: "Derivative of 3x² = ?",
    answers: ["3x", "6x", "9x", "6"],
    correct: "6x",
  },

  {
    question: "log₁₀(1000) = ?",
    answers: ["1", "2", "3", "10"],
    correct: "3",
  },

  {
    question: "tan(45°) = ?",
    answers: ["0", "1", "-1", "45"],
    correct: "1",
  },

  {
    question: "2² + 5² = ?",
    answers: ["29", "25", "21", "35"],
    correct: "29",
  },

  {
    question: "Derivative of x³ = ?",
    answers: ["x²", "2x", "3x²", "3x"],
    correct: "3x²",
  },

  {
    question: "Solve: 3x = 27",
    answers: ["6", "7", "8", "9"],
    correct: "9",
  },
];

const questionPools = {
  elementary: elementaryQuestions,

  highschool: highSchoolQuestions,

  seniorhigh: seniorHighQuestions,
};

const scienceStages = {
  plantsAnimals: [
    {
      question: "Which animal is known as man's best friend?",
      answers: ["Cat", "Dog", "Rabbit", "Bird"],
      correct: "Dog",
    },

    {
      question: "What do plants need to make food?",
      answers: ["Moonlight", "Water", "Plastic", "Metal"],
      correct: "Water",
    },

    {
      question: "Which part of the plant absorbs water?",
      answers: ["Leaves", "Flower", "Roots", "Stem"],
      correct: "Roots",
    },

    {
      question: "Which animal lays eggs?",
      answers: ["Dog", "Cat", "Chicken", "Cow"],
      correct: "Chicken",
    },

    {
      question: "Which animal gives us milk?",
      answers: ["Dog", "Cow", "Cat", "Bird"],
      correct: "Cow",
    },

    {
      question: "Which animal can fly?",
      answers: ["Fish", "Bird", "Snake", "Rabbit"],
      correct: "Bird",
    },

    {
      question: "What do plants need to grow?",
      answers: ["Plastic", "Water", "Metal", "Sand"],
      correct: "Water",
    },

    {
      question: "Which animal lives in water?",
      answers: ["Fish", "Cat", "Chicken", "Horse"],
      correct: "Fish",
    },

    {
      question: "Which part of the plant absorbs water?",
      answers: ["Leaf", "Flower", "Root", "Fruit"],
      correct: "Root",
    },

    {
      question: "Which animal says 'meow'?",
      answers: ["Dog", "Cow", "Cat", "Duck"],
      correct: "Cat",
    },
  ],

  earthEnvironment: [
    {
      question: "What causes day and night on Earth?",
      answers: [
        "Revolution around Sun",
        "Rotation on its axis",
        "Moon phases",
        "Solar wind",
      ],
      correct: "Rotation on its axis",
    },

    {
      question: "What planet do we live on?",
      answers: ["Mars", "Earth", "Venus", "Jupiter"],
      correct: "Earth",
    },

    {
      question: "What gas do humans breathe in?",
      answers: ["Carbon Dioxide", "Nitrogen", "Hydrogen", "Oxygen"],
      correct: "Oxygen",
    },

    {
      question: "Which layer protects Earth from harmful sunlight?",
      answers: ["Ocean", "Ozone Layer", "Clouds", "Mountains"],
      correct: "Ozone Layer",
    },

    {
      question: "What causes rain?",
      answers: ["Clouds", "Rocks", "Sand", "Smoke"],
      correct: "Clouds",
    },

    {
      question: "Which season is usually the coldest?",
      answers: ["Summer", "Spring", "Winter", "Autumn"],
      correct: "Winter",
    },

    {
      question: "What do trees release into the air?",
      answers: ["Plastic", "Oxygen", "Smoke", "Dust"],
      correct: "Oxygen",
    },

    {
      question: "Which natural resource gives us light during the day?",
      answers: ["Moon", "Sun", "Stars", "Rain"],
      correct: "Sun",
    },

    {
      question: "What should we do to protect nature?",
      answers: ["Litter", "Recycle", "Burn trees", "Waste water"],
      correct: "Recycle",
    },
  ],

  chemistry: [
    {
      question: "What is the chemical symbol for water?",
      answers: ["O2", "CO2", "H2O", "NaCl"],
      correct: "H2O",
    },

    {
      question: "What state of matter is ice?",
      answers: ["Liquid", "Gas", "Solid", "Plasma"],
      correct: "Solid",
    },

    {
      question: "Boiling water produces what?",
      answers: ["Smoke", "Steam", "Dust", "Sand"],
      correct: "Steam",
    },

    {
      question: "What do we call a substance mixed evenly?",
      answers: ["Mixture", "Solution", "Gas", "Metal"],
      correct: "Solution",
    },

    {
      question: "What do we call water when it freezes?",
      answers: ["Steam", "Ice", "Rain", "Cloud"],
      correct: "Ice",
    },

    {
      question: "Which state of matter can spread in the air?",
      answers: ["Solid", "Liquid", "Gas", "Metal"],
      correct: "Gas",
    },

    {
      question: "What happens when water is heated?",
      answers: ["Freezes", "Melts", "Evaporates", "Breaks"],
      correct: "Evaporates",
    },

    {
      question: "Which material is attracted to magnets?",
      answers: ["Wood", "Plastic", "Iron", "Paper"],
      correct: "Iron",
    },

    {
      question: "What do we use to measure temperature?",
      answers: ["Compass", "Thermometer", "Scale", "Clock"],
      correct: "Thermometer",
    },

    {
      question: "Which of these is a liquid?",
      answers: ["Stone", "Water", "Smoke", "Ice"],
      correct: "Water",
    },
  ],

  biology: [
    {
      question: "Which organ pumps blood?",
      answers: ["Lungs", "Brain", "Heart", "Liver"],
      correct: "Heart",
    },

    {
      question: "How many lungs does a human have?",
      answers: ["1", "2", "3", "4"],
      correct: "2",
    },

    {
      question: "What part of the body helps us think?",
      answers: ["Heart", "Brain", "Liver", "Kidney"],
      correct: "Brain",
    },

    {
      question: "Which blood cells fight infection?",
      answers: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
      correct: "White Blood Cells",
    },

    {
      question: "Which body part helps us breathe?",
      answers: ["Heart", "Lungs", "Stomach", "Brain"],
      correct: "Lungs",
    },

    {
      question: "Which organ helps us think?",
      answers: ["Kidney", "Heart", "Brain", "Liver"],
      correct: "Brain",
    },

    {
      question: "What carries blood through the body?",
      answers: ["Bones", "Muscles", "Veins", "Hair"],
      correct: "Veins",
    },

    {
      question: "How many eyes do most humans have?",
      answers: ["1", "2", "3", "4"],
      correct: "2",
    },

    {
      question: "Which sense organ helps us hear?",
      answers: ["Eyes", "Ears", "Nose", "Tongue"],
      correct: "Ears",
    },

    {
      question: "What do humans need to survive?",
      answers: ["Plastic", "Air", "Metal", "Smoke"],
      correct: "Air",
    },
  ],

  physics: [
    {
      question: "What force pulls objects down?",
      answers: ["Magnetism", "Electricity", "Gravity", "Wind"],
      correct: "Gravity",
    },

    {
      question: "What travels faster than sound?",
      answers: ["Light", "Rain", "Car", "Train"],
      correct: "Light",
    },

    {
      question: "What energy comes from the Sun?",
      answers: ["Wind", "Solar", "Water", "Chemical"],
      correct: "Solar",
    },

    {
      question: "Which tool measures temperature?",
      answers: ["Barometer", "Thermometer", "Scale", "Compass"],
      correct: "Thermometer",
    },

    {
      question: "What force keeps us on the ground?",
      answers: ["Wind", "Magnetism", "Gravity", "Light"],
      correct: "Gravity",
    },

    {
      question: "Which travels faster?",
      answers: ["Sound", "Light", "Train", "Bicycle"],
      correct: "Light",
    },

    {
      question: "What do we call energy from moving air?",
      answers: ["Solar", "Wind", "Water", "Heat"],
      correct: "Wind",
    },

    {
      question: "Which object can produce light?",
      answers: ["Moon", "Sun", "Stone", "Paper"],
      correct: "Sun",
    },

    {
      question: "What happens when you push an object?",
      answers: ["It freezes", "It may move", "It disappears", "It melts"],
      correct: "It may move",
    },

    {
      question: "What is used to see tiny objects?",
      answers: ["Telescope", "Microscope", "Compass", "Scale"],
      correct: "Microscope",
    },
  ],
};

const questionText = document.getElementById("questionText");

const answersGrid = document.getElementById("answersGrid");

let currentQuestion = {};

let currentMathQuestions = [];

let currentMathQuestionIndex = 0;

let currentDifficulty = "elementary";

function shuffleMathArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function generateMathQuestions() {
  currentMathQuestions = shuffleMathArray([
    ...questionPools[currentDifficulty],
  ]);

  currentMathQuestionIndex = 0;
}

function loadQuestion() {
  if (currentMathQuestionIndex >= currentMathQuestions.length) {
    generateMathQuestions();
  }

  currentQuestion = currentMathQuestions[currentMathQuestionIndex];

  questionText.textContent = currentQuestion.question;

  answersGrid.innerHTML = "";

  resultText.textContent = "";

  resultText.style.color = "#0b1f5c";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");

    button.classList.add("answer-btn");

    button.textContent = answer;

    if (answer === currentQuestion.correct) {
      button.dataset.correct = "true";
    }

    answersGrid.appendChild(button);
  });
}

const resultText = document.querySelector(".answer-result");

const scoreValue = document.getElementById("scoreValue");

const streakValue = document.getElementById("streakValue");

const timeValue = document.getElementById("timeValue");

const playerHealth = document.querySelector(".player-fill");

const enemyHealth = document.querySelector(".enemy-fill");

const playerHealthText = document.getElementById("playerHealthText");

const enemyHealthText = document.getElementById("enemyHealthText");

const endScreen = document.getElementById("endScreen");

const endTitle = document.getElementById("endTitle");

const finalScore = document.getElementById("finalScore");

const finalStreak = document.getElementById("finalStreak");

const playAgainBtn = document.getElementById("playAgainBtn");

const closeEndBtn = document.getElementById("closeEndBtn");

const difficultyButtons = document.querySelectorAll(".difficulty-btn");

const startBattleBtn = document.getElementById("startBattleBtn");

const playerCharacter = document.querySelector(".player-character");

const enemyCharacter = document.querySelector(".enemy-character");

const questionSection = document.getElementById("questionSection");

const battleTop = document.getElementById("battleTop");

const modalContent = document.getElementById("modalContent");

const scienceModal = document.getElementById("scienceModal");

const sciencePlayBtn = document.querySelector(".science-play-btn");

const scienceCloseBtn = document.getElementById("scienceCloseBtn");

const scienceStageButtons = document.querySelectorAll(".science-stage-btn");

const scienceQuestionText = document.getElementById("scienceQuestionText");

const scienceAnswersGrid = document.getElementById("scienceAnswersGrid");

const scienceStageTitle = document.getElementById("scienceStageTitle");

const scienceQuestionCounter = document.getElementById(
  "scienceQuestionCounter",
);

const scienceProgressFill = document.getElementById("scienceProgressFill");

const scienceLivesText = document.getElementById("scienceLivesText");

let currentScienceStage = "plantsAnimals";

let currentScienceQuestionIndex = 0;

let currentScienceQuestions = [];

let scienceLives = 4;

let unlockedScienceStages = JSON.parse(
  localStorage.getItem("scienceUnlockedStages"),
) || ["plantsAnimals"];

updateScienceStageLocks();

function shuffleScienceArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function loadScienceQuestion() {
  const currentQuestion = currentScienceQuestions[currentScienceQuestionIndex];

  scienceQuestionText.textContent = currentQuestion.question;

  scienceQuestionCounter.textContent =
    "Question " +
    (currentScienceQuestionIndex + 1) +
    " of " +
    currentScienceQuestions.length;

  const answerButtons = document.querySelectorAll(".science-answer-btn");

  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];

    if (currentQuestion.answers[index] === currentQuestion.correct) {
      button.dataset.correct = "true";
    } else {
      button.dataset.correct = "false";
    }

    button.disabled = false;

    button.style.transform = "scale(1)";

    button.classList.remove(
      "correct-click",
      "wrong-click",
      "correct-answer",
      "wrong-answer",
    );
  });

  const progressPercent =
    ((currentScienceQuestionIndex + 1) / currentScienceQuestions.length) * 100;

  scienceProgressFill.style.width = progressPercent + "%";
}

function showScienceEndScreen(title) {
  const scienceEndScreen = document.getElementById("scienceEndScreen");

  const scienceEndTitle = document.getElementById("scienceEndTitle");

  const scienceNextStageBtn = document.getElementById("scienceNextStageBtn");

  scienceEndTitle.textContent = title;

  if (title === "Stage Failed!") {
    scienceNextStageBtn.style.display = "none";
  } else if (currentScienceStage === "physics") {
    scienceEndTitle.textContent = "Adventure Complete!";

    scienceNextStageBtn.style.display = "none";
  } else {
    scienceNextStageBtn.style.display = "inline-block";
  }

  scienceEndScreen.classList.add("show-science-end-screen");
}

function showScienceLockedPopup() {
  const existingPopup = document.querySelector(".science-locked-popup");

  if (existingPopup) {
    existingPopup.remove();
  }

  const popup = document.createElement("div");

  popup.className = "science-locked-popup";

  popup.innerHTML = `
    <div class="science-locked-popup-card">
      <h2>Stage Locked 🔒</h2>
      <p>
        Complete the previous stage first
        to continue your adventure.
      </p>

      <button id="closeScienceLockedPopup">
        OK
      </button>
    </div>
  `;

  document.body.appendChild(popup);

  document
    .getElementById("closeScienceLockedPopup")
    .addEventListener("click", () => {
      popup.remove();
    });
}

let score = 0;

let bestStreak = 0;

let playerHP = 100;

let enemyHP = 100;

let timeLeft = 15;

let timer;

let gameStarted = false;

difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("locked-science-stage")) {
      showScienceLockedPopup();
      return;
    }
    difficultyButtons.forEach((btn) => {
      btn.classList.remove("active-difficulty");
    });

    button.classList.add("active-difficulty");

    currentDifficulty = button.dataset.difficulty;

    document.getElementById("currentDifficultyLabel").textContent =
      button.textContent + " Mode";
  });
});

function lockDifficultyButtons() {
  difficultyButtons.forEach((button) => {
    button.disabled = true;

    button.classList.add("locked-difficulty");
  });
}

function unlockDifficultyButtons() {
  difficultyButtons.forEach((button) => {
    button.disabled = false;

    button.classList.remove("locked-difficulty");
  });
}

function showEndScreen(titleText) {
  clearInterval(timer);

  endTitle.textContent = titleText;

  finalScore.textContent = "Final Score: " + score;

  finalStreak.textContent = "Best Streak: " + bestStreak;

  endScreen.classList.add("show-end-screen");
}

function startTimer() {
  clearInterval(timer);

  if (currentDifficulty === "elementary") {
    timeLeft = 15;
  } else if (currentDifficulty === "highschool") {
    timeLeft = 12;
  } else if (currentDifficulty === "seniorhigh") {
    timeLeft = 9;
  }

  timeValue.textContent = timeLeft;

  timeValue.classList.remove("warning-time", "danger-time");

  timer = setInterval(() => {
    timeLeft--;

    timeValue.textContent = timeLeft;

    timeValue.classList.remove("warning-time", "danger-time");

    if (timeLeft <= 10) {
      timeValue.classList.add("warning-time");
    }

    if (timeLeft <= 5) {
      timeValue.classList.remove("warning-time");

      timeValue.classList.add("danger-time");
    }

    if (timeLeft <= 0) {
      clearInterval(timer);

      if (currentDifficulty === "elementary") {
        playerHP -= 15;
      } else if (currentDifficulty === "highschool") {
        playerHP -= 20;
      } else if (currentDifficulty === "seniorhigh") {
        playerHP -= 30;
      }

      if (playerHP < 0) {
        playerHP = 0;
      }

      playerHealth.style.width = playerHP + "%";

      playerHealthText.textContent = playerHP + " / 100";

      resultText.textContent = "Time's up! Enemy attacked you.";

      resultText.style.color = "#ef4444";

      loadQuestion();

      startTimer();
    }
  }, 1000);
}

function resetGame() {
  score = 0;

  gameStarted = false;

  unlockDifficultyButtons();

  bestStreak = 0;

  playerHP = 100;

  enemyHP = 100;

  document.querySelector(".question-box").classList.add("hidden-question");

  scoreValue.textContent = score;

  streakValue.textContent = bestStreak;

  playerHealth.style.width = "100%";

  enemyHealth.style.width = "100%";

  playerHealthText.textContent = "100 / 100";

  enemyHealthText.textContent = "100 / 100";

  resultText.textContent = "";

  answersGrid.innerHTML = "";

  questionText.textContent = "";

  timeValue.textContent = "--";

  modalContent.scrollTo({
    top: 0,

    behavior: "smooth",
  });

  timeValue.classList.remove("warning-time", "danger-time");

  startBattleBtn.style.display = "inline-block";

  document.getElementById("currentDifficultyLabel").style.display = "none";

  startBattleBtn.disabled = false;

  clearInterval(timer);

  startBattleBtn.classList.remove("hide-start-btn");

  document.getElementById("currentDifficultyLabel").style.display = "none";

  startBattleBtn.style.display = "inline-block";
}

answersGrid.addEventListener("click", (event) => {
  if (!event.target.classList.contains("answer-btn")) {
    return;
  }

  const button = event.target;

  if (button.disabled) {
    return;
  }

  const isCorrect = button.dataset.correct === "true";

  const allButtons = document.querySelectorAll(".answer-btn");

  allButtons.forEach((btn) => {
    btn.disabled = true;
  });

  if (isCorrect) {
    score += 10;

    bestStreak += 1;

    if (currentDifficulty === "elementary") {
      enemyHP -= 25;
    } else if (currentDifficulty === "highschool") {
      enemyHP -= 20;
    } else if (currentDifficulty === "seniorhigh") {
      enemyHP -= 15;
    }

    if (enemyHP < 0) {
      enemyHP = 0;
    }

    scoreValue.textContent = score;

    streakValue.textContent = bestStreak;

    enemyHealth.style.width = enemyHP + "%";

    enemyHealth.classList.add("health-hit");

    setTimeout(() => {
      enemyHealth.classList.remove("health-hit");
    }, 400);

    enemyCharacter.classList.add("character-hit");

    setTimeout(() => {
      enemyCharacter.classList.remove("character-hit");
    }, 350);

    enemyHealthText.textContent = enemyHP + " / 100";

    button.classList.add("correct-click");

    if (enemyHP === 0) {
      resultText.textContent = "Victory! Enemy defeated.";

      showEndScreen("Victory!");

      resultText.style.color = "#2563eb";
    } else {
      resultText.textContent = "Correct! You attacked the enemy.";

      resultText.style.color = "#22c55e";

      setTimeout(() => {
        currentMathQuestionIndex++;

        loadQuestion();

        startTimer();

        const refreshedButtons = document.querySelectorAll(".answer-btn");

        refreshedButtons.forEach((btn) => {
          btn.disabled = false;
        });
      }, 1000);
    }
  } else {
    if (currentDifficulty === "elementary") {
      playerHP -= 15;
    } else if (currentDifficulty === "highschool") {
      playerHP -= 20;
    } else if (currentDifficulty === "seniorhigh") {
      playerHP -= 30;
    }

    if (playerHP < 0) {
      playerHP = 0;
    }

    bestStreak = 0;

    streakValue.textContent = bestStreak;

    playerHealth.style.width = playerHP + "%";

    playerHealth.classList.add("health-hit");

    setTimeout(() => {
      playerHealth.classList.remove("health-hit");
    }, 400);

    playerCharacter.classList.add("character-hit");

    setTimeout(() => {
      playerCharacter.classList.remove("character-hit");
    }, 350);

    playerHealthText.textContent = playerHP + " / 100";

    button.classList.add("wrong-click");

    if (playerHP === 0) {
      resultText.textContent = "Game Over! You were defeated.";

      showEndScreen("Game Over!");

      resultText.style.color = "#ef4444";
    } else {
      resultText.textContent = "Wrong answer! Enemy attacked you.";

      resultText.style.color = "#ef4444";

      setTimeout(() => {
        currentMathQuestionIndex++;

        loadQuestion();

        startTimer();

        const refreshedButtons = document.querySelectorAll(".answer-btn");

        refreshedButtons.forEach((btn) => {
          btn.disabled = false;
        });
      }, 1000);
    }
  }
});

playAgainBtn.addEventListener("click", () => {
  endScreen.classList.remove("show-end-screen");

  startBattleBtn.style.display = "inline-block";

  startBattleBtn.disabled = false;

  resetGame();
});

closeModalBtn.addEventListener("click", () => {
  clearInterval(timer);

  resetGame();

  endScreen.classList.remove("show-end-screen");

  gameModal.classList.remove("show-modal");

  document.body.classList.remove("modal-open");

  document.querySelector(".question-box").classList.add("hidden-question");
});

startBattleBtn.addEventListener("click", () => {
  document.querySelector(".question-box").classList.remove("hidden-question");

  generateMathQuestions();

  loadQuestion();

  gameStarted = true;

  startBattleBtn.style.display = "none";

  document.getElementById("currentDifficultyLabel").style.display = "flex";

  lockDifficultyButtons();

  startTimer();

  questionSection.scrollIntoView({
    behavior: "smooth",

    block: "start",
  });
});

sciencePlayBtn.addEventListener("click", () => {
  scienceModal.classList.add("show-science-modal");

  document.body.classList.add("modal-open");

  const latestUnlockedStage =
    unlockedScienceStages[unlockedScienceStages.length - 1];

  scienceStageButtons.forEach((button) => {
    button.classList.remove("active-science-stage");

    if (button.dataset.stage === latestUnlockedStage) {
      button.classList.add("active-science-stage");

      currentScienceStage = latestUnlockedStage;

      scienceStageTitle.textContent = button.textContent;
    }
  });

  document.getElementById("scienceGameplaySection").style.display = "none";

  scienceModal.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scienceCloseBtn.addEventListener("click", () => {
  scienceModal.classList.remove("show-science-modal");

  document.body.classList.remove("modal-open");

  document.getElementById("scienceGameplaySection").style.display = "none";

  currentScienceQuestionIndex = 0;

  scienceLives = 4;

  scienceLivesText.textContent = "💗💗💗💗";

  scienceProgressFill.style.width = "25%";

  const latestUnlockedStage =
    unlockedScienceStages[unlockedScienceStages.length - 1];

  scienceStageButtons.forEach((btn) => {
    btn.classList.remove("active-science-stage");

    if (btn.dataset.stage === latestUnlockedStage) {
      btn.classList.add("active-science-stage");

      currentScienceStage = latestUnlockedStage;

      scienceStageTitle.textContent = btn.textContent;
    }
  });

  scienceModal.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function updateScienceStageLocks() {
  scienceStageButtons.forEach((button) => {
    const stageName = button.dataset.stage;

    if (unlockedScienceStages.includes(stageName)) {
      button.classList.remove("locked-stage");
    } else {
      button.classList.add("locked-stage");
    }
  });
}

scienceStageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("locked-stage")) {
      showScienceLockedPopup();
      return;
    }
    scienceStageButtons.forEach((btn) => {
      btn.classList.remove("active-science-stage");
    });

    button.classList.add("active-science-stage");

    currentScienceStage = button.dataset.stage;

    currentScienceQuestionIndex = 0;

    currentScienceQuestions = shuffleScienceArray([
      ...scienceStages[currentScienceStage],
    ]).slice(0, 4);

    scienceLives = 4;

    scienceLivesText.textContent = "💗💗💗💗";

    scienceStageTitle.textContent = button.textContent;

    document.getElementById("scienceGameplaySection").style.display = "block";

    loadScienceQuestion();

    document.getElementById("scienceGameplaySection").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

scienceAnswersGrid.addEventListener("click", (event) => {
  if (!event.target.classList.contains("science-answer-btn")) {
    return;
  }

  const clickedButton = event.target;

  const isCorrect = clickedButton.dataset.correct === "true";

  const allButtons = document.querySelectorAll(".science-answer-btn");

  allButtons.forEach((button) => {
    button.disabled = true;
  });

  if (isCorrect) {
    clickedButton.classList.add("correct-click");

    clickedButton.classList.add("correct-answer");

    clickedButton.style.transform = "scale(1.03)";
  } else {
    clickedButton.classList.add("wrong-click");

    clickedButton.classList.add("wrong-answer");

    allButtons.forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct-answer");
      }
    });

    scienceLives--;

    let hearts = "";

    for (let i = 0; i < scienceLives; i++) {
      hearts += "💗";
    }

    scienceLivesText.textContent = hearts;
  }

  setTimeout(() => {
    currentScienceQuestionIndex++;

    if (currentScienceQuestionIndex >= currentScienceQuestions.length) {
      const scienceStageOrder = [
        "plantsAnimals",
        "earthEnvironment",
        "chemistry",
        "biology",
        "physics",
      ];

      const nextStage =
        scienceStageOrder[scienceStageOrder.indexOf(currentScienceStage) + 1];

      if (scienceLives > 0) {
        if (nextStage && !unlockedScienceStages.includes(nextStage)) {
          unlockedScienceStages.push(nextStage);

          updateScienceStageLocks();

          localStorage.setItem(
            "scienceUnlockedStages",
            JSON.stringify(unlockedScienceStages),
          );
        }

        showScienceEndScreen("Stage Complete!");
      } else {
        showScienceEndScreen("Stage Failed!");
      }

      return;
    }

    loadScienceQuestion();

    const refreshedButtons = document.querySelectorAll(".science-answer-btn");

    refreshedButtons.forEach((button) => {
      button.disabled = false;

      button.style.transform = "scale(1)";

      button.classList.remove(
        "correct-click",
        "wrong-click",
        "correct-answer",
        "wrong-answer",
      );
    });
  }, 1100);
});

const sciencePlayAgainBtn = document.getElementById("sciencePlayAgainBtn");

const scienceNextStageBtn = document.getElementById("scienceNextStageBtn");

const scienceCloseEndBtn = document.getElementById("scienceCloseEndBtn");

const resetScienceProgressBtn = document.getElementById(
  "resetScienceProgressBtn",
);

sciencePlayAgainBtn.addEventListener("click", () => {
  document
    .getElementById("scienceEndScreen")
    .classList.remove("show-science-end-screen");

  sciencePlayAgainBtn.addEventListener;

  currentScienceQuestionIndex = 0;

  scienceLives = 4;

  scienceLivesText.textContent = "💗💗💗💗";

  scienceProgressFill.style.width = "0%";

  currentScienceQuestions = shuffleScienceArray([
    ...scienceStages[currentScienceStage],
  ]).slice(0, 4);

  loadScienceQuestion();

  document.getElementById("scienceGameplaySection").style.display = "block";

  document.getElementById("scienceGameplaySection").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  scienceModal.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scienceCloseEndBtn.addEventListener("click", () => {
  document
    .getElementById("scienceEndScreen")
    .classList.remove("show-science-end-screen");

  document.getElementById("scienceGameplaySection").style.display = "none";

  const latestUnlockedStage =
    unlockedScienceStages[unlockedScienceStages.length - 1];

  scienceStageButtons.forEach((btn) => {
    btn.classList.remove("active-science-stage");

    if (btn.dataset.stage === latestUnlockedStage) {
      btn.classList.add("active-science-stage");

      currentScienceStage = latestUnlockedStage;

      scienceStageTitle.textContent = btn.textContent;
    }
  });

  scienceModal.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scienceNextStageBtn.addEventListener("click", () => {
  const scienceStageOrder = [
    "plantsAnimals",
    "earthEnvironment",
    "chemistry",
    "biology",
    "physics",
  ];

  const currentIndex = scienceStageOrder.indexOf(currentScienceStage);

  const nextStage = scienceStageOrder[currentIndex + 1];

  if (nextStage && unlockedScienceStages.includes(nextStage)) {
    currentScienceStage = nextStage;

    document
      .getElementById("scienceEndScreen")
      .classList.remove("show-science-end-screen");

    scienceStageTitle.textContent = document.querySelector(
      `.science-stage-btn[data-stage="${currentScienceStage}"]`,
    ).textContent;

    scienceStageButtons.forEach((btn) => {
      btn.classList.remove("active-science-stage");

      if (btn.dataset.stage === nextStage) {
        btn.classList.add("active-science-stage");
      }
    });

    currentScienceQuestionIndex = 0;

    scienceLives = 4;

    scienceLivesText.textContent = "💗💗💗💗";

    currentScienceQuestions = shuffleScienceArray([
      ...scienceStages[currentScienceStage],
    ]).slice(0, 4);

    document
      .getElementById("scienceEndScreen")
      .classList.remove("show-science-end-screen");

    loadScienceQuestion();

    document.getElementById("scienceGameplaySection").style.display = "block";

    document.getElementById("scienceGameplaySection").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

resetScienceProgressBtn.addEventListener("click", () => {
  unlockedScienceStages = ["plantsAnimals"];

  localStorage.removeItem("scienceUnlockedStages");

  currentScienceStage = "plantsAnimals";

  currentScienceQuestionIndex = 0;

  scienceLives = 4;

  scienceLivesText.textContent = "💗💗💗💗";

  scienceProgressFill.style.width = "0%";

  document.getElementById("scienceGameplaySection").style.display = "none";

  scienceStageButtons.forEach((btn) => {
    btn.classList.remove("active-science-stage");

    if (btn.dataset.stage === "plantsAnimals") {
      btn.classList.add("active-science-stage");
    }
  });

  updateScienceStageLocks();

  scienceModal.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

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

// ===================== HISTORY TIMELINE RACE =====================

const historyTimelinePlayBtn = document.getElementById(
  "historyTimelinePlayBtn",
);

const historyTimelineModal = document.getElementById("historyTimelineModal");

const closeHistoryTimelineBtn = document.getElementById(
  "closeHistoryTimelineBtn",
);

const historyPlayAgainBtn = document.getElementById("historyPlayAgainBtn");

const historyCloseGameBtn = document.getElementById("historyCloseGameBtn");

historyTimelinePlayBtn.addEventListener("click", () => {
  historyTimelineModal.classList.add("show-modal");

  document.body.classList.add("modal-open");

  resetHistoryGame();
});

closeHistoryTimelineBtn.addEventListener("click", () => {
  clearInterval(historyTimer);
  historyTimelineModal.classList.remove("show-modal");

  document.body.classList.remove("modal-open");
});

historyPlayAgainBtn.addEventListener("click", () => {
  document.getElementById("historyGameOverScreen").style.display = "none";

  resetHistoryGame();
});

historyCloseGameBtn.addEventListener("click", () => {
  document.getElementById("historyGameOverScreen").style.display = "none";

  historyTimelineModal.classList.remove("show-modal");

  document.body.classList.remove("modal-open");
});

const historyTimelineData = {
  philippine: [
    {
      year: 1521,
      event: "Magellan arrives in the Philippines",
    },

    {
      year: 1565,
      event: "Legazpi establishes Spanish rule",
    },

    {
      year: 1896,
      event: "Philippine Revolution begins",
    },

    {
      year: 1898,
      event: "Philippine Independence declared",
    },

    {
      year: 1946,
      event: "Philippines gains independence from USA",
    },

    {
      year: 1986,
      event: "EDSA People Power Revolution",
    },

    {
      year: 1521,
      event: "Battle of Mactan",
    },

    {
      year: 1872,
      event: "Cavite Mutiny",
    },

    {
      year: 1892,
      event: "Katipunan founded",
    },

    {
      year: 1896,
      event: "Jose Rizal executed",
    },

    {
      year: 1899,
      event: "First Philippine Republic established",
    },

    {
      year: 1942,
      event: "Japanese occupation begins",
    },

    {
      year: 1942,
      event: "Bataan Death March",
    },

    {
      year: 1972,
      event: "Martial Law declared",
    },

    {
      year: 1983,
      event: "Ninoy Aquino assassinated",
    },

    {
      year: 1991,
      event: "Mount Pinatubo erupts",
    },

    {
      year: 2013,
      event: "Typhoon Yolanda hits Philippines",
    },

    {
      year: 1565,
      event: "Spanish colonization of the Philippines begins",
    },

    {
      year: 1889,
      event: "La Solidaridad newspaper launched",
    },

    {
      year: 1901,
      event: "First public school system established",
    },

    {
      year: 1935,
      event: "Philippine Commonwealth established",
    },

    {
      year: 1946,
      event: "Philippines gains independence from the US",
    },

    {
      year: 1965,
      event: "Ferdinand Marcos becomes president",
    },

    {
      year: 1986,
      event: "EDSA People Power Revolution",
    },

    {
      year: 1992,
      event: "Subic Naval Base returned to the Philippines",
    },

    {
      year: 2016,
      event: "Rodrigo Duterte becomes president",
    },

    {
      year: 2022,
      event: "Ferdinand Marcos Jr. elected president",
    },
  ],

  world: [
    {
      year: -3000,
      event: "Ancient Egyptian civilization begins",
    },

    {
      year: 776,
      event: "First Olympic Games held",
    },

    {
      year: 1215,
      event: "Magna Carta signed",
    },

    {
      year: 1789,
      event: "French Revolution begins",
    },

    {
      year: 1914,
      event: "World War I begins",
    },

    {
      year: 1969,
      event: "Apollo 11 Moon Landing",
    },

    {
      year: 1455,
      event: "Printing Press invented by Gutenberg",
    },

    {
      year: 1492,
      event: "Christopher Columbus reaches America",
    },

    {
      year: 1776,
      event: "American Declaration of Independence",
    },

    {
      year: 1865,
      event: "American Civil War ends",
    },

    {
      year: 1939,
      event: "World War II begins",
    },

    {
      year: 1945,
      event: "World War II ends",
    },

    {
      year: 1963,
      event: "Martin Luther King Jr. delivers 'I Have a Dream'",
    },

    {
      year: 1989,
      event: "Berlin Wall falls",
    },

    {
      year: 1991,
      event: "Soviet Union collapses",
    },

    {
      year: 2001,
      event: "September 11 attacks",
    },

    {
      year: 2020,
      event: "COVID-19 pandemic spreads globally",
    },

    {
      year: 476,
      event: "Fall of the Western Roman Empire",
    },

    {
      year: 1215,
      event: "Magna Carta signed",
    },

    {
      year: 1517,
      event: "Protestant Reformation begins",
    },

    {
      year: 1760,
      event: "Industrial Revolution begins",
    },

    {
      year: 1789,
      event: "French Revolution begins",
    },

    {
      year: 1914,
      event: "World War I begins",
    },

    {
      year: 1969,
      event: "Apollo 11 Moon Landing",
    },

    {
      year: 1983,
      event: "Internet officially introduced",
    },

    {
      year: 2008,
      event: "Barack Obama elected US president",
    },

    {
      year: 2022,
      event: "ChatGPT and generative AI rise globally",
    },
  ],
};

let currentHistoryCategory = "philippine";

let currentHistoryEvents = [];

let historyScore = 0;

let historyCombo = 0;

let historyHighest = localStorage.getItem("historyHighest") || 0;

let historyTimeLeft = 60;

let historyTimer;

function loadHistoryTimelineEvents() {
  const allEvents = [...historyTimelineData[currentHistoryCategory]];

  let eventCount = 3;

  if (historyScore >= 400) {
    eventCount = 4;
  }

  if (historyScore >= 900) {
    eventCount = 5;
  }

  if (historyScore >= 1600) {
    eventCount = 6;
  }

  if (historyScore >= 2500) {
    eventCount = 7;
  }

  if (currentHistoryEvents.length === 0) {
    const shuffledPool = allEvents.sort(() => Math.random() - 0.5);

    currentHistoryEvents = shuffledPool.slice(0, eventCount);

    currentHistoryEvents.sort(() => Math.random() - 0.5);
  }

  const historyEventsContainer = document.getElementById(
    "historyEventsContainer",
  );

  historyEventsContainer.innerHTML = currentHistoryEvents
    .map(
      (event, index) => `
          <div class="history-event-card">

  <span class="history-event-number">
    ${index + 1}
  </span>

  <span class="history-event-text">
    ${event.event}
  </span>

  <div class="history-move-buttons">

  <button
    class="history-move-btn
    ${index === 0 ? "disabled-history-btn" : ""}"
    onclick="moveHistoryEventUp(${index})"
    ${index === 0 ? "disabled" : ""}
  >
    ↑
  </button>

  <button
    class="history-move-btn
    ${index === currentHistoryEvents.length - 1 ? "disabled-history-btn" : ""}"
    onclick="moveHistoryEventDown(${index})"
    ${index === currentHistoryEvents.length - 1 ? "disabled" : ""}
  >
    ↓
  </button>

</div>

</div>
        `,
    )
    .join("");
}

function moveHistoryEventUp(index) {
  if (index === 0) return;

  const cards = document.querySelectorAll(".history-event-card");

  cards[index].classList.add("history-card-moving-up");

  cards[index - 1].classList.add("history-card-moving-down");

  const arrow = document.createElement("div");

  arrow.className = "history-floating-arrow";

  arrow.textContent = "↑";

  const rect = cards[index].getBoundingClientRect();

  arrow.style.left = rect.left + rect.width / 2 - 20 + "px";

  arrow.style.top = rect.top + rect.height / 2 - 40 + "px";
  document.body.appendChild(arrow);

  setTimeout(() => {
    arrow.remove();
  }, 500);

  setTimeout(() => {
    [currentHistoryEvents[index - 1], currentHistoryEvents[index]] = [
      currentHistoryEvents[index],
      currentHistoryEvents[index - 1],
    ];

    loadHistoryTimelineEvents();
  }, 420);
}

function moveHistoryEventDown(index) {
  if (index === currentHistoryEvents.length - 1) return;

  const cards = document.querySelectorAll(".history-event-card");

  cards[index].classList.add("history-card-moving-down");

  cards[index + 1].classList.add("history-card-moving-up");

  const arrow = document.createElement("div");

  arrow.className = "history-floating-arrow";

  arrow.textContent = "↓";

  const rect = cards[index].getBoundingClientRect();

  arrow.style.left = rect.left + rect.width / 2 - 20 + "px";

  arrow.style.top = rect.top + rect.height / 2 - 40 + "px";

  document.body.appendChild(arrow);

  setTimeout(() => {
    arrow.remove();
  }, 500);

  setTimeout(() => {
    [currentHistoryEvents[index + 1], currentHistoryEvents[index]] = [
      currentHistoryEvents[index],
      currentHistoryEvents[index + 1],
    ];

    loadHistoryTimelineEvents();
  }, 420);
}

function resetHistoryGame() {
  historyScore = 0;

  historyCombo = 0;

  historyTimeLeft = 60;

  document.getElementById("historyTimerValue").textContent = 60;

  document
    .getElementById("historyTimerValue")
    .classList.remove("warning-time", "danger-time");

  updateHistoryUI();

  currentHistoryEvents = [];

  loadHistoryTimelineEvents();

  startHistoryTimer();
}

function setHistoryCategory(category) {
  currentHistoryCategory = category;

  currentHistoryEvents = [];

  document.querySelectorAll(".history-category-btn").forEach((button) => {
    button.classList.remove("active-history-category");
  });

  if (category === "philippine") {
    document
      .getElementById("historyPhilippineBtn")
      .classList.add("active-history-category");
  } else {
    document
      .getElementById("historyWorldBtn")
      .classList.add("active-history-category");
  }

  loadHistoryTimelineEvents();
}

function updateHistoryUI() {
  document.getElementById("historyScoreValue").textContent = historyScore;

  document.getElementById("historyComboValue").textContent = historyCombo;

  document.getElementById("historyTimerValue").textContent = historyTimeLeft;

  document.getElementById("historyHighestValue").textContent = historyHighest;
}

function startHistoryTimer() {
  clearInterval(historyTimer);

  historyTimer = setInterval(() => {
    historyTimeLeft--;

    updateHistoryUI();

    if (historyTimeLeft <= 10) {
      document
        .getElementById("historyTimerValue")
        .classList.add("warning-time");
    }

    if (historyTimeLeft <= 5) {
      document
        .getElementById("historyTimerValue")
        .classList.remove("warning-time");

      document.getElementById("historyTimerValue").classList.add("danger-time");
    }

    if (historyTimeLeft <= 0) {
      clearInterval(historyTimer);

      document.getElementById("historyGameOverScreen").style.display = "flex";

      document.getElementById("historyFinalScore").textContent = historyScore;

      document.getElementById("historyFinalHighest").textContent =
        historyHighest;
    }
  }, 1000);
}

function checkHistoryTimelineOrder() {
  const correctOrder = [...currentHistoryEvents].sort(
    (a, b) => a.year - b.year,
  );

  let correctCount = 0;

  currentHistoryEvents.forEach((event, index) => {
    if (
      event.year === correctOrder[index].year &&
      event.event === correctOrder[index].event
    ) {
      correctCount++;
    }
  });

  const historyFeedbackMessage = document.getElementById(
    "historyFeedbackMessage",
  );

  if (correctCount === currentHistoryEvents.length) {
    historyCombo++;

    const comboBonus = historyCombo * 10;

    historyScore += 50 + comboBonus;

    historyTimeLeft += 8;

    historyFeedbackMessage.textContent = `Perfect Timeline! +${
      50 + comboBonus
    } score • +8 sec`;

    historyFeedbackMessage.style.color = "#22c55e";

    if (historyScore > historyHighest) {
      historyHighest = historyScore;

      localStorage.setItem("historyHighest", historyHighest);
    }

    updateHistoryUI();

    setTimeout(() => {
      currentHistoryEvents = [];

      loadHistoryTimelineEvents();
    }, 300);
  } else {
    historyCombo = 0;

    const earnedScore = correctCount * 5;

    historyScore += earnedScore;

    if (correctCount >= 3) {
      historyTimeLeft += 3;

      historyFeedbackMessage.textContent = `${correctCount} correctly placed • +3 sec`;

      historyFeedbackMessage.style.color = "#2563eb";
    } else {
      historyTimeLeft -= 5;

      if (historyTimeLeft < 0) {
        historyTimeLeft = 0;
      }

      historyFeedbackMessage.textContent = `${correctCount} correctly placed • -5 sec`;

      historyFeedbackMessage.style.color = "#ef4444";
    }

    updateHistoryUI();
  }
}
