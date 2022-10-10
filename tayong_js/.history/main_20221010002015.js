
window.addEventListener('wheel', (event) => {
  if(event.deltaY > window.innerHeight / 2){
    window.scrollTo(0, 700);
  };
});