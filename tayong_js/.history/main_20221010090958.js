const hiddenContainer = document.querySelector('.hidden_container')
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 0){
    console.log('deltaY', event.deltaY);
    hiddenContainer.scrollIntoView({
      block: "center",
      inline:'center',
      behavior: "smooth"});
  };
});

