$(document).ready(function() {
  $('.header-menu li.has-child-menu').each(function() {
      $(this).find('a').first().append('<span class="open-submenu"><i class="fas fa-angle-down"></i></span>')
  });
  
  $('.menu-toggle').click(function(e) {
      console.log("Mobile toggle");
      $(this).toggleClass('open');
      $('.mobile-group').slideToggle(300);
  });

  if ($(window).width() > 768) {
      var shouldHide = false;
      $('.has-child-menu').hover(function(e) {
          console.log("Menu Hover");
          shouldHide = false;
          $(this).find('ul').show(0);
      }, function(e) {
          shouldHide = true;
          var thisElem = this;
              
                  if (shouldHide) {
                      $(thisElem).find('ul').hide(0);
                  }
              
      });

      $('.has-child-menu > ul').hover(function(e) {
          console.log("UL toggle");
          shouldHide = false;
      });

      $(document).mouseup(function (e){
          var div = $('.header-menu li ul, .open-submenu');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
              console.log("Mouse Up Hide");
              $('.header-menu li ul').hide();
          }
      });
  } else {
      $('.has-child-menu').click(function() {
          if ($(this).hasClass("open")) {
              $(this).find('ul').hide();
              $(this).removeClass("open");
          } else {
              $(this).find('ul').show();
              $(this).addClass("open");
          }
      });
      let count = 0;
      $( ".header-menu .has-child-menu a" ).on('click', function(e) {
          console.log(e.currentTarget.text);
        if(e.currentTarget.text === "Blog" && count == 0){
          event.preventDefault();
          count++;
        }
      });
  }
  
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
  
  $('.school-testimonials .testimonials').slick({
      mobileFirst: true,
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

  $('a[href="#shop"]').click(function () {
    $('html, body').animate({
        scrollTop: $('#shop').offset().top
    }, 500);

    return false;
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