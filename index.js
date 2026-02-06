$(".slide-1").delay(500).hide().slideDown().delay(1000);
$(".slide-2").delay(1000).hide().slideDown().delay(500);
$(".slide-3").delay(1500).hide().slideDown().delay(0);
$(".box").animate({
  borderRadius: "3ch",
});
$(".boxes-grid").delay(2000).animate({
  gap: "20px",
});

var boxes = [
  ".box-1",
  ".box-2",
  ".box-3",
  ".box-4",
  ".box-5",
  ".box-6",
  ".box-7",
  ".box-8",
  ".box-9",
];

var gamePattern = [];
var userPattern = [];
var level = 0;

for (var i = 0; i <= 8; i++) {
  document.querySelectorAll(".box")[i].addEventListener("click", function () {
    var itemClassList = "." + this.classList[1];
    userPattern.push(itemClassList);
    var audio = new Audio("sounds/beep.mp3");
    audio.play();
    this.classList.add("blinck");
    setTimeout(() => {
      this.classList.remove("blinck");
    }, 150);
    checkAnswer(userPattern.length - 1);
  });
}

function nextSequence() {
  userPattern = [];
  randomNum = Math.floor(Math.random() * 9);
  randomChosenBox = boxes[randomNum];
  gamePattern.push(randomChosenBox);
  $(randomChosenBox).fadeOut(200).fadeIn(200);
  var audio = new Audio("sounds/beep.mp3");
  audio.play();
  level++;
  document.querySelector("h2").textContent = "Level: " + level;
}

$(document).on("keydown", function (event) {
  if (event.key === "s") {
    if (gamePattern.length === 0) {
      nextSequence();
    }
  }
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    document.querySelector("body").classList.add("blinck-wrong");
    setTimeout(() => {
      document.querySelector("body").classList.remove("blinck-wrong");
    }, 300);

    $("h2").text("Game Over, Press S to Restart");
    gamePattern = [];
    level = 0;
  }
}
