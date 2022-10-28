const date = new Date();

const renderCalendar = () => {

  //修改date对象为10月1日
  date.setDate(1);//10月1日
  
  const monthDays = document.querySelector(".days");

  //获取10月最后一天
  const lastDay = new Date(
    date.getFullYear(),//2022
    date.getMonth() + 1, //10即11月
    0
  ).getDate();//10月31日
  console.log(lastDay)//31

//获取9月最后一天
  const prevLastDay = new Date(
    date.getFullYear(),//2022
    date.getMonth(),//9即10月
    0
  ).getDate();//9月30日
  console.log(prevLastDay)//30

//获取10月15日是周几
  const firstDayIndex = date.getDay();
  // console.log(firstDayIndex)//6 10月15日

//获取10月31日是周一
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  console.log(lastDayIndex)//1

  //下一天是周几
  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toLocaleString('zh-CN');

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
