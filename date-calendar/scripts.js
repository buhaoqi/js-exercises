//初始化：把数据渲染到DOM中

//创建一个date对象获取当前系统时间
const date = new Date()

function renderCalendar(){
    //本月第一天
date.setDate(1)

//本月最后一天
const lastDay = new Date(
    date.getFullYear(),//2022
    date.getMonth()+1,//9
    0
).getDate()

//上个月最后一天
const prevLastDay = new Date(
    date.getFullYear(),//2022
    date.getMonth(),//9
    0
).getDate()

//本月第一天是星期几
const firstDayIndex = date.getDay() //0 - 6

//本月最后一天是星期几
const lastDayIndex = new Date(
    date.getFullYear(),//2022
    date.getMonth()+1,//9
    0
).getDay()
console.log(lastDayIndex)

//下个月有几天
const nextdays = 7 - lastDayIndex - 1

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

  document.querySelector(".month h2").innerHTML = months[date.getMonth()];

  let timer = setInterval(function(){
    document.querySelector(".month p").innerHTML = new Date().toLocaleString('zh-CN');
  },1000)

let str = ''

for (let i = firstDayIndex; i > 0; i--){
    str += `<span>${prevLastDay - (i - 1)}</span>`
}

for(let i = 1; i <= lastDay; i++){
    str += `<span>${i}</span>`
}

for(let i = 1; i <= nextdays; i++){
    str += `<span>${i}</span>`
}
const daysCol = document.querySelector('.days .col')
daysCol.innerHTML = str
}

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });
  
  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });
  
  renderCalendar();