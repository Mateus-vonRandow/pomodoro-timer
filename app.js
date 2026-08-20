const start = document.getElementById("start");
const pause= document.getElementById("pause");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 10;
let interval;

start.addEventListener("click", function() {
    clearInterval(interval)

    interval = setInterval(function(){
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's Up!")
        }

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        let formattedMinutes = String(minutes).padStart(2, "0");
        let formattedSeconds = String(seconds).padStart(2, "0");


        timer.innerText = `${formattedMinutes}:${formattedSeconds}`;

    }, 1000);

    
});

pause.addEventListener("click", function() {
    clearInterval(interval)
})

reset.addEventListener("click", function() {
    clearInterval(interval);
    timeLeft = 1500;

    timer.innerText = "25:00";
})