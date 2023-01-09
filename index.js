let englishBlock = document.getElementById('english');
let percent = document.querySelector('.percent');
let loader = document.querySelector('.english-loader');
let interval;
let current = 0;

let heightBlock = englishBlock.offsetHeight;
let offsetBlock = offset(englishBlock).top
const animStart = 1;
let animItemPoint = window.innerHeight - heightBlock / animStart;
function isVisible(elem) {

  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}
window.addEventListener('scroll', () => {
  
  if (
    scrollY > offsetBlock - animItemPoint &&
    screenY < offsetBlock + heightBlock
  ) {
    interval = setInterval(increment, 100);
  }
  
});
function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
function increment() {
  if (current <= 78) {
    current = current + 1;
    percent.innerHTML = current + "%";
    loader.classList.add("finish");
  } else {
    clearInterval(interval);
  }
}

let viewport = document.querySelector('.projects-slider').offsetWidth;
let btnNext = document.getElementById('next');
let btnPrev = document.getElementById('prev');
let slider = document.querySelector('.projects-container')
let viewSliders = document.querySelectorAll('.view-slide')
let viewSlide = 0
viewSliders[0].classList.add('active')
btnNext.addEventListener('click', () => {
  viewSliders[viewSlide].classList.remove('active')
if(viewSlide < 3){
  viewSlide++
} else {
  viewSlide=0
}

viewSliders[viewSlide].classList.add('active')
slider.style.left = -viewSlide * viewport + 'px'
})
btnPrev.addEventListener('click',() => {
  viewSliders[viewSlide].classList.remove('active')
  if(viewSlide > 0){
    viewSlide--
  } else {
    viewSlide=3
  }
  viewSliders[viewSlide].classList.add('active')
  slider.style.left = -viewSlide * viewport + 'px'
})