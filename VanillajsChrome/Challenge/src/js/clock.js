const clock = document.querySelector("#clock");

console.log(clock)

const todayTime = document.querySelector("#todayTime");



function getClock() {
  const date = new Date();
  const years = date.getFullYear();
  const month = date.getMonth() + 1;
  const days = String(date.getDate()).padStart(2, "0");
  let hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // 시간이 12시간 이상일경우 12로 나누어서 몫이 1이면 오후, 몫이 0이면 오전표기
  if (Math.floor(Number(hours) / 12) == 1) {
    hours = `오후 ${(String(Number(hours) % 12)).padStart(2, "0")}`
  } else {
    hours = `오전 ${String(Number(hours)).padStart(2, "0")}`
  }


  todayTime.textContent = `${years}년 ${month}월 ${days}일`
  clock.textContent = `${hours}시 ${minutes}분 ${seconds}초`
}
getClock()
setInterval(getClock, 1000);