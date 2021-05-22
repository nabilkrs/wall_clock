var secondsneedle = document.querySelector(".seconds-needle");
var minutesneedle = document.querySelector(".minutes-needle");
var hoursneedle = document.querySelector(".hours-needle");
var time = document.querySelector(".time");
var start = document.querySelector("#start");
function rotate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    var hours = now.getHours();
    secondsDegree = ((seconds / 60) * 360) - 90;
    secondsneedle.style.transform = `rotate(${secondsDegree}deg)`;
    console.log(seconds);
    minutesDegree = ((minutes / 60) * 360) - 90;
    console.log(minutes);
    minutesneedle.style.transform = `rotate(${minutesDegree}deg)`;
    console.log(hours);
    var hours1 = hours;
    if (hours > 12) {
        hours1 = hours - 12;
    };
    hoursDegree = ((hours1 / 12) * 360) - 90;
    console.log(hoursDegree);
    hoursneedle.style.transform = `rotate(${hoursDegree}deg)`;
    if (minutes < 10) {
        time.innerHTML = hours + ":" + "0" + minutes + ":" + seconds;
    }
    else if (seconds < 10) {
        time.innerHTML = hours + ":" + minutes + ":" + "0" + seconds;
    }
    else if (hours < 10) {
        time.innerHTML = "0" + hours + ":" + minutes + ":" + seconds;
    }
    else { time.innerHTML = hours + ":" + minutes + ":" + seconds; }

}
setInterval(rotate, 1000);
