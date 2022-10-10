const hiddenContainer = document.querySelector('.hidden_container');
const hiddenContainerTitle = document.querySelector('.hidden_container_title');
const logo = document.querySelector('.logo');
let wheelTimer;
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 0){
    console.log('deltaY', event.deltaY);
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(
      hiddenContainerTitle.scrollIntoView({
        block: 'center',
        inline:'center',
        behavior: "smooth"})
      , 50)
  } 
  else if(event.deltaY < 0){
    console.log('deltaY', event.deltaY);
    logo.scrollIntoView({
      block: "start",
      inline:'center',
      behavior: "smooth"});
    }
  }
);

