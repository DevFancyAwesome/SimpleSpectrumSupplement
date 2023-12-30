$(document).ready(function() {
  $('.menu-toggle').click(function(e) {
      console.log("Mobile toggle");
      $(this).toggleClass('open');
      $('.mobile-group').slideToggle(300);
  });
  
  $('.school-partnerships .partners').on('init', function(event, slick, direction){
    $(this).css('opacity', '1');
  });
  
  $('.school-partnerships .partners').slick({
      arrows: false,
      infinite: true,
      mobileFirst: true,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button"></button>',
      nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"></button>',
      responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
          dots: false,
        }
      }]
  });
  
  $('.school-free-from .items.mobile').slick({
      arrows: false,
      infinite: true,
      dots: true
  });
  
  $('.school-testimonials .testimonials').slick({
      arrows: false,
      mobileFirst: true,
      dots: true,
      adaptiveHeight: true,
      prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button"></button>',
      nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"></button>',
      responsive: [{
        breakpoint: 1000,
        settings: {
          arrows: true,
          dots: false,
          fade: true,
          adaptiveHeight: true
        }
      }]
  });
  
  $('.slider-inside').slick({
      slidesToShow: 1,
      infinite:true,
      arrows: false,
      autoplay : true,
      dots: true,
      mobileFirst: true,
      responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          dots: false,
          prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button"></button>',
          nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"></button>',
        }
      }],
  });

  $('.shop-section .image-slider').slick({
      slidesToShow: 1,
      infinite:true,
      arrows: false,
      dots: true,
      mobileFirst: true,
  });
});

jQuery('.js-plus').click(function(){
  var qty = jQuery('.numBox input').val();
  qty++;
  jQuery('.numBox input').val(qty);
});
jQuery('.js-minus').click(function(){
  var qty = jQuery('.numBox input').val();
  if(qty >1)
  {
    qty--;
    jQuery('.numBox input').val(qty);
  }
})