var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$(function(){
  $("button").click(function(){
   if($('.nav').hasClass("open")){
      $('.nav').removeClass("open");
      $('.navshadow').css("display","none");
      $('span').removeClass("open");
   } else {
    $('.nav').addClass("open");
    $('.navshadow').css("display","block");
    $('span').addClass("open");
   }
  });
});

$('.nav li a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top - 100;
  $('html,body').animate({
    'scrollTop':position
  }, 1000);
});

const cons =  document.querySelector('.box4');
const use =  document.querySelector('.box5');
const room =  document.querySelector('.box6');


const cb = function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('inview');
      observer.unobserve(entry.target);
    }
  })
}

const options = {
  root:null,
  rootMargin: "0px",
  threshold: 0.25
};

const io = new IntersectionObserver(cb, options);
io.observe(cons);
io.observe(use);
io.observe(room);

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".boxA").css("background-color","rgba(115, 103, 88, 0.6)");
  } else {
    $(".boxA").css("background-color","rgba(115, 103, 88, 1)");
  }
});
