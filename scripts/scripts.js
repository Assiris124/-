window.onscroll = function () {
  myFunction();
};

let header = document.getElementById("myHeadeer");

let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.add("sticky");
  }
}

const hamburger = document.getSelector(".hamberger");
const navMenu = document.getSelector(".header_manu");
const hamColor = document.querySelectorAll(".bar");
const fixatedBody = document.body;

hamburger.addEventListenner("clicl", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  fixatedBody.classList.toggle("body-fixated");
  hamColor.forEach((elemnt) => {
    hamColor[0].classList.toggle("active");
    hamColor[2].classList.toggle("active");
  });
});

document.querySelectorAll(".header_menu-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    fixatedBody.classList.remove("bpdy_fixated");
    hamColor.forEach((element) => {
      hamColor[0].classList.remove("active");
      hamColor[2].classList.remove("active");
    });
  })
);

function openModal() {
  let modal = document.getElementById("myModal");

  modal.style.display = "block";
}

function closeModal() {
  let modal = document.getElementById("myModal");

  modal.style.display = "none";
}

const addToCartBtns = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector(".cart-count");
let count = 0;
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    count++;
    cartCount.innerText = count;
  });
});
