var swiper = new Swiper(".mySwiper", {
    
    spaceBetween: 30,
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: true,
      keyboard: true,
      autoplay: true
  });


  var mq = window.matchMedia( "(max-width: 992px)" );
  if (mq.matches) {
    var swiper = new Swiper(".mySwiper", {
    
        spaceBetween: 30,
        slidesPerView: 2,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          mousewheel: true,
          keyboard: true,
          autoplay: true
      });
   }


   