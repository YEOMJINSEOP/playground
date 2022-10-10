
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 10){
    window.scrollTo({top: 700, left: 800, behavior:'smooth'});
  };
});