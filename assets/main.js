$(document).ready(function() {
	$('.header-menu li.has-child-menu').each(function() {
		$(this).find('a').first().append('<span class="open-submenu"><i class="fas fa-angle-down"></i></span>')
	});

	$('.hero-slider').slick({
		slidesToShow: 1,
		infinite: false,
        arrows: false,
        dots: true,
        autoplay : true,
        autoplaySpeed : 8000,
        rows: 0,
	});

	$('.hero-slider').on('init', function () {
		jbResizeSlider();
	});

	function jbResizeSlider() {
		slickSlider = $('.hero-slider');
		let slides = slickSlider.find('.slick-slide');

		let max = 0;
		slides.each(function() {
			let height = $(this).height()*100/$(window).width();
			if (max < height) {
				max = height;
			}
		});

		slides.css('height', max + 'vw');
	}


	$('.video-slider').slick({
		slidesToShow: 1,
		arrows: true,
	});

	$('.testimonials-slider').slick({
		slidesToShow: 1,
		arrows: false,
		infinite: false,
		mobileFirst: true,
		responsive: [{
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 4,
	      }
	    }]
	});

	$('.slider-inside').slick({
		slidesToShow: 1,
		arrows: true,
		infinite: true,
		mobileFirst: true,
		responsive: [{
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 3,
	      }
	    }],
	});

	$('.partnerships .partners').slick({
		slidesToShow: 1,
		arrows: true,
		infinite: true,
		mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 2,
		responsive: [{
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 4,
            slidesToScroll: 4,
            variableWidth: true,
	      }
	    }],
	});
  
    $('.inside-omegas .cards').slick({
		slidesToShow: 1,
		arrows: false,
        dots: true,
		infinite: false,
		mobileFirst: true,
		responsive: [{
	      breakpoint: 1000,
	      settings: "unslick"
	    }],
	})

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
  
  $('.video-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('video').trigger('pause');
  });
  
  $(document).on("click", ".play-btn", function() {
    var videoPlayer = $(this).prev().prev().get(0);
    console.log($(this).prev());
    $(this).hide();
    $(this).prev().hide();
    videoPlayer.play();
  });
  
  $(document).on("click", "video", function() {
    var videoPlayer = $(this).prev().prev().get(0);
    
    if (videoPlayer.paused) {
		videoPlayer.play();
    } else {
      videoPlayer.pause(); 
    }
  });
  
  $(".video-screen").hide();
//function for 4 pack limit to 2 per order
  $('body').on('click', '#AddToCartForm .selection .select ul li', function() {
    
    if($('#pack4qty').length != 0)
    {var currentQty = $('#pack4qty').text();
	currentQty = parseInt(currentQty);
    }
    else{
    currentQty = 0;
    }
    var orderQty = 2;
  	var selectedVariantText = $('#AddToCartForm .selection .select .active').text();
	  if (selectedVariantText.indexOf('4-Pack Box (Save 15%)') >= 0) {
        
        setTimeout(function() { 
           $('#AddToCartForm .bold-ro__frequency-num').val('4').change();
        }, 25); 
        if(currentQty == 1){
          orderQty = 1;
        }
        if(currentQty == 2){
          $('#AddToCart').attr('disabled',true);

          }
        console.log(currentQty);
          
	  	$('#AddToCartForm .selection .number > input').attr({'max': orderQty});
        if($('#AddToCartForm .selection .number > input').val() > orderQty){
        	$('#AddToCartForm .selection .number > input').val(orderQty);
        }
	  }
    else  if (selectedVariantText.indexOf('2-Pack Box (Save 10%)') >= 0) {
        
        setTimeout(function() { 
           $('.bold-ro__frequency-num').val('2').change();
        }, 25);
    }
    else {
      setTimeout(function() { 
           $('.bold-ro__frequency-num').val('1').change();
        }, 25);
      $('#AddToCartForm .selection .number > input').removeAttr('max'); 
      $('#AddToCart').attr('disabled',false);

    }
  });
  
  $(".limitedQty").keyup(function(){
    if($(this).val() > 2){
      $(this).val(2);
      $(this).next('.qtyNotice').show();
    }
  });
  $(".limitedQty").blur(function(){
    if($(this).val() > 2){
      $(this).val(2);
      $(this).next('.qtyNotice').show();
    }
  });
  $(".limitedQty").change(function(){
    if($(this).val() > 2){
      $(this).val(2);
      $(this).next('.qtyNotice').show();
    }
  });
  

});
