let time = 25;
let timer = time * 60;
let interval;

const timerElement = document.getElementById('timer');

function pomo(){
    timerElement.innerHTML = "25 : 00";
    time = 25;
    timer = time * 60;
}
function short(){
    timerElement.innerHTML = "05 : 00";
    time = 5;
    timer = time * 60;
}

function long(){
    timerElement.innerHTML = "10 : 00";
    time = 10;
    timer = time * 60;
}
function updateTimer(){
    let minutes = Math.floor(timer/60);
    let seconds = timer % 60 ;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    timerElement.innerHTML = `${minutes} : ${seconds}`;
    timer--;
   
}

function startTimer(){
    interval = setInterval(updateTimer,1000);
}

function pauseTimer(){
    clearInterval(interval);
}

