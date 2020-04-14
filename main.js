let alarm, animationElements;
window.onload = () => {
  alarm = new Audio("alarm.mp3");
  animationElements = [ document.getElementsByTagName("body")[0], document.getElementsByClassName("title")[0] ];
}

function handleNapDown() {
  for (const e of animationElements) {
    e.classList.remove("fade-dark-light");
    e.classList.add("fade-light-dark");
  }
}

function handleNapUp() {
  alarm.play();

  for (const e of animationElements) {
    e.classList.remove("fade-light-dark");
    e.classList.add("fade-dark-light");
  }
}
