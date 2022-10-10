
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 30){
    window.scrollTo(0, 400,{behavior:'smooth'});
  };
});

