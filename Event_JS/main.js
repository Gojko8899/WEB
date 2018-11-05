var body = document.querySelector("body");
var timeer;
function togglebackground() {
  body.classList.toggle("active");

  if (timeer === undefined) {
    timeer = setInterval(togglebackground, 1000);
  }
}

function turnOff() {
  clearInterval(timeer);
  timeer = undefined;
}
