
let bool = true
let count = 0
function toggleButton(id) {
    bool = !bool;
    count = count + 1
    if (bool == true) {
        document.getElementById(id).textContent = "bingo";
    }
    if (bool == false) {
        document.getElementById(id).textContent = "bongo";
    }
    if (count >= 20) {
        bool = 0
        document.getElementById(id).textContent = "oohh";
    }
    if (count >= 30) {
        bool = 0
        document.getElementById(id).textContent = "bussssss";
    }
}

function freakButton(id) {
  document.getElementById(id).textContent = "alright chill";
}

// you cheeky bastard
function updateOpinion() {
    let now = new Date().getHours()
    if (now == 0 ) {document.getElementById("opinion").innerHTML = "Midnight! the time I realize it's bedtime, but stay up anyway"}
    if (now == 1 ) {document.getElementById("opinion").innerHTML = "I hope you have a wonderful night. Don't forget to sleep :3"}
    if (now == 2 ) {document.getElementById("opinion").innerHTML = "I remember many dreams about people close to me. You're in one!"}
    if (now == 3 ) {document.getElementById("opinion").innerHTML = "the turning point"}
    if (now == 4 ) {document.getElementById("opinion").innerHTML = "You should sleep. You still got time, it's better than none :P"}
    if (now == 5 ) {document.getElementById("opinion").innerHTML = "make night society real! some people prefer night!"}
    if (now == 6 ) {document.getElementById("opinion").innerHTML = "Starting the day this early is cool. Respectable."}
    if (now == 7 ) {document.getElementById("opinion").innerHTML = "Good morning! Today is a ... Friday! Was I right? Its a 1/7 chance."}
    if (now == 8 ) {document.getElementById("opinion").innerHTML = "8 in the morning can either be a crazy vibe, or really annoying."}
    if (now == 9 ) {document.getElementById("opinion").innerHTML = "The chance I'm something you think I'm not is low, but never zero."}
    if (now == 10) {document.getElementById("opinion").innerHTML = "Imagine life if you had a breath counter. Just as a statisitic."}
    if (now == 11) {document.getElementById("opinion").innerHTML = "Someone needs to die for the tyranny being committed"}
    if (now == 12) {document.getElementById("opinion").innerHTML = "make up your own text for this space"}
    if (now == 13) {document.getElementById("opinion").innerHTML = "my favorite colour is a deep red orange."}
    if (now == 14) {document.getElementById("opinion").innerHTML = "You probably think I'm smart for making this......"}
    if (now == 15) {document.getElementById("opinion").innerHTML = "For what it's worth, i know for a FACT you're human."}
    if (now == 16) {document.getElementById("opinion").innerHTML = "Hey."}
    if (now == 17) {document.getElementById("opinion").innerHTML = "seeing this hour feels good. the day is far from over :D"}
    if (now == 18) {document.getElementById("opinion").innerHTML = "Listen to Eyedazzler by Alison's Halo"} //please do
    if (now == 19) {document.getElementById("opinion").innerHTML = "This website is no longer just what it was supposed to be"}
    if (now == 20) {document.getElementById("opinion").innerHTML = "Our world is neutral. It's inhabitants are what makes it cruel"}
    if (now == 21) {document.getElementById("opinion").innerHTML = "Why hate?"}
    if (now == 22) {document.getElementById("opinion").innerHTML = "this textbox cycles through 24 different one-liners i wrote."}
    if (now == 23) {document.getElementById("opinion").innerHTML = "halve it and give it to the previous person"}
}

function SPLASH() {
  const splashes = [
    "your's truly [sic]",
    "Yours truly",
    "friendly",
    "i don't bite",
    "im not doing that bro",
    "say hi!",
    "why hate?",
    "zaza hq",
    "um",
    "bazinga",
    "pouseyclat",
    "also im shronking it",
    "pigging out",
    "shhh",
    "pss pss pss",
    ">w<",
    "^w^",
  ];

 const chosen = splashes[Math.floor(Math.random() * splashes.length)];
  const splashText = document.getElementById("splash-text");

  splashText.textContent = "";
  let i = 0;
  const approxSpeed = 80 + (Math.random() * 10)

  function type() {
    if (i < chosen.length) {
      splashText.textContent += chosen[i];
      i++;
      setTimeout(type, approxSpeed);
    }
  }
  type();
}

function typeOut(element) {
  let length = element.length
  return length
}

function updateClock() {
  const now = new Date();
    let hours = String(now.getHours()).padStart(2, 0)
    let minutes = String(now.getMinutes()).padStart(2, 0)
    let seconds = String(now.getSeconds()).padStart(2, 0)
  document.getElementById("clock").textContent = hours+":"+minutes+":"+seconds
}

SPLASH()
updateClock()
updateOpinion()
setInterval(updateClock, 1000);
setInterval(updateClock, 1000);

