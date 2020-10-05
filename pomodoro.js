const pomodoro = 25;
let timer = pomodoro * 60;
let interval;

const timerElement = document.getElementById('timer');
function updateTimer(){
    const minutes = Math.floor(timer/60);
    let seconds = timer % 60 ;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerElement.innerHTML = `${minutes} : ${seconds}`;
    timer--;
   
}

function startTimer(){
    interval = setInterval(updateTimer,1000);
    
}
function pauseTimer(){
    clearInterval(interval);
}

