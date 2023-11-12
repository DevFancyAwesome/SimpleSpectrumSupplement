$(document).ready(function() {
  $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null) {
           return null;
        }
        return decodeURI(results[1]) || 0;
    }
  
    var buttons = {
      ".one-omega-bottle": {
        id: ".one-omega-bottle",
        quantity: "One Bottle",
        frequency: 30,
        freq: 1,
        vid: "38054112526513"
      },
      ".two-omega-bottle": {
        id: ".two-omega-bottle",
        quantity: "Two Bottles",
        frequency: 60,
        freq: 2,
        vid: "38054112559281"
      },
      ".four-omega-bottle": {
        id: ".four-omega-bottle",
        quantity: "Four Bottles",
        frequency: 120,
        freq: 4,
        vid: "38054112592049"
      }
    };
    
    for (var button in buttons) {
      $(button).attr("data-id", button);
      $(button).click(function() {
        console.log("click");
        var id = $(this).attr("data-id");
        var btn = buttons[id];
        $("#subscription .quant").html("Quantity: " + btn.quantity);
        $("#subscription .freq").html("Frequency: Every " + btn.frequency + " Days");
        $("#subscription a.no").attr("data-id", btn.id);
        $("#subscription a.yes").attr("data-id", btn.id);
        $("#subscription").modal({
          escapeClose: false,
          clickClose: false,
          showClose: false
        });
      });
    }
    
    $("#subscription a.yes").click(function() {
      var id = $(this).attr("data-id");
      var data = buttons[id];
      console.log(data);
      $('#productSelect option[value="' + data.vid + '"]').prop("selected", true);
      var event = new Event('change');
      $('#productSelect').get(0).dispatchEvent(event);
      $('#productSelect').change();
      setTimeout(function() {
        $(".bold-ro__recurring-div .bold-ro__recurring-lbl").click();
        setTimeout(function() {
          $(".bold-ro__frequency-num").val(data.freq);
          $(".bold-ro__frequency-num option[value='" + data.freq + "']").attr('selected', 'selected');
          $(".bold-ro__frequency-num option[value='" + data.freq + "']").prop('selected', true).change();
          setTimeout(function() {
            console.log($(".bold-ro__recurring-div"));
            console.log($(".bold-ro__frequency-num").val());
          	$("#AddToCart").click();
          }, 50);
        }, 50);
      }, 50);
    });
  
      
    $("#subscription a.no").click(function() {
      var id = $(this).attr("data-id");
      var data = buttons[id];
      $('#productSelect option[value="' + data.vid + '"]').prop("selected", true);
      var event = new Event('change');
      $('#productSelect').get(0).dispatchEvent(event);
      $('#productSelect').change();
      $("#AddToCart").click();
    });
  
	$('.header-menu li.has-child-menu').each(function() {
		$(this).find('a').first().append('<span class="open-submenu"><i class="fas fa-angle-down"></i></span>')
	});

	$('.bundle-save .products').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		dots: true,
		initialSlide: 1,
		mobileFirst: true,
		responsive: [{
	    	breakpoint: 1000,
	    	settings: {
	        	slidesToShow: 3,
	        	dots: false
	    	}
	    }]
	});

	$('.product .select .active').click(function() {
		$('.product .select ul').toggle(0);
	});
  
  	$(".bold-ro__frequency-type.bold-ro__order-interval").val(3);;
  	$(".bold-ro__frequency-type.bold-ro__order-interval option[value='3']").attr('selected', 'selected');
  	$(".bold-ro__frequency-type.bold-ro__order-interval option[value='3']").prop('selected', true).change();

  	$('.product .select li').click(function() {
		var active = $('.product .active');
		var activeText = active.text();
		var activeId = active.data("id");
		active.html($(this).text());
		active.data("id", $(this).data("id"));
		$('#productSelect option[value="' + $(this).data("id") + '"]').prop("selected", true);
		var event = new Event('change');
		$('#productSelect').get(0).dispatchEvent(event);
		$('#productSelect').change();
		$(this).html(activeText);
		$(this).data("id", activeId);
		$('.product ul').hide(0);
	});

	/*$(document).on("click", ".purchase-btn", function() {
		$('#productSelect option[value="' + $(this).data("id") + '"]').prop("selected", true);
		$('#AddToCart').click();
	});*/

	$(".bold-ro__one-time-div").addClass("red-btn");

	$(document).on("click", ".bold-ro__one-time-div", function() {
		$(".bold-ro__one-time-div").addClass("red-btn");
		$(".bold-ro__one-time-div").removeClass("transparent-btn");
		$(".bold-ro__recurring-div").addClass("transparent-btn");
		$(".bold-ro__recurring-div").removeClass("red-btn");
	});

	$(document).on("click", ".bold-ro__recurring-div", function() {
		$(".bold-ro__one-time-div").removeClass("red-btn");
		$(".bold-ro__one-time-div").addClass("transparent-btn");
		$(".bold-ro__recurring-div").removeClass("transparent-btn");
		$(".bold-ro__recurring-div").addClass("red-btn");
        var active = $('.product .active');
      	var activeText = active.text();
            console.log(activeText);
      	console.log(activeText.includes("Single"));
        if (activeText.includes("Single")) {
          $(".bold-ro__frequency-num").val(1);
          $(".bold-ro__frequency-num option[value='1']").attr('selected', 'selected');
          $(".bold-ro__frequency-num option[value='1']").prop('selected', true).change();
        } else if (activeText.includes("2")) {
          $(".bold-ro__frequency-num").val(2);
          $(".bold-ro__frequency-num option[value='2']").attr('selected', 'selected');
          $(".bold-ro__frequency-num option[value='2']").prop('selected', true).change();
        } else if (activeText.includes("4")) {
          $(".bold-ro__frequency-num").val(4);
          $(".bold-ro__frequency-num option[value='4']").attr('selected', 'selected');
          $(".bold-ro__frequency-num option[value='4']").prop('selected', true).change();
        }
      
        $(".bold-ro__frequency-type.bold-ro__order-interval").val(3);
        $(".bold-ro__frequency-type.bold-ro__order-interval option[value='3']").attr('selected', 'selected');
        $(".bold-ro__frequency-type.bold-ro__order-interval option[value='3']").prop('selected', true).change();
	});
  
  	$('.dropdown-item').click(function() {
		$(this).toggleClass('opened');
		$(this).find('.text').slideToggle(300);
		$(this).siblings('.dropdown-item').removeClass('opened');
		$(this).siblings('.dropdown-item').find('.text').slideUp(300);
	});
  
  var defaultVarTxt = $('#AddToCartForm .select .active').text();
  var defaultPrice = defaultVarTxt.split("$")[1];
  var noUsdDefaultPrice = defaultPrice.replace("USD", " ");

  var currentOneTimeTxt = $('.bold-ro__one-time-purchase').text();
  
  var updatedOneTimeTxt = '$' + noUsdDefaultPrice + ' ' + currentOneTimeTxt;
  // $('.bold-ro__one-time-purchase').text(updatedOneTimeTxt);

  var i = setInterval(function() {
      if ($('.ro_widget').length && $('#bold-widget').length) {
        clearInterval(i);
        var discount = $('.bsub-widget__group-discount-summary').text().replace('(Save ', '').replace(')', '');
        var price = $('.bsub-widget__plan-pricing span[data-bsub-per-delivery-price]').text();
        $('.bold-ro__initial-discount-percent').text(discount);
        $('.bold-ro__initial-discount-price').text(price);
        
        if ($('.ro_widget .bold-ro__one-time-radio-btn').is(':checked')) {
          $('#bold-widget input[name="bsub-selling-plan-group"][value="once"]').click();
        }
    
        if ($('.ro_widget .bold-ro__subscribe-radio-btn').is(':checked')) {
          $('#bold-widget input[name="bsub-selling-plan-group"]:not([value="once"])').click();
        }
      }
    }, 500);
      
      $('.ro_widget .bold-ro__one-time-radio-btn').change(function(e) {
        if ($(this).is(':checked')) {
          $('#bold-widget input[name="bsub-selling-plan-group"][value="once"]').click();
        }
      });
      
      $('.ro_widget .bold-ro__subscribe-radio-btn').change(function(e) {
        if ($(this).is(':checked')) {
          $('#bold-widget input[name="bsub-selling-plan-group"]:not([value="once"])').click();
        }
      });
  
  $('.product .select li').click(function() {
		var active = $('.product .active');
		var activeText = active.text();
		var activeId = active.data("id");
		active.html($(this).text());

    var selectedPrice = $(this).text().split("$")[1];
    var noUsdSelectedPrice = selectedPrice.replace("USD", " ");
    var replacedOneTimeTxt = '$' + noUsdSelectedPrice + ' One-time purchase';
    $('.bold-ro__one-time-purchase').text(replacedOneTimeTxt);

		active.data("id", $(this).data("id"));
		$('#productSelect option[value="' + $(this).data("id") + '"]').prop("selected", true);
		var event = new Event('change');
		$('#productSelect').get(0).dispatchEvent(event);
		$('#productSelect').change();
		$(this).html(activeText);
		$(this).data("id", activeId);
		$('.product ul').hide(0);
	});

	/*$('.menu-toggle').click(function() {
		$(this).toggleClass('open');
		$('.mobile-group').slideToggle(300);
	});

	$('.open-submenu').click(function(e) {
		e.preventDefault();
		$(this).closest('li').find('ul').toggle(0);
	});

	$('.inside .play-btn').click(function() {
		$(this).siblings('.video-screen').remove();
		$(this).siblings('video').show(0);
		$(this).remove();
	});

	$(document).mouseup(function (e) {
		let div = $('.header-menu li ul, .open-submenu');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.header-menu li ul').hide();
		}

		div = $('.product .select');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.find('ul').hide(0);
		}
	});*/
});
