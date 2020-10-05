let time = 25;
let timer = time * 60;
let interval;

const timerElement = document.getElementById('timer');

function pomo(){
    document.body.style.backgroundColor ="#6CC2BD";
    timerElement.innerHTML = "25 : 00";
    time = 25;
    timer = time * 60;
}
function short(){
    document.body.style.backgroundColor ="#7D7AA2";
    timerElement.innerHTML = "05 : 00";
    time = 5;
    timer = time * 60;
}

function long(){
    document.body.style.backgroundColor ="#F67E7D";
    timerElement.innerHTML = "10 : 00";
    time = 1;
    timer = time * 60;
}
function updateTimer(){
    document.getElementById("progress").width = "400";
    let minutes = Math.floor(timer/60);
    let seconds = timer % 60 ;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    timerElement.innerHTML = `${minutes} : ${seconds}`;
    
    timer--;  
    if(timer==0){
        document.getElementById("message").style.display = "block";
        document.getElementById('message').innerHTML = "Session completed";
        clearInterval(interval);
    }
}

function startTimer(){
    document.getElementById("message").style.display = "none";
    interval = setInterval(updateTimer,1000);
}

function pauseTimer(){
    document.getElementById("message").style.display = "block";
    document.getElementById('message').innerHTML = "Timer is paused";
    clearInterval(interval);
}

