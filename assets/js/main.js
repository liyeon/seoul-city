const bannerSlide = new Swiper('.sc-banner .swiper',{
  loop:true,
  slidesPerView:3,// 화면에 보여질 배너 개수
  spaceBetween: 43, //간격
  autoplay:{
      delay:4000, // 4초
      disableOnInteraction: false     // 사용자가 건들더라도 자동재생유지
  },
  pagination:{
    el:".sc-banner .swiper-pagination",
    type:"fraction"
  },
  navigation:{
    nextEl:'.sc-banner .next',
    prevEl:'.sc-banner .prev'
  }
})