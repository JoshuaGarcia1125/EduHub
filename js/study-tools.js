// =====================
//   POMODORO TIMER
// =====================

const TIMER_MODES = {
  pomodoro: 10 * 60, // 10 minutes (as shown in HTML: 00:10:00)
  shortBreak: 5 * 60, // 5 minutes
  longBreak: 15 * 60, // 15 minutes
};

let timerInterval = null;
let timeLeft = TIMER_MODES.pomodoro;
let isRunning = false;
let currentMode = "pomodoro";

const timerDisplay = document.querySelector(".timer-display");
const timerButton = document.querySelector(".timer-button");
const timerTabs = document.querySelectorAll(".timer-tabs button");

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}

function startTimer() {
  isRunning = true;
  timerButton.textContent = "PAUSE";
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      isRunning = false;
      timerButton.textContent = "START";
      timerDisplay.textContent = "00:00:00";
      alert("⏰ Time's up! Take a break.");
      return;
    }
    timeLeft--;
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  timerButton.textContent = "RESUME";
}

function resetTimer(mode) {
  clearInterval(timerInterval);
  isRunning = false;
  currentMode = mode;
  timeLeft = TIMER_MODES[mode];
  timerButton.textContent = "START";
  updateDisplay();
}

timerButton.addEventListener("click", () => {
  if (!isRunning) {
    startTimer();
  } else {
    pauseTimer();
  }
});

timerTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    timerTabs.forEach((t) => t.classList.remove("active-tab"));
    tab.classList.add("active-tab");

    const modes = ["pomodoro", "shortBreak", "longBreak"];
    resetTimer(modes[index]);
  });
});

// Initialize display
updateDisplay();

// =====================
//   NOTEPAD
// =====================

const notesSection = document.querySelector(".notes-section");
const textarea = notesSection.querySelector("textarea");

// Create download button
const downloadBtn = document.createElement("button");
downloadBtn.textContent = "⬇ Download Notes";
downloadBtn.classList.add("download-btn");
notesSection.appendChild(downloadBtn);

downloadBtn.addEventListener("click", () => {
  const content = textarea.value.trim();
  if (!content) {
    alert("Nothing to download! Write some notes first.");
    return;
  }

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "my-notes.txt";
  a.click();
  URL.revokeObjectURL(url);
});

// =====================
//   TO-DO LIST
// =====================

const todoList = document.querySelector(".todo-list");
const addTaskBtn = document.querySelector(".todo-header button");

function createTodoItem(text, completed = false) {
  const item = document.createElement("div");
  item.classList.add("todo-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  const span = document.createElement("span");
  span.textContent = text;

  const actions = document.createElement("div");
  actions.classList.add("todo-actions");

  const editBtn = document.createElement("button");
  editBtn.innerHTML = `<img src="assets/tools/edit-icon.png" alt="Edit">`;
  editBtn.classList.add("todo-edit-btn");
  editBtn.title = "Edit task";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<img src="assets/tools/delete-icon.png" alt="Delete">`;
  deleteBtn.classList.add("todo-delete-btn");
  deleteBtn.title = "Delete task";

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  item.appendChild(checkbox);
  item.appendChild(span);
  item.appendChild(actions);

  if (completed) {
    applyCompleted(item, span);
  }

  // Checkbox toggle
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      applyCompleted(item, span);
      // Move to bottom
      todoList.appendChild(item);
    } else {
      removeCompleted(item, span);
      // Move back to top (before first completed item)
      const firstCompleted = todoList.querySelector(".completed-task");
      if (firstCompleted) {
        todoList.insertBefore(item, firstCompleted);
      } else {
        todoList.appendChild(item);
      }
    }
  });

  // Edit button
  editBtn.addEventListener("click", () => {
    const currentText = span.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.classList.add("todo-edit-input");

    item.replaceChild(input, span);
    editBtn.textContent = "✔️";
    input.focus();

    const saveEdit = () => {
      const newText = input.value.trim();
      span.textContent = newText || currentText;
      item.replaceChild(span, input);
      editBtn.textContent = "✏️";
    };

    editBtn.onclick = saveEdit;

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") saveEdit();
      if (e.key === "Escape") {
        span.textContent = currentText;
        item.replaceChild(span, input);
        editBtn.textContent = "✏️";
        editBtn.onclick = () => editBtn.click(); // restore
      }
    });
  });

  // Delete button
  deleteBtn.addEventListener("click", () => {
    item.style.transition = "opacity 0.3s, transform 0.3s";
    item.style.opacity = "0";
    item.style.transform = "translateX(20px)";
    setTimeout(() => item.remove(), 300);
  });

  return item;
}

function applyCompleted(item, span) {
  item.classList.add("completed-task");
  span.style.textDecoration = "line-through";
  span.style.opacity = "0.45";
}

function removeCompleted(item, span) {
  item.classList.remove("completed-task");
  span.style.textDecoration = "none";
  span.style.opacity = "1";
}

// Migrate existing static todo items
const existingItems = Array.from(todoList.querySelectorAll(".todo-item"));
existingItems.forEach((item) => {
  const checkbox = item.querySelector("input[type='checkbox']");
  const span = item.querySelector("span");
  const text = span ? span.textContent : "";
  const completed = checkbox ? checkbox.checked : false;

  const newItem = createTodoItem(text, completed);
  todoList.replaceChild(newItem, item);
});

// Sort: uncompleted first, completed last
function sortTodoList() {
  const items = Array.from(todoList.querySelectorAll(".todo-item"));
  const uncompleted = items.filter(
    (i) => !i.classList.contains("completed-task"),
  );
  const completed = items.filter((i) => i.classList.contains("completed-task"));
  [...uncompleted, ...completed].forEach((i) => todoList.appendChild(i));
}
sortTodoList();

// Add new task
addTaskBtn.addEventListener("click", () => {
  const text = prompt("Enter a new task:");
  if (text && text.trim()) {
    const newItem = createTodoItem(text.trim());
    // Insert before first completed task
    const firstCompleted = todoList.querySelector(".completed-task");
    if (firstCompleted) {
      todoList.insertBefore(newItem, firstCompleted);
    } else {
      todoList.appendChild(newItem);
    }
  }
});
