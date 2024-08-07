// 메인 슬라이드 주요뉴스
const newsSlide = new Swiper('.group-news .swiper',{
  loop:true,
  autoplay:{
      delay:4000, // 4초
      disableOnInteraction: false     // 사용자가 건들더라도 자동재생유지
  },
  pagination:{
    el:".group-news .swiper-pagination",
    type:"fraction"
  },
  navigation:{
    nextEl:'.group-news .next',
    prevEl:'.group-news .prev'
  }
})
// 메인 슬라이드 시민 참여
const citizenSlide = new Swiper('.group-citizen .swiper',{
  loop:true,
  autoplay:{
      delay:4000, // 4초
      disableOnInteraction: false     // 사용자가 건들더라도 자동재생유지
  },
  pagination:{
    el:".group-citizen .swiper-pagination",
    type:"fraction"
  },
  navigation:{
    nextEl:'.group-citizen .next',
    prevEl:'.group-citizen .prev'
  }
})

// 첫 페이지 로딩시 자동 재생
newsSlide.autoplay.start();
// 첫 페이지 로딩시 자동 재생 멈춤
citizenSlide.autoplay.stop();

$('.btn-news').on('click', function() { // 뉴스 버튼 클릭시
  citizenSlide.autoplay.stop();//시민참여 슬라이드 멈춤
  newsSlide.autoplay.start(); // 뉴스 슬라이드 재생
  $('.group-citizen .swiper').removeClass('active'); // active 클래스 삭제
  $('.group-news .swiper').addClass('active'); // active 클래스 추가
  $('.btn-citizen').removeClass('on'); // 버튼에 on 클래스 삭제
  $(this).addClass('on'); // 현재 누른 버튼에 on 클래스 추가
});

$('.btn-citizen').on('click', function() {
  newsSlide.autoplay.stop();
  citizenSlide.autoplay.start();
  $('.group-news .swiper').removeClass('active');
  $('.group-citizen .swiper').addClass('active');
  $('.btn-news').removeClass('on');
  $(this).addClass('on');
});

// 메인 슬라이드 재생/정지
function toggleAutoplay(group, slide) {
  $(`.${group} .start`).on('click', function() {
      slide.autoplay.start();
      $(`.${group} .start`).removeClass('on');
      $(`.${group} .stop`).addClass('on');
  });

  $(`.${group} .stop`).on('click', function() {
      slide.autoplay.stop();
      $(`.${group} .stop`).removeClass('on');
      $(`.${group} .start`).addClass('on');
  });
}

toggleAutoplay('group-news', newsSlide);
toggleAutoplay('group-citizen', citizenSlide);

//배너 슬라이드
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
//배너 슬라이드 재생,정지


//관련 사이트
$('.related-item').click(function (e) { 
  e.preventDefault();
  if ($(this).hasClass('on')) {
    $(this).removeClass('on').find('.sub-wrap').stop().slideUp();
  } else {
    $('.related-item').removeClass('on').find('.sub-wrap').stop().slideUp();
    $(this).addClass('on').find('.sub-wrap').stop().slideDown();
  }
});