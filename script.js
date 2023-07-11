var images = ["https://iili.io/H6EO8E7.jpg"];

var currentIndex = 0;
var totalClicks = 0;

function randomizeImage() {
  let root = document.documentElement;
  root.style.setProperty("--image", "url(" + images[currentIndex] + ")");
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  var puzzleItems = document.querySelectorAll("#puzz i");
  for (var i = 0; i < puzzleItems.length; i++) {
    puzzleItems[i].style.left =
      Math.random() * (window.innerWidth - 100) + "px";
    puzzleItems[i].style.top =
      Math.random() * (window.innerHeight - 100) + "px";
  }
}

randomizeImage();

function reloadPuzzle() {
  var doneItems = document.querySelectorAll(".done");
  doneItems.forEach(function (element) {
    element.classList.toggle("done");
  });
  var droppedItems = document.querySelectorAll(".dropped");
  droppedItems.forEach(function (element) {
    element.classList.toggle("dropped");
  });
  var allDoneElement = document.querySelector(".allDone");
  allDoneElement.style = "";
  allDoneElement.classList.toggle("allDone");
}

// mobile functionality
var puzzleItemsMobile = document.querySelectorAll("#puzz i");
puzzleItemsMobile.forEach(function (element) {
  element.addEventListener("touchstart", function () {
    totalClicks++;
    document.querySelector("#clicks").innerHTML = totalClicks;
  });
  element.addEventListener("touchend", function () {
    if (document.querySelector(".clicked")) {
      document.querySelector(".clicked").classList.toggle("clicked");
      element.classList.toggle("clicked");
    } else {
      element.classList.toggle("clicked");
    }
  });
});

// Remove desktop drag and drop functionality
