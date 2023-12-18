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
scrollSlider();

function initMobileMenu() {
  const buttonMenuMobile = document.querySelector(".mobile-menu");

  function toggleMobileMenu() {
    const nav = document.querySelector(".menu-nav");
    nav.classList.toggle("ativo");
    buttonMenuMobile.classList.toggle("ativo");
  }

  buttonMenuMobile.addEventListener("click", toggleMobileMenu);
}
initMobileMenu();

function initAndCloseModalLogin() {
  const accountIcon = document.querySelector(".search-login");
  function toggleModalAccount() {
    const modal = document.querySelector(".modal-login");
    modal.classList.toggle("active");
  }
  accountIcon.addEventListener("click", toggleModalAccount);

  const buttonCloseModal = document.querySelector(".close-modal");
  function closeModal() {
    const modal = document.querySelector(".modal-login");
    modal.classList.remove("active");
  }
  buttonCloseModal.addEventListener("click", closeModal);

  const modal = document.querySelector(".modal-login");
  function clickOutsideModal(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
  modal.addEventListener("click", clickOutsideModal);
}
initAndCloseModalLogin();