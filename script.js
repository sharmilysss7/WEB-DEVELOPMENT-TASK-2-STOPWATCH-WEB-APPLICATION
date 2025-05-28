let startTime, interval, elapsed = 0;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById("start").onclick = () => {
  if (running) return;
  running = true;
  startTime = Date.now() - elapsed;
  interval = setInterval(() => {
    elapsed = Date.now() - startTime;
    updateDisplay(elapsed);
  }, 100);
};

document.getElementById("pause").onclick = () => {
  running = false;
  clearInterval(interval);
};

document.getElementById("reset").onclick = () => {
  running = false;
  clearInterval(interval);
  elapsed = 0;
  updateDisplay(elapsed);
  laps.innerHTML = '';
};

document.getElementById("lap").onclick = () => {
  if (!running) return;
  const li = document.createElement("li");
  li.textContent = display.textContent;
  laps.appendChild(li);
};
