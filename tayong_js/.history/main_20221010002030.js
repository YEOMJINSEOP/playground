
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 10){
    window.scrollTo(0, 700);
  };
});