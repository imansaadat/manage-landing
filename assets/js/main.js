// Swiper JS 
  var swiper = new Swiper(".statements_slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay:{
      delay:6000,
      disableOnInteraction:false,
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      768:{
        slidesPerView:2,
      },
      991:{
        slidesPerView:3,
      }
    }
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if(window.scrollY > 0){
      header.classList.add('sticky')
    }
    else{
      header.classList.remove('sticky')
    }
  });

//header responsive
  let listItems = document.querySelector('.list_items')
  let menu = document.querySelector('.fa-bars')
  menu.addEventListener('click',()=>{
    listItems.classList.toggle('show')
    menu.classList.toggle('show')
  })