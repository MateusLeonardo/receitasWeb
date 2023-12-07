const arrowRight = document.querySelector('.arrow-right');
const gridContainer = document.querySelector('.comunidade-grid')

function scrollToRight(e) {
    gridContainer.scrollBy({
      left: 600,
      behavior: "smooth"
    })
}

arrowRight.addEventListener('click', scrollToRight)


const arrowLeft = document.querySelector('.arrow-left')

function scrollToLeft(e) {
  gridContainer.scrollBy({
    left: -600,
    behavior: "smooth"
  })
}

arrowLeft.addEventListener('click', scrollToLeft)