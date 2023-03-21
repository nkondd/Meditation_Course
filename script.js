const swiper = new Swiper('.swiper', {
  //   autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
slidesPerView: 1,
spaceBetween: 10,
// using "ratio" endpoints
breakpoints: {
'@1.00': {
  slidesPerView: 2,
  spaceBetween: 20,
},
'@1.50': {
  slidesPerView: 3,
  spaceBetween: 20,
},
}
});

//Select the <a> element
const itemButton = document.querySelector('.item__button');

//Hide the element on page load
itemButton.style.opacity = '0';

//Listen for the scroll event on window
window.addEventListener('scroll', () => {
  //Check if window's scrollY is bigger than 100vh
  if(window.scrollY > 400) {
    //Show the <a> element
    itemButton.style.opacity = '1';
    itemButton.style.transition = 'opacity 0.25s ease-in';
  } else {
    //Hide the <a> element
    itemButton.style.opacity = '0';
    itemButton.style.transition = 'opacity 0.25s ease-out';
  }
});

const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");    
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

// Slider

