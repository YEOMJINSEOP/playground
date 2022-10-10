
window.addEventListener('click', (event) => {
  console.log(event.clientY);
})

// document.addEventListener('scroll', (event) => {
//   console.log('scroll?');
// })

const scrollBtn1 = document.querySelector('.scrollBtn');

scrollBtn1.addEventListener('click', (event) => {
  console.log('you scrolled!!');
})