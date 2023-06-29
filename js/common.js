const $ = (selector) => document.querySelector(selector);
const body = document.body;

// 메뉴 동적 활성화
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop - 200) {}

  navItems.forEach((link) => link.classList.remove("active"));
  navItems[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

// 헤더부분 반투명으로 변환
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $(".header").classList.add("semi-transparent");
  } else {
    $(".header").classList.remove("semi-transparent");
  }
}

// 스크롤 상태바
window.addEventListener("scroll", function () {
  let gauge = document.querySelector("html").scrollTop;
  let 높이 = document.querySelector("html").clientHeight;
  let 스크롤높이 = document.querySelector("html").scrollHeight;
  let width = (gauge / (스크롤높이 - 높이)) * 100;
  document.querySelector(".scroll-gauge").style.width = width + "%";
});

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
