const hiddenContainer = document.querySelector('.hidden_container')
let scrolldown = true
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 0 && scrolldown){
    hiddenContainer.scrollIntoView({behavior: "smooth"});
    scrolldown = false;
  };
});

