var swiper = new Swiper(".mySwiper", {
  // direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let input = document.querySelector("#email");
let error = document.querySelector("#error");
document.querySelector('#email').onblur = function () {
  if (!input.value.includes("@")) {
    // @ 유무를 이용해 유효한 이메일 주소가 아닌지 체크
    input.classList.add("invalid");
    error.innerHTML = "올바른 이메일 주소를 입력하세요.";
  }
};

input.onfocus = function () {
  if (this.classList.contains("invalid")) {
    // 사용자가 새로운 값을 입력하려고 하므로 에러 메시지를 지움
    this.classList.remove("invalid");
    error.innerHTML = "";
  }
};

// 메일 보내기
$(".contact-form button").onclick = (e) => {
  e.preventDefault();

  emailjs.init("mYqdnZb27XpamI9LX");
  emailjs.sendForm("service_a34fwks", "template_fe49rig", "#myForm").then(
    function (response) {
      alert("메시지 전송 성공");
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      alert("메시지 전송 실패");
      console.log("FAILED...", error);
    }
  );
  console.log("전송 완료!");
};
