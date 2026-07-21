
let bool = true
let count = 0
function toggleButton(id) {
    bool = !bool;
    count = count + 1
    if (bool == true) {
        document.getElementById(id).innerHTML = "bingo";
    }
    if (bool == false) {
        document.getElementById(id).innerHTML = "bongo";
    }
    if (count >= 30) {
        bool = 0
        document.getElementById(id).innerHTML = "you're quite the clicker arent you :p";
    }
}

function updateOpinion() {
    let now = new Date().getHours()
    if (now == 0) {document.getElementById("opinion").innerHTML = "Midnight! the time I realize it's bedtime, but stay up anyway"}
    if (now == 1) {document.getElementById("opinion").innerHTML = "I hope you have a wonderful night. Don't forget to sleep :3"}
    if (now == 2) {document.getElementById("opinion").innerHTML = "I remember many dreams about people close to me. You're in one!"}
    if (now == 3) {document.getElementById("opinion").innerHTML = "among us 3 am challange level impossible (gone rong) ski buddy"}
    if (now == 4) {document.getElementById("opinion").innerHTML = "You should sleep. You still got time, it's better than none :P"}
    if (now == 5) {document.getElementById("opinion").innerHTML = "BORN TO DIE / WORLD IS A FUCK / 鬼神 Kill Em All 1999"}
    if (now == 6) {document.getElementById("opinion").innerHTML = "Good morning! Starting the day this early is cool. Respectable."}
    if (now == 7) {document.getElementById("opinion").innerHTML = "Good morning! Today is a ... Friday! Was I right? Its a 1/7 chance."}
    if (now == 8) {document.getElementById("opinion").innerHTML = "8 in the morning can either be a crazy vibe, or really annoying."}
    if (now == 9) {document.getElementById("opinion").innerHTML = "The chance I'm something you think I'm not is low, but never zero."}
    if (now == 10) {document.getElementById("opinion").innerHTML = "Imagine life if you had a breath counter. Just as a statisitic."}
    if (now == 11) {document.getElementById("opinion").innerHTML = "I love you! Love is a strong word. I love you! Love is a strong..."}
    if (now == 12) {document.getElementById("opinion").innerHTML = "the rain is coming we need to get to a buncle. slug schlat."}
    if (now == 13) {document.getElementById("opinion").innerHTML = "Ask me of the most complex word i know, I'll answer perplexed."}
    if (now == 14) {document.getElementById("opinion").innerHTML = "You probably think I'm smart for making this......"}
    if (now == 15) {document.getElementById("opinion").innerHTML = "This text changes every hour. I manually wrote 24 unique sentances."}
    if (now == 16) {document.getElementById("opinion").innerHTML = "I HAAATEE nothing. You thought I'd say something crazy, huh?"}
    if (now == 17) {document.getElementById("opinion").innerHTML = "You are now aware of your breathing. You can't even take revenge."}
    if (now == 18) {document.getElementById("opinion").innerHTML = "The meaning of li- WAIT NO PLEASE NOT YET- AHHH NONO I'LL DO A- "}
    if (now == 19) {document.getElementById("opinion").innerHTML = "19 dollar fortnite card. Who wants it? And yes I am giving it away."}
    if (now == 20) {document.getElementById("opinion").innerHTML = "I am a billionare. Confess your feelings for me, u get 10 million."}
    if (now == 21) {document.getElementById("opinion").innerHTML = "This website is an experience. The equivalent of giving me a kiss."}
    if (now == 22) {document.getElementById("opinion").innerHTML = "Last hour's message was cringe. Wait here for 23 hours to see it!"}
    if (now == 23) {document.getElementById("opinion").innerHTML = "I love it when bad songs have one good part. You got me dancing."}

}

function updateClock() {
  const now = new Date();
    let hours = String(now.getHours()).padStart(2, 0)
    let minutes = String(now.getMinutes()).padStart(2, 0)
    let seconds = String(now.getSeconds()).padStart(2, 0)
  document.getElementById("clock").textContent = hours+":"+minutes+":"+seconds
}
updateClock()
updateOpinion()
setInterval(updateClock, 1000);
setInterval(updateClock, 1000);

