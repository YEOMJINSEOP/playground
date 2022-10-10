
window.addEventListener('scroll', (event) => {
  console.log(event.deltaY);
})

// document.addEventListener('scroll', (event) => {
//   console.log('scroll?');
// })

const scrollBtn = document.querySelector('.scrollBtn');

scrollBtn.addEventListener('click', (event) => {
  window.scrollTo(0, 700);
})