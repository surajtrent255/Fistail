import { Injectable } from '@angular/core';
declare var $: any;

declare const WOW: any;
@Injectable({
  providedIn: 'root'
})
export class JqueryService {

  constructor() { }

  init() {
    "use strict";

    new WOW().init();

    /* 
   CounterUp
   ========================================================================== */
    $('.counter').counterUp({
      time: 500
    });

    /* 
     MixitUp
     ========================================================================== */
    $('#portfolio').mixItUp();

    /* 
     Clients Sponsor 
     ========================================================================== */
    var owl = $("#clients-scroller");
    owl.owlCarousel({
      items: 5,
      // itemsTablet: 3,
      margin: 90,
      stagePadding: 90,
      smartSpeed: 450,
      itemsDesktop: [1199, 4],
      itemsDesktopSmall: [980, 3],
      // itemsTablet: [768, 3],
      itemsTablet: [767, 2],
      itemsTabletSmall: [480, 2],
      itemsMobile: [479, 1],
    });

    /* Testimonials Carousel 
    ========================================================*/
    var owl = $("#testimonials");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 2,
      itemsDesktop: [1199, 2],
      itemsDesktopSmall: [980, 2],
      itemsTablet: [768, 1],
      // itemsTablet: [767, 1],
      itemsTabletSmall: [480, 1],
      itemsMobile: [479, 1],
    });

    /* 
     Touch Owl Carousel
     ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 1,
      itemsDesktopSmall: [1024, 1],
      itemsTablet: [600, 1],
      itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="lni-chevron-right"></i>');

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 200) {
        $('.header-top-area').addClass('menu-bg');
      } else {
        $('.header-top-area').removeClass('menu-bg');
      }
    });


    /* 
     Back Top Link
     ========================================================================== */
    var offset = 200;
    var duration = 500;
    
    $(window).scroll(() => {
      const scrollTop = $(window).scrollTop();
      if (scrollTop > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });
    

    /* 
    One Page Navigation & wow js
    ========================================================================== */
    //Initiat WOW JS

    // one page navigation 
    $('.main-navigation').onePageNav({
      currentClass: 'active'
    });

    $('.back-to-top').on('click', (event: MouseEvent) => {
      // event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

    $('.video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    $(window).on('load', function () {

      $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
      });

      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
          $('.fixed-top').addClass('menu-bg');
        } else {
          $('.fixed-top').removeClass('menu-bg');
        }
      });

    });
    /* Nivo Lightbox
    ========================================================*/
    $('.lightbox').nivoLightbox({
      effect: 'fadeScale',
      keyboardNav: true,
    });


    /* stellar js
    ========================================================*/
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 30,
      responsive: false
    });

    /* 
    Page Loader
    ========================================================================== */
    $(window).on('load', function () {
      "use strict";
      $('#loader').fadeOut();
    });



  }
  
}

