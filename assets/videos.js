$(document).ready(function() {
  var videos = {
      science: [
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Benefits_of_Potassium.mp4?v=1594926474",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_15.06.10.png?v=1661512009"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/How_prebiotics_help_our_immunity.mp4?v=1594926484",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_15.07.15.png?v=1661512067"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Iodine___Immunity.mp4?v=1594926494",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_15.08.35.png?v=1661512144"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/NAC_How_it_Helps_your_body_and_behaviors.mp4?v=1594926499",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_15.09.46.png?v=1661512229"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Vitamin_B1_and_how_it_helps_you.mp4?v=1594926506",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_15.11.05.png?v=1661512303"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Vitamin_C_and_How_it_helps_our_body.mp4?v=1594926514",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.07.19.png?v=1661508478"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Vitamin_D3_and_How_it_helps_immunity.mp4?v=1594926518",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.08.31.png?v=1661508540"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Vitamin_K_and_what_it_does.mp4?v=1594926524",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.09.22.png?v=1661508599"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/What_does_bioavailable_mean.mp4?v=1594926532",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.10.12.png?v=1661508644"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/What_is_curcumin_and_why_we_need_it.mp4?v=1594926545",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.11.19.png?v=1661508718"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/What_is_Methylation.mp4?v=1594926550",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.12.28.png?v=1661508780"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/What_vitamins_aid_in_natural_detoxification.mp4?v=1594926557",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.13.34.png?v=1661508838"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Zinc_Immunity_Benefits.mp4?v=1594926562",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.14.24.png?v=1661508906"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Importance_of_3rd_party_testing.mp4?v=1594926433",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_13.55.39.png?v=1661507791"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Why_Do_We_Need_B12.mp4?v=1594926451",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_13.52.52.png?v=1661507641"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Why_do_we_need_magnesium.mp4?v=1594926456",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_13.57.40.png?v=1661507900"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Why_We_Include_Hydrocurc_Curcumin.mp4?v=1594926463",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_13.59.28.png?v=1661508049"
        }
      ],
      testimonials: [
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Copy_of_IMG_3101.mp4?v=1634580207",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_15.01.59.png?v=1661511760"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__3_Year_Old_Son.mp4?v=1594923174",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.25.11.png?v=1661509543"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__Aussie_Autism_Family.mp4?v=1594924421",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.26.15.png?v=1661509613"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__Day___Night_Difference.mp4?v=1594924475",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.27.40.png?v=1661509695"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__From_Australia.mp4?v=1594924500",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.28.42.png?v=1661509762"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/ReviewImprovementinExpressiveLanguage.mp4?v=1595475387",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.29.25.png?v=1661509795"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__Jacqueline_Laurita_2.mp4?v=1594924635",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.30.28.png?v=1661509865"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__Jacqueline_Laurita.mp4?v=1594924716",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.32.00.png?v=1661509953"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__Mom_of_3.mp4?v=1594924750",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.33.06.png?v=1661510021"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/The_Aspie_World_Review.mp4?v=1594924772",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.34.11.png?v=1661510087"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Wake_Up_For_Autism.mp4?v=1594924809",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.35.13.png?v=1661510148"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Simple_Spectrum_Review__Sunday_Share.mp4?v=1594924900",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.36.02.png?v=1661510194"
        }
      ],
      story: [
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Dosage_tips_for_Simple_Spectrum.mp4?v=1595470045",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.47.05.png?v=1661510857"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Immune_System_Benefits_of_Simple_Spectrum.mp4?v=1595470045",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.47.51.png?v=1661510921"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Jacqueline_Laurita_and_Jodie_Gomes.mp4?v=1595470051",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.49.23.png?v=1661510994"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Live_Q_A_with_Dr_Shay.mp4?v=1595470054",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.50.31.png?v=1661511064"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/More_Dosage_Recommendations.mp4?v=1595470045",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.51.30.png?v=1661511119"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Tips_for_Taking_our_Supplement.mp4?v=1595470045",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.52.37.png?v=1661511202"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/What_makes_simple_spectrum_different.mp4?v=1595470044",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.53.28.png?v=1661511241"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Getting_Insurance_To_Cover_Our_Product.mp4?v=1595474943",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.54.05.png?v=1661511285"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Our_Mission_d3afe7aa-539e-45d7-b9fe-847b4f5496e9.mp4?v=1595475004",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.56.18.png?v=1661511423"
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Third_Party_Testing_-_Because_We_Care_About_Our_Quality.mp4?v=1595475026",
          poster: "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Screenshot_2022-08-26_at_14.57.39.png?v=1661511490"
        }
       ]
    };  
        
    var videoTemplate = '<div class="video-item {video_type}">'
            + '<div class="video">'
              + '<video controls poster="{video_poster}">'
                + '<source src="{video_url}" type="video/mp4">'
              + '</video>'
              + '<div class="video-screen">'
              + '</div>'
              + '<div class="play-btn"></div>'
            + '</div>'
          + '</div>';
    
    loadVideos();
    function loadVideos() {
        var html = "";
        for (var i = 0; i < videos.testimonials.length; i++) {
            var dColInst = JSON.parse(JSON.stringify(videoTemplate));
            dColInst = dColInst.replace(new RegExp("{video_url}", 'g'), videos.testimonials[i].url);
           	dColInst = dColInst.replace(new RegExp("{video_type}", 'g'), "testimonials-vids");
            dColInst = dColInst.replace(new RegExp("{video_poster}", 'g'), videos.testimonials[i].poster);
            $(".videos-grid").append(dColInst);
        }
        for (var i = 0; i < videos.science.length; i++) {
            var dColInst = JSON.parse(JSON.stringify(videoTemplate));
            dColInst = dColInst.replace(new RegExp("{video_url}", 'g'), videos.science[i].url);
            dColInst = dColInst.replace(new RegExp("{video_type}", 'g'), "science");
            dColInst = dColInst.replace(new RegExp("{video_poster}", 'g'), videos.science[i].poster);
          	$(".videos-grid").append(dColInst);
        }
        
        for (var i = 0; i < videos.story.length; i++) {
            var dColInst = JSON.parse(JSON.stringify(videoTemplate));
            dColInst = dColInst.replace(new RegExp("{video_url}", 'g'), videos.story[i].url);
            dColInst = dColInst.replace(new RegExp("{video_type}", 'g'), "story");
            dColInst = dColInst.replace(new RegExp("{video_poster}", 'g'), videos.story[i].poster);
          	$(".videos-grid").append(dColInst);
        }
    }
    function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
              tmp = item.split("=");
              if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    }
    if (findGetParameter("science")) {
      showCategory("science");
      $(".desktop-categories li").removeClass("active");
      $(".desktop-categories li:nth-child(2)").addClass("active");
    } else {
      showCategory("testimonials");
    }
    function showCategory(type) {
      if (type == "all") {
        $(".video-item").show();
      } else {
        if (type == "testimonials") {
          type += "-vids";
        }
        $(".video-item").hide();
        $(".video-item." + type).show();
      }
    }
  
	$('.header-menu li.has-child-menu').each(function() {
		$(this).find('a').first().append('<span class="open-submenu"><i class="fas fa-angle-down"></i></span>')
	});


	$('.video-slider').slick({
		slidesToShow: 1,
		arrows: true,
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

	/*$('.menu-toggle').click(function() {
		$(this).toggleClass('open');
		$('.mobile-group').slideToggle(300);
	});

	$('.open-submenu').click(function(e) {
		e.preventDefault();
		$(this).closest('li').find('ul').toggle(0);
	});*/

	$('.select .active').click(function() {
		$('.select ul').toggle(0);
	});

  	$('.desktop-categories li').click(function() {
      	console.log($(this).text().toLowerCase());
        if ($(this).text().toLowerCase() == "view all") {
          showCategory("all");
        } else {
          showCategory($(this).text().toLowerCase());
      	}
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	$('.select li').click(function() {
		let active = $('.select .active');
		let activeText = active.text();
      	if ($(this).text().toLowerCase() == "view all") {
          showCategory("all");
        } else {
          showCategory($(this).text().toLowerCase());
      	}
      	console.log($(this).text().toLowerCase());
		active.html($(this).text());
		$(this).html(activeText);
		$('.select ul').hide(0);
	});

	/*$(document).mouseup(function (e){
		let div = $('.header-menu li ul, .open-submenu');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.header-menu li ul').hide();
		}

		div = $('.popup');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.popup-bg').fadeOut(300);
		}
	});*/
});
