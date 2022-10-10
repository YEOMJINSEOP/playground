
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 10){
    window.scrollTo({x:0, y:700, behavior:'smooth'});
  };
});