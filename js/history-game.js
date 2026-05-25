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
      year: 1914,
      event: "World War I begins",
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

let historyHighestCombo = 0;

let historyTimeLeft = 50;

let historyRound = 1;

let historyTimer;

function loadHistoryTimelineEvents() {
  const allEvents = [...historyTimelineData[currentHistoryCategory]];

  let eventCount = 3;

  if (historyRound >= 2) {
    eventCount = 4;
  }

  if (historyRound >= 4) {
    eventCount = 5;
  }

  if (historyRound >= 6) {
    eventCount = 6;
  }

  const shuffledPool = allEvents.sort(() => Math.random() - 0.5);

  currentHistoryEvents = shuffledPool.slice(0, eventCount);

  currentHistoryEvents.sort(() => Math.random() - 0.5);

  document.querySelector(".history-timeline-content").scrollTo({
    top: 0,
    behavior: "smooth",
  });

  renderHistoryEvents();
}

function renderHistoryEvents() {
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

    renderHistoryEvents();
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

    renderHistoryEvents();
  }, 420);
}

function resetHistoryGame() {
  historyScore = 0;

  historyCombo = 0;

  historyRound = 1;

  historyTimeLeft = 50;

  document.getElementById("historyGameOverScreen").style.display = "none";

  document.getElementById("historyTimerValue").textContent = 50;

  document
    .getElementById("historyTimerValue")
    .classList.remove("warning-time", "danger-time");

  document.getElementById("historyFeedbackMessage").textContent = "";

  document.querySelectorAll(".history-event-card").forEach((card) => {
    card.classList.remove("history-correct-card", "history-wrong-card");
  });

  updateHistoryUI();

  currentHistoryEvents = [];

  loadHistoryTimelineEvents();

  startHistoryTimer();
}

function setHistoryCategory(category) {
  currentHistoryCategory = category;

  historyScore = 0;

  historyCombo = 0;

  historyRound = 1;

  historyTimeLeft = 50;

  clearInterval(historyTimer);

  document.getElementById("historyFeedbackMessage").textContent = "";

  document
    .getElementById("historyTimerValue")
    .classList.remove("warning-time", "danger-time");

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

  updateHistoryUI();

  startHistoryTimer();

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

      const historyRoundsText = document.getElementById("historyRoundsText");

      const historyBestComboText = document.getElementById(
        "historyBestComboText",
      );

      historyRoundsText.textContent = `Rounds Survived: ${historyRound}`;

      historyBestComboText.textContent = `Best Combo: ${historyHighestCombo}`;

      document.getElementById("historyFinalHighest").textContent =
        historyHighest;
    }
  }, 1000);
}

let historyFeedbackTimeout;

function clearHistoryFeedback() {
  clearTimeout(historyFeedbackTimeout);

  const historyFeedbackMessage = document.getElementById(
    "historyFeedbackMessage",
  );

  historyFeedbackTimeout = setTimeout(() => {
    historyFeedbackMessage.classList.add("history-feedback-hidden");

    setTimeout(() => {
      historyFeedbackMessage.textContent = "";

      historyFeedbackMessage.classList.remove("history-feedback-hidden");
    }, 350);
  }, 1450);
}

function checkHistoryTimelineOrder() {
  const correctOrder = [...currentHistoryEvents].sort(
    (a, b) => a.year - b.year,
  );

  let correctCount = 0;

  const historyCards = document.querySelectorAll(".history-event-card");

  historyCards.forEach((card) => {
    card.classList.remove("history-correct-card", "history-wrong-card");
  });

  currentHistoryEvents.forEach((event, index) => {
    if (
      event.year === correctOrder[index].year &&
      event.event === correctOrder[index].event
    ) {
      correctCount++;

      historyCards[index].classList.add("history-correct-card");
    } else {
      historyCards[index].classList.add("history-wrong-card");
    }
  });

  const historyFeedbackMessage = document.getElementById(
    "historyFeedbackMessage",
  );

  if (correctCount === currentHistoryEvents.length) {
    historyCombo++;

    if (historyCombo > historyHighestCombo) {
      historyHighestCombo = historyCombo;
    }

    historyRound++;

    const comboBonus = historyCombo * 10;

    historyScore += 50 + comboBonus;

    if (historyCombo >= 3) {
      historyTimeLeft += 5;
    } else {
      historyTimeLeft += 3;
    }

    if (historyTimeLeft > 50) {
      historyTimeLeft = 50;
    }

    const timeReward = historyCombo >= 3 ? 5 : 3;

    historyFeedbackMessage.textContent = `Perfect Timeline! +${50 + comboBonus} score • +${timeReward} sec`;

    historyFeedbackMessage.classList.remove("history-feedback-hidden");

    if (historyCombo >= 8) {
      historyFeedbackMessage.textContent += " HISTORY GENIUS!";
    } else if (historyCombo >= 5) {
      historyFeedbackMessage.textContent += " TIMELINE MASTER!";
    } else if (historyCombo >= 3) {
      historyFeedbackMessage.textContent += " HOT STREAK!";
    }

    clearHistoryFeedback();

    historyFeedbackMessage.style.color = "#22c55e";

    document.querySelectorAll(".history-event-card").forEach((card) => {
      card.classList.add("history-success-flash");
    });

    document
      .getElementById("historyComboValue")
      .classList.add("history-combo-pulse");

    historyFeedbackMessage.classList.remove("history-feedback-pop");

    void historyFeedbackMessage.offsetWidth;

    historyFeedbackMessage.classList.add("history-feedback-pop");

    setTimeout(() => {
      document
        .getElementById("historyComboValue")
        .classList.remove("history-combo-pulse");
    }, 450);

    setTimeout(() => {
      document.querySelectorAll(".history-event-card").forEach((card) => {
        card.classList.remove("history-success-flash");
      });
    }, 700);

    if (historyScore > historyHighest) {
      historyHighest = historyScore;

      localStorage.setItem("historyHighest", historyHighest);
    }

    updateHistoryUI();

    setTimeout(() => {
      historyCards.forEach((card) => {
        card.style.opacity = "0.92";

        card.classList.remove("history-correct-card", "history-wrong-card");
      });
    }, 950);

    setTimeout(() => {
      historyCards.forEach((card) => {
        card.style.opacity = "1";
      });

      currentHistoryEvents = [];

      loadHistoryTimelineEvents();
    }, 1350);
  } else {
    historyCombo = 0;

    const earnedScore = correctCount * 5;

    historyScore += earnedScore;

    if (correctCount >= Math.floor(currentHistoryEvents.length / 2)) {
      historyTimeLeft += 3;

      if (historyTimeLeft > 50) {
        historyTimeLeft = 50;
      }

      historyFeedbackMessage.textContent = `${correctCount} correctly placed • +3 sec`;

      historyFeedbackMessage.classList.remove("history-feedback-hidden");

      clearHistoryFeedback();

      historyFeedbackMessage.style.color = "#2563eb";

      historyFeedbackMessage.classList.remove("history-feedback-pop");

      void historyFeedbackMessage.offsetWidth;

      historyFeedbackMessage.classList.add("history-feedback-pop");
    } else {
      historyTimeLeft -= 5;

      if (historyTimeLeft < 0) {
        historyTimeLeft = 0;
      }

      historyFeedbackMessage.textContent = `${correctCount} correctly placed • -5 sec`;

      historyFeedbackMessage.classList.remove("history-feedback-hidden");

      historyFeedbackMessage.style.color = "#ef4444";

      document.querySelectorAll(".history-event-card").forEach((card) => {
        card.classList.add("history-fail-shake");
      });

      historyFeedbackMessage.classList.remove("history-feedback-pop");

      void historyFeedbackMessage.offsetWidth;

      historyFeedbackMessage.classList.add("history-feedback-pop");

      setTimeout(() => {
        document.querySelectorAll(".history-event-card").forEach((card) => {
          card.classList.remove("history-fail-shake");
        });
      }, 500);
    }

    clearHistoryFeedback();

    setTimeout(() => {
      historyCards.forEach((card) => {
        card.style.opacity = "0.92";

        card.classList.remove("history-correct-card", "history-wrong-card");
      });
    }, 1450);

    setTimeout(() => {
      historyCards.forEach((card) => {
        card.style.opacity = "1";
      });
    }, 1850);

    updateHistoryUI();
  }
}
