const prizes = [
  {
    id: 0,
    msg: "WIN WIN WIN",
  },
  {
    id: 1,
    msg: "HARD LUCK",
  },
  {
    id: 2,
    msg: "oh.. no..",
  },
  {
    id: 3,
    msg: "HARD LUCK",
  },
  {
    id: 4,
    msg: "Unfortunate :(",
  },
  {
    id: 5,
    msg: "HARD LUCK",
  },
  {
    id: 6,
    msg: "MISCHANCE",
  },
  {
    id: 7,
    msg: "HARD LUCK",
  },
  {
    id: 8,
    msg: "SO SORRY",
  },
  {
    id: 9,
    msg: "HARD LUCK",
  },
  {
    id: 10,
    msg: "SORRY",
  },
  {
    id: 11,
    msg: "HARD LUCK",
  },
];

var activeBtn = false;
var audio = new Audio("./assets/wheel-audio.mp3");

function randomNum() {
  var prizeNum;
  do {
    prizeNum = Math.floor(Math.random() * 12);
  } while (prizeNum === 0);
  console.log(prizeNum);
  return prizeNum;
}

// console.log(prizeNum);

function removeClass() {
  prize = randomNum();

  document.getElementById("spinner").classList.remove("spin");
  document.getElementById("spin-btn").classList.remove("disabled");
  //   document.getElementById("spinner").classList.add("shake");

  document.getElementById("spinner").style.transform =
    "rotate(" + prize * 30 + "deg)";

  $(".pop-up-content").fadeIn();

  setTimeout(function () {
    document.getElementById("spin-btn").disabled = false;
    document.getElementById("arrow").classList.add("float");
    activeBtn = false;
  }, 2000);

  prizeText = prizes[prize].msg;

  document.getElementsByClassName("pop-up-para")[0].innerHTML = prizeText;
  $(".pop-up").fadeIn();
}

function spin() {
  activeBtn = true;
  audio.play();

  //   document.getElementById("spinner").classList.remove("shake");
  document.getElementById("arrow").classList.remove("float");
  document.getElementById("spinner").classList.add("spin");
  document.getElementById("spin-btn").disabled = true;

  setTimeout(removeClass, 5000);
}

document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === " " && activeBtn === false) {
    $("#spin-btn").trigger("click");
  }
});
