const hiddenContainer = document.querySelector('.hidden_container')
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 0){
    hiddenContainer.scrollIntoView({behavior: "smooth"});
  };
});

