const gif = document.getElementById("player");
const overlay = document.getElementById("warning");
const declineButton = document.getElementById("button-deny");
const acceptButton = document.getElementById("button-accept");

let hasClicked;

window.onbeforeunload = function () {
  if (hasClicked) return true;
};

function buttonClick(event) {
  event.preventDefault();
  if (!hasClicked) hasClicked = true;
  overlay.classList.add("hidden");
  gif.play();
  gifClick();
}

function gifClick(event) {
  if (event) event.preventDefault();
  // if not fullscreen
  const { documentElement } = document;
}

acceptButton.addEventListener("click", buttonClick);
declineButton.addEventListener("click", buttonClick);
gif.addEventListener("click", gifClick);
