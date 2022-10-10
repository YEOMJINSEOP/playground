
window.addEventListener('click', (event) => {
  console.log(event.clientY);
})

// document.addEventListener('scroll', (event) => {
//   console.log('scroll?');
// })

const scrollBtn = document.querySelector('.scrollBtn');

scrollBtn.addEventListener('click', (event) => {
  window.scrollTo(0, 300);
})