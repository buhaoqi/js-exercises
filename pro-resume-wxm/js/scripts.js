
// 滑块
const aBar = document.querySelectorAll('.progress progress')
const aLabel = document.querySelectorAll('.progress label')
const oBarParent = document.querySelector('.skills .skills-illustrate')
const numbers = [90, 85, 80, 80, 60]

const aboutImage = document.querySelector('.about-img')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')

window.addEventListener('scroll', function () {
    if (!checkScroll(oBarParent)) return
    aBar.forEach((bar, i) => {
        bar.value = numbers[i]
    })
    aLabel.forEach((label, i) => {
        label.innerHTML = numbers[i] + '%'
        label.style.left = `calc(${numbers[i]}% - 20px)`
    })
})

window.addEventListener('scroll', function () {
    if (!checkScroll(aboutImage)) return
    moveToRight(aboutImage)

})

const aDiv = document.querySelectorAll('.timeline div')

window.addEventListener('scroll', function () {
    aDiv.forEach( (div,i) => {
        if (!checkScroll(div)) return
        if(i%2 == 0){
            moveToLeft(div)
        } else {
            moveToRight(div)
        }
    })
})

// window.addEventListener('scroll', function () {
//     if (!checkScroll(box1)) return
//     moveToRight(box1)
// })
// window.addEventListener('scroll', function () {
//     if (!checkScroll(box2)) return
//     moveToLeft(box2)

// })
// window.addEventListener('scroll', function () {
//     if (!checkScroll(box3)) return
//     moveToRight(box3)

// })
// window.addEventListener('scroll', function () {
//     if (!checkScroll(box4)) return
//     moveToLeft(box4)

// })

function checkScroll(ele) {
    let rect = ele.getBoundingClientRect()//查询视口坐标 返回对象
    if (rect.top + ele.offsetHeight <= window.innerHeight) {
        return true
    }
    return false
}

// header scroll
const navbar = document.querySelector('header')
//scroll to top
const oBackBtn = document.querySelector('.back-to-top')
const oLanding = document.querySelector('.landing')
oBackBtn.style.display = 'none'
window.onscroll = function(){
    //header
    if (this.scrollY > 20) {
        navbar.classList.add('scroll')
    } else {
        navbar.classList.remove('scroll')
    }
    //scroll to top
    console.log(window.pageYOffset,window.innerHeight)
    if(window.pageYOffset > window.innerHeight) {
        oBackBtn.style.display = 'block'
    } else {
        oBackBtn.style.display = 'none'
    }
}
oBackBtn.onclick = scrollToTop
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

//animation

let on1 = true
let on2 = true
function moveToRight(ele){
    // if(on1){
        ele.classList.add('animation-to-right')
    // }
    // on1 = false
}
function moveToLeft(ele){
    // if(on2){
        ele.classList.add('animation-to-left')
    // }
    // on2 = false
}

//
const mainNav = document.querySelector('.main-nav')
const links = mainNav.querySelectorAll('.main-nav a')
const activeBar = mainNav.querySelector('.active-bar')


activeBar.style.width = links[0].offsetWidth + 'px'

for(var i=0;i<links.length;i++){
    links[i].onclick = function(){
        activeBar.style.width = this.offsetWidth + 'px'
        activeBar.style.left = this.offsetLeft + 'px'
    }
}