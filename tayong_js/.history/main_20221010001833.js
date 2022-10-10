
window.addEventListener('wheel', (event) => {
  console.log(event.originalEvent.deltaY);
})

// document.addEventListener('scroll', (event) => {
//   console.log('scroll?');
// })

const scrollBtn = document.querySelector('.scrollBtn');

scrollBtn.addEventListener('click', (event) => {
  window.scrollTo(0, 700);
})