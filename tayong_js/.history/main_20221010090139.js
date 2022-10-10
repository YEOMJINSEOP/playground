
window.addEventListener('wheel', (event) => {
  const scrolldown = true
  if(event.deltaY > 20 && scrolldown){
    window.scrollTo(0, 700,{behavior:'smooth'});
    scrolldown = false;
  };
});

