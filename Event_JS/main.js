// var $button = document.createElement("button");
// $button.setAttribute("type", "button");
// $button.setAttribute("value", "Toggle");
// var body = document.querySelector("body");

// body.appendChild($button);

var body = document.querySelector("body");

function togglebackground() {
  body.classList.toggle("active");
  setInterval(togglebackground, 1000);
}

function turnOff() {
  clearInterval(setInterval);
}

// var hasRunningInterva;
// var setInterval;
// function automatic() {
//   if (!hasRunningInterval) {
//     hasRunningInterval = setInterval(toggle, 1000);
//   }
// }
