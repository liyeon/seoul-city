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
function mainPlay(group, slide) {
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

mainPlay('group-news', newsSlide);
mainPlay('group-citizen', citizenSlide);

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
$('.sc-banner .start').hide(); // 시작 시 재생 버튼 숨기기

$('.sc-banner .start').on('click',function() {
  bannerSlide.autoplay.start();
  $('.start').hide();
  $('.stop').show();
});

$('.sc-banner .stop').on('click',function() {
  bannerSlide.autoplay.stop();
  $('.stop').hide();
  $('.start').show();
});


//관련 사이트
$('.related-item').on('click',function (e) { 
  e.preventDefault();
  if ($(this).hasClass('on')) {
    $(this).removeClass('on').find('.sub-wrap').stop().slideUp();
  } else {
    $('.related-item').removeClass('on').find('.sub-wrap').stop().slideUp();
    $(this).addClass('on').find('.sub-wrap').stop().slideDown();
  }
});

// 상단 이동 버튼
  // 스크롤 이벤트 핸들러
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) { // 스크롤이 100px 이상일 때
    $('.btn-top').addClass('on'); 
  } else {
    $('.btn-top').removeClass('on'); 
  }
});

// 버튼 클릭 시 상단으로 스크롤
$('.btn-top').on('click',function() {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false; // 클릭 시 기본 동작 방지
});