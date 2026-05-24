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
