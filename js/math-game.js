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

let score = 0;

let bestStreak = 0;

let playerHP = 100;

let enemyHP = 100;

let timeLeft = 15;

let timer;

let gameStarted = false;

difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
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
