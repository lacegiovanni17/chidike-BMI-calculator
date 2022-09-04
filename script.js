const hours = document.querySelector(".hours");
const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".secs");

function x() {
  let showTime = new Date();
  let sec = showTime.getSeconds() * 6;
  let min = showTime.getMinutes() * 6;
  let hrs = showTime.getHours() * 30;

  seconds.style.transform = `rotateZ(${sec}deg)`;
  minutes.style.transform = `rotateZ(${min}deg)`;
  hours.style.transform = `rotateZ(${hrs + min / 12}deg)`;
}
setInterval(x, 1000);
