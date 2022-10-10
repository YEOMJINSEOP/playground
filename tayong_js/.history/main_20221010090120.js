
window.addEventListener('wheel', (event) => {
  const scrolldown = true
  if(event.deltaY > 10 && scrolldown){
    window.scrollTo(0, 00,{behavior:'smooth'});
    scrolldown = false;
  };
});

