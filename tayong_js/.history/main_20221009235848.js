
window.addEventListener('click', (event) => {
  console.log(event.clientY);
})

// document.addEventListener('scroll', (event) => {
//   console.log('scroll?');
// })


const scrollBtn = document.querySelector('.scrollBtn');
scrollBtn.addEventListener('click', () => {
  console.log('you scrolled!!');
})

const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
  console.log('hi!');
})