
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 10){
    console.log('you wheel!');
  };
})

// document.addEventListener('scroll', (event) => {
//   console.log('scroll?');
// })

const scrollBtn = document.querySelector('.scrollBtn');

scrollBtn.addEventListener('click', (event) => {
  window.scrollTo(0, 700);
})