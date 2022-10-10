
const scrolldown = true
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 0 && scrolldown){
    window.scrollTo(0, 700,{behavior:'smooth'});
    scrolldown = false;
  };
});

