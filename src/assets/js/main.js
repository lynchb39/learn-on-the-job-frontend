(function($) {

  "use strict";

  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  /* Testimonials Carousel
  ========================================================*/
  var owl = $("#client-testimonial");
  owl.owlCarousel({
    navigation: true,
    pagination: false,
    slideSpeed: 1000,
    stopOnHover: true,
    autoPlay: true,
    items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    addClassActive: true,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: [480,1],
    itemsMobile : [479,1],
  });
  $('#client-testimonial').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
  $('#client-testimonial').find('.owl-next').html('<i class="lni-chevron-right"></i>');


  /* showcase Slider
  =============================*/
  var owl = $(".showcase-slider");
  owl.owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 1000,
    margin:10,
    stopOnHover: true,
    autoPlay: true,
    items: 5,
    itemsDesktopSmall: [1024, 3],
    itemsTablet: [600, 1],
    itemsMobile: [479, 1]
  });



  /*
   Sticky Nav
   ========================================================================== */
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 100) {
      $('.header-top-area').addClass('menu-bg');
    } else {
      $('.header-top-area').removeClass('menu-bg');
    }
  });

  /*
 VIDEO POP-UP
 ========================================================================== */
  $('.video-popup').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  /*
   Back Top Link
   ========================================================================== */
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
  })

  /*
   One Page Navigation
   ========================================================================== */


  $(window).on('load', function() {

    $('body').scrollspy({
      target: '.navbar-collapse',
      offset: 195
    });

    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 100) {
        $('.fixed-top').addClass('menu-bg');
      } else {
        $('.fixed-top').removeClass('menu-bg');
      }
    });

  });

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
    if ($(window).width() <= 768) {
      $('.navbar-collapse a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
      });
    }
    else {
      $('.navbar .navbar-inverse a').off('click');
    }
  }
  close_toggle();
  $(window).resize(close_toggle);

  /* Nivo Lightbox
  ========================================================*/
  $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });


  //===== Slick

  $('.testimonial-active').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });


  //===== Slick

  $('.testimonial-active-2').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });


  //===== Slick

  $('.client-active').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      }
    ]
  });


  //===== Slick

  $('.testimonial-active-4').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });



}(jQuery));

