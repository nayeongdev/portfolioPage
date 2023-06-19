const $ = (selector) => document.querySelector(selector);
const body = document.body;

function hasScrolled() {
  const scrollY = window.scrollY;
  const scrollDown = scrollY > lastScrollY;
  if (scrollDown) {
    $(".header").classList.add("hide");
  } else {
    $(".header").classList.remove("hide");
  }
  lastScrollY = scrollY;
}

// 스크롤 감지
let didScroll;
let lastScrollY = 0;

// 스크롤 이벤트
window.onscroll = (e) => (didScroll = true);

// 0.25초마다 스크롤 여부를 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(() => {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

// 스크롤 상태바
window.addEventListener("scroll", function () {
  let gauge = document.querySelector("html").scrollTop;
  let 높이 = document.querySelector("html").clientHeight;
  let 스크롤높이 = document.querySelector("html").scrollHeight;
  let width = (gauge / (스크롤높이 - 높이)) * 100;
  document.querySelector(".scroll-gauge").style.width = width + "%";
});

// // 스크롤 감지
// let lastScrollTop = 0;
// let delta = 5;
// let fixBox = $(".header");
// let didScroll;

// // 스크롤 이벤트
// window.onscroll = (e) => (didScroll = true);

// // 0.25초마다 스크롤 여부를 체크하여 스크롤 중이면 hasScrolled() 호출
// setInterval(() => {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);

// function hasScrolled() {
//   let nowScrollTop = window.scrollY;
//   const downCondition =
//     nowScrollTop > lastScrollTop && nowScrollTop > fixBox.offsetHeight;
//   const upCondition = nowScrollTop + window.innerHeight < body.offsetHeight;
//   console.log(
//     "nowScrollTop " + nowScrollTop + "\n" +
//       "downCondition " + downCondition + "\n" +
//       "upCondition " + upCondition
//   );
//   if (Math.abs(lastScrollTop - nowScrollTop) <= delta) {
//     console.log(ping);
//     return;
//   }

//   if (downCondition) {
//     //scroll down
//     fixBox.classList.remove("hide");
//   } else {
//     if (upCondition) {
//       //scroll up
//       fixBox.classList.add("hide");
//     }
//   }
//   lastScrollTop = nowScrollTop;
// }

// 모바일용 메뉴 버튼
$(".btn-menu-open").onclick = function () {
  body.classList.add("non-scroll");
  $(".gnb").classList.add("opened");
  $(".btn-menu-close").classList.add("opened");
  body.classList.add("non-scroll");
};

$(".btn-menu-close").onclick = function () {
  $(".gnb").classList.remove("opened");
  $(".btn-menu-close").classList.remove("opened");
  body.classList.remove("non-scroll");
};

const navs = document.querySelectorAll(".gnb a");
// .gnb의 a를 클릭했을 대 부드럽게 이동
navs.forEach((nav) => {
  nav.onclick = (e) => {
    $(".gnb").classList.remove("opened");
    $(".btn-menu-close").classList.remove("opened");
    body.classList.remove("non-scroll");
  };
});

// // top 버튼
// function clickme() {
//   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   window.scrollTo(0, 0);
// }

// 네비게이터 밑줄 표기
// const indicator = document.querySelector(".nav-indicator");
// const items = document.querySelectorAll(".nav-item");

// function handleIndicator(el) {
//   items.forEach((item) => {
//     item.classList.remove("is-active");
//     item.removeAttribute("style");
//   });

//   indicator.style.width = `${el.offsetWidth}px`;
//   indicator.style.left = `${el.offsetLeft}px`;
//   console.log(indicator.style.width);
//   console.log(indicator.style.left);
//   indicator.style.backgroundColor = el.getAttribute("active-color");

//   el.classList.add("is-active");
//   el.style.color = el.getAttribute("active-color");
// }

// let test = null;

// items.forEach((item, index) => {
//   item.addEventListener("click", (e) => {
//     test = e.target;
//     handleIndicator(e.target);
//   });
//   item.classList.contains("is-active") && handleIndicator(item);
// });

// window.onresize = function () {
//   if (test != null) {
//     handleIndicator(test);
//   }
// };
// window.onresize = function () {
//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   console.log(width);
//   console.log(height);
//   handleIndicator(e.target);
// };
