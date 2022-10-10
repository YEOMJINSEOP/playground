const hiddenContainer = document.querySelector('.hidden_container')
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 0 && scrolldown){
    hiddenContainer.scrollIntoView({behavior: "smooth"});
  };
});

