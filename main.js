let workTime = 25 * 60;
let breakTime = 5 * 60;
let isWorkTime = true;
let isPaused = true;
let interval;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function updateDisplay(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  isPaused = false;
  interval = setInterval(() => {
    if (isWorkTime) {
      workTime--;
      updateDisplay(workTime);
      if (workTime <= 0) {
        isWorkTime = false;
        workTime = 25 * 60;
      }
    } else {
      breakTime--;
      updateDisplay(breakTime);
      if (breakTime <= 0) {
        isWorkTime = true;
        breakTime = 5 * 60;
      }
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
  clearInterval(interval);
}

function resetTimer() {
  isPaused = true;
  isWorkTime = true;
  workTime = 25 * 60;
  breakTime = 5 * 60;
  updateDisplay(workTime);
  clearInterval(interval);
}

startButton.addEventListener('click', () => {
  if (isPaused) startTimer();
});

pauseButton.addEventListener('click', () => {
  if (!isPaused) pauseTimer();
});

resetButton.addEventListener('click', resetTimer);

// Initialize display
updateDisplay(workTime);
