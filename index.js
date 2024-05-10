const todo = document.getElementById("todo");

setInterval(() => {
  total_time = new Date();
  hrs = total_time.getHours();
  mnt = total_time.getMinutes();
  sec = total_time.getSeconds();
  hrt = 30 * hrs + mnt / 2;
  mrt = 6 * mnt;
  srt = 6 * sec;

  hour.style.transform = `rotate(${hrt}deg)`;
  minute.style.transform = `rotate(${mrt}deg)`;
  second.style.transform = `rotate(${srt}deg)`;

  if (hrs < 2) update("<span>Task 1<span>");
  else if (hrs < 9) update("<span>Task 2<span>");
  else if (hrs == 9 && mnt <= 30) update("<span>Task 3<span>");
  else if (hrs < 15) update("<span>Task 4<span>");
  else if (hrs < 17) update("<span>Task 1<span>");
  else if (hrs < 19) update("<span>Task 5<span>");
  else if (hrs < 23) update("<span>Task 6<span>");
  else update("<span>Task 1<span>");
}, 1000);

const update = (value) => {
  todo.innerHTML = value;
};
