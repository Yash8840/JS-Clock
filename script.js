function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds/60) * 360 + 90;  // since we offset it by 90deg before
  const hour = now.getHours();
  const hourDegrees = (hour/12) * 360 + 90;
  const minutes = now.getMinutes();
  const minDegrees = (minutes/60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minDegrees}deg)`;
  // console.log(seconds);
  // console.log(hourDegrees);
}
setInterval(setDate , 1000);
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand')