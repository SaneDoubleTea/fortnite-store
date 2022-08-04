const navBtn = document.querySelector(".nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.body;

//Клик по кнопке
navBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleMobilenav();
});

//Клик по окну за пределами навигации
window.addEventListener("click", function () {
  if (body.classList.contains("no-scroll")) {
    toggleMobilenav();
  }
});
//останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener("click", function (event) {
  event.stopPropagation();
});

function toggleMobilenav() {
  mobileNav.classList.toggle("mobile-nav-active");
  navBtn.classList.toggle("nav-btn-close");
  body.classList.toggle("no-scroll");
}

//статичный хедер при скролле
(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add("header--active");
    } else {
      header.classList.remove("header--active");
    }
  };
})();

