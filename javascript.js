
let bool = true
let count = 0

function nextButton(id) {
  document.getElementById(id).textContent = "coming never";
}

function updateClock() {
  const now = new Date();
    let hours = String(now.getHours()).padStart(2, 0)
    let minutes = String(now.getMinutes()).padStart(2, 0)
    let seconds = String(now.getSeconds()).padStart(2, 0)
  document.getElementById("clock").textContent = hours+":"+minutes+":"+seconds
}

updateClock()
setInterval(updateClock, 1000);

