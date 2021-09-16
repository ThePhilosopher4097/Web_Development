const timer = document.querySelector(".timer");
const flaggedTimerDiv = document.querySelector(".flagged-timers");

const circles = document.querySelector(".circles").children;

var hourStr = "00",
  minStr = "00",
  secStr = "00";

var isTimerStopped = true;

const updateTimer = (h, m, s) => {
  timer.innerHTML = h + ":" + m + ":" + s;
};

const handleTimer = () => {
  if (!isTimerStopped) {
    hours = parseInt(hourStr);
    minutes = parseInt(minStr);
    seconds = parseInt(secStr);

    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes == 60) {
      hours++;
      minutes = 0;
    }

    if (seconds < 10) {
      secStr = "0" + seconds;
    } else {
      secStr = "" + seconds;
    }

    if (minutes < 10) {
      minStr = "0" + minutes;
    } else {
      minStr = "" + minutes;
    }

    if (hours < 10) {
      hourStr = "0" + hours;
    } else {
      hourStr = "" + hours;
    }

    updateTimer(hourStr, minStr, secStr);

    setTimeout("handleTimer()", 1000);
  }
};

const startTimer = () => {
  if (isTimerStopped) {
    isTimerStopped = false;
    var tim = 0.0;
    for (var i = 0; i < circles.length; i++) {
      circles[i].style.animation = `animate 0.5s alternate infinite ${tim}s`;
      tim += 0.07;
      console.log(tim);
      console.log(circles[i]);
    }
    handleTimer();
  }
};

const pauseTimer = () => {
  if (!isTimerStopped) {
    isTimerStopped = true;
    for (var i = 0; i < circles.length; i++) {
      circles[i].style.animation = "";
    }
  }
};

const resetTimer = () => {
  hourStr = "00";
  minStr = "00";
  secStr = "00";
  updateTimer(hourStr, minStr, secStr);
  for (var i = 0; i < circles.length; i++) {
    circles[i].style.animation = "";
  }
  flaggedTimerDiv.innerHTML = "";
  isTimerStopped = true;
};

const flagTimer = () => {
  if (!isTimerStopped) {
    var line = document.createElement("div");
    line.classList.add("flg");

    var div1 = document.createElement("div");
    div1.innerText = hourStr + ":" + minStr + ":" + secStr;

    var div2 = document.createElement("div");
    div2.innerText = "Clear";

    div2.addEventListener("click", (e) => {
      div2.parentElement.remove();
    });
    line.appendChild(div1);
    line.appendChild(div2);

    flaggedTimerDiv.appendChild(line);

    flaggedTimerDiv.scrollTop = flaggedTimerDiv.scrollHeight;
  }
};
