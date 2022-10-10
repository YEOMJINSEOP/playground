const hiddenContainer = document.querySelector('.hidden_container');
const hiddenContainerTitle = document.querySelector('.hidden_container_title');
const logo = document.querySelector('.logo');
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 0){
    console.log('deltaY', event.deltaY);
    hiddenContainerTitle.scrollIntoView({
      block: "start",
      inline:'center',
      behavior: "smooth"});
  };
  else(event.deltaY < 0){

  }
});

