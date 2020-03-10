let functionСounter = 0;
const getTimeNow = function() {

    let timeNow = new Date();
    let hoursNow = timeNow.getHours();
    let minutesNow = timeNow.getMinutes();
    let secondsNow = timeNow.getSeconds();

    if (hoursNow < 10) {
        hoursNow = "0" + hoursNow;
    }
    if (minutesNow < 10) {
        minutesNow = "0" + minutesNow;
    }
    if (secondsNow < 10) {
        secondsNow = "0" + secondsNow;
    }
    const element = document.getElementById("time");

    functionСounter++;

    if (functionСounter % 2 == 0) {
        element.innerHTML = `<h2>${hoursNow}:${minutesNow}:${secondsNow}</h2>`;
    } else {
        element.innerHTML = `<h2>${hoursNow} ${minutesNow} ${secondsNow}</h2>`;
    }
}

setInterval(getTimeNow, 500);





















// const colon = setInterval(() => console.log(':'), 500);



/* setInterval(function() {
    blink.style.opacity = 1 - (blink.style.opacity || 1);
}, 500); */