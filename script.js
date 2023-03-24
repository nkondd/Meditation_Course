const swiper1 = new Swiper('.swiper1', {
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
    pagination: {
    el: ".swiper-pagination1",
    clickable: false,
  },
navigation: {
nextEl: '.swiper-button-next1',
prevEl: '.swiper-button-prev1',
},
slidesPerView: 1,
spaceBetween: 10,
// using "ratio" endpoints
breakpoints: {
910: {
  slidesPerView: 2,
  spaceBetween: 20,
},
1200: {
  slidesPerView: 3,
  spaceBetween: 20,
},
}
});

const swiper2 = new Swiper('.swiper2', {
  autoplay: {
  delay: 9000,
  disableOnInteraction: false,
},
pagination: {
  el: ".swiper-pagination2",
  clickable: true,
},
navigation: {
nextEl: '.swiper-button-next2',
prevEl: '.swiper-button-prev2',
},
slidesPerView: 1,
spaceBetween: 10,
// using "ratio" endpoints
breakpoints: {
910: {
slidesPerView: 2,
spaceBetween: 20,
},
1200: {
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

