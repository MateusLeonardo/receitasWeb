function scrollSlider() {
  const arrowRight = document.querySelector(".arrow-right");
  const gridContainer = document.querySelector(".comunidade-grid");

  function scrollToRight(e) {
    gridContainer.scrollBy({
      left: 600,
      behavior: "smooth",
    });
  }

  arrowRight.addEventListener("click", scrollToRight);

  const arrowLeft = document.querySelector(".arrow-left");

  function scrollToLeft(e) {
    gridContainer.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  }

  arrowLeft.addEventListener("click", scrollToLeft);
}
scrollSlider()


const buttonMenuMobile = document.querySelector('.mobile-menu')


function toggleMobileMenu() {
  const nav = document.querySelector('.menu-nav')
  nav.classList.toggle('ativo')
  buttonMenuMobile.classList.toggle('ativo')
}

buttonMenuMobile.addEventListener('click', toggleMobileMenu)