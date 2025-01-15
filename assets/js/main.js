(function($) {
  
  "use strict";  

  $(window).on('load', function() {

    /* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

  /* 
   One Page Navigation & wow js
   ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });
  
  /*Page Loader active
    ========================================================*/
	
		/*PRELOADER JS*/ 
			$('.spinner').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		/*END PRELOADER JS*/
    
  // Ensure the button is selected by its ID
const downloadCv = document.getElementById("download-cv");

downloadCv.addEventListener("click", (e) => {
  // Prevent the default action of the <a> tag
  e.preventDefault();

  // Create a temporary <a> element to trigger the download
  const aElement = document.createElement("a");

  // Set the file name and path for the download
  aElement.setAttribute("download", "Download CV.pdf");
  aElement.setAttribute("href", "assets/Download CV.pdf");  // Update to point to the 'assets' folder

  // Append the element to the body (necessary for Firefox to trigger the click event)
  document.body.appendChild(aElement);

  // Trigger the download by programmatically clicking the link
  aElement.click();

  // Remove the temporary <a> element after the click (clean up)
  document.body.removeChild(aElement);
});

    
		/*START MENU JS*/		
			 if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 100 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});				
		/*END MENU JS*/	

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
     delay: 20,
     time: 3000
    });
	
	 /* Tesimonial
    ========================================================*/
	$(".carousel-testimony").owlCarousel({
		loop:true,
		navText:false,
		autoplay: true,
		items:1,
		slideSpeed: 5000,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			979:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});


    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });



  });      

}(jQuery));