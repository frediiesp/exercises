//? ---------------------------- Programa para Timer de Cubo Rubik con Milisegundos ----------------------------
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let startTime;
let isRunning = false;
let timerInterval;

function formatTime(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const remainingMilliseconds = milliseconds % 1000;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  const formattedMilliseconds = String(remainingMilliseconds).padStart(3, '0');

  return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

function updateTimer() {
  const currentTime = Date.now() - startTime;
  console.clear();
  console.log('Timer');
  console.log('Presiona la tecla "espacio" para iniciar/detener el timer.');
  console.log(formatTime(currentTime));
}

function toggleTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
  } else {
    startTime = Date.now() - (isRunning ? getTimeInMilliseconds(formatTime('00:00:000')) : 0);
    timerInterval = setInterval(updateTimer, 1); // Actualizamos cada milisegundo
  }
  isRunning = !isRunning;
}

function getTimeInMilliseconds(timeString) {
  const [minutes, seconds, milliseconds] = timeString.split(':').map(Number);
  return minutes * 60000 + seconds * 1000 + milliseconds;
}

rl.input.on('keypress', (_, key) => {
  if (key.name === 'space') {
    toggleTimer();
  }
});

updateTimer();
