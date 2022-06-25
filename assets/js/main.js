/**
* Template Name: Plato - v2.2.0
* Template URL: https://bootstrapmade.com/plato-responsive-bootstrap-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Stick the header at top on scroll
  $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });

 

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);



let x = $("#header").offset().top;
$(window).scroll(function()
{
    let wScorll = $(window).scrollTop();
    if (wScorll > x )
    {
        $("#header").css("backgroundColor","white").fadeIn(400);
        $("#header").css("padding","30px 30px").fadeIn(400);
        
    }
    else
    {
        
      $("#header").css("backgroundColor","transparent").fadeIn(400);
      $("#header").fadeIn(400);
        
    }
})












$('.item-img').click(function () {
  $('#master').attr('src', this.src);
})
















$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});














const clickSlide = () => {
  const clickPos = event.clientX / window.innerWidth;
  if (clickPos >= 0.5) {
    incImage(1);
  } else {
    incImage(-1);
  }
}

const handleOverlap = (newImage) => {
  toggleEventListeners(0);
  setTimeout(() => {
    toggleTransition(0);
    whichImage = newImage;
    updateImage();
    setTimeout(() => {
      toggleTransition(1);
      toggleEventListeners(1);
    }, 200);
  }, slideTransition);
}

const detectOverlap = () => {
  const minImage = overlap;
  const maxImage = imageArray.length - overlap - 1;
  const moveBy = imageArray.length - overlap * 2;
  updateImage();
  if (whichImage > maxImage) {
    handleOverlap(whichImage - moveBy);
  } else if (whichImage < minImage) {
    handleOverlap(whichImage + moveBy);
  }
}

const incImage = (incAmount = 1) => {
  whichImage += incAmount;
  detectOverlap();
}

const createDopplegangers = (ovr) => {
  const slides = slideshowSlides.children;
  const cloneStart = [];
  const cloneEnd = [];
  for (let i = 0; i < ovr; i++) {
    cloneStart.push(slides[i].cloneNode(true));
    cloneEnd.push(slides[slides.length - 1 - i].cloneNode(true));
  }
  cloneStart.forEach(clone => {
    slideshowSlides.appendChild(clone);
  });
  cloneEnd.forEach(clone => {
    slideshowSlides.insertBefore(clone, slideshowSlides.children[0]);
  });
}

const handleImageLoading = () => {
  let i = imageArray.length;

  // possibly remove this setTimeout
  setTimeout(() => {
    if (i > 0) {
      console.log("timed out, finishing setup");
      finishSetup();
    }
  }, 8000);

  imageArray.forEach((img, index) => {
    // if image is cached, i--, else i-- when image finishes loading
    if (img.complete) {
      i--;
    } else {
      img.onload = function() {
        i--;
        if (i <= 0) {
          finishSetup();
        }
      };
    }

    // wait until remaining images are loaded then finish setup
    if (i <= 0) {
      finishSetup();
    }
  });
}

const finishSetup = () => {
  updateWidthArray();
  createThumbs();
  window.addEventListener("resize", function() {
    updateWidthArray();
    updateImage();
    updateThumbsWidth();
  });
  slideshowSlides.addEventListener("click", clickSlide);
  updateImage();
  console.log("SETUP COMPLETE, HAVE A NICE DAY");
}

const updateWidthArray = () => {
  imageArray.forEach((img, index) => {
    imageWidthArray[index] = img.width + imageGap;
  });
}

const updateThumbsWidth = () => {
  const visibleThumbs = imageArray.length;
  const thumbSize =
    window.getComputedStyle(slideshow).getPropertyValue("--thumb-size") * 1;
  const thumbsWidth =
    visibleThumbs * thumbSize + (visibleThumbs - 1) * imageGap;
  slideshow.style.setProperty("--thumbs-width", thumbsWidth);
}

const createThumbs = () => {
  const thumbsWrapper = document.createElement("div");
  const thumbsDiv = document.createElement("div");
  thumbsWrapper.classList.add("js-slideshow__thumbs-wrapper");
  thumbsDiv.classList.add("js-slideshow__thumbs");

  imageArray.forEach((img, index) => {
    const imageClone = img.cloneNode(true);
    const imageFigure = document.createElement("figure");
    imageFigure.classList.add("js-slideshow__thumb-image");
    imageFigure.addEventListener("click", () => {
      whichImage = index;
      detectOverlap();
      updateImage();
    });
    imageFigure.appendChild(imageClone);
    thumbsDiv.appendChild(imageFigure);
  });

  thumbsWrapper.appendChild(thumbsDiv);
  slideshow.appendChild(thumbsWrapper);
  updateThumbsWidth();
}

const toggleTransition = (val) => {
  const offsetTime = val * slideTransition / 1000 + "s";
  slideshow.style.setProperty("--offset-time", offsetTime);
}

const toggleEventListeners = (toggle) => {
  if (toggle === 0) {
    slideshowSlides.removeEventListener("click", clickSlide);
    slideshowSlides.removeEventListener("touchstart", handleTouchStart, false);
    slideshowSlides.removeEventListener("touchmove", handleTouchMove, false);
  } else {
    slideshowSlides.addEventListener("click", clickSlide);
    slideshowSlides.addEventListener("touchstart", handleTouchStart, false);
    slideshowSlides.addEventListener("touchmove", handleTouchMove, false);
  }
}

const getImagePos = (arr, index) => {
  const modIndex = index % arr.length;

  if (modIndex > 0) {
    const leftArray = arr.slice(0, modIndex);
    return (
      leftArray.reduce((total, amount) => total + amount) + arr[modIndex] * 0.5
    );
  } else {
    return arr[modIndex] * 0.5;
  }
}

const updateImage = () => {
  const thumbs = document.querySelectorAll(
    "#jsSlideshow .js-slideshow__thumb-image"
  );
  clearInterval(autoUpdate);
  autoUpdate = setInterval(() => {
    incImage();
  }, slideSpeed);
  const newOffset = getImagePos(imageWidthArray, whichImage);
  slideshow.style.setProperty("--offset", newOffset + "px");
  thumbs.forEach(thumb => {
    thumb.classList.remove("js-slideshow__thumb-image--selected");
  });
  thumbs[whichImage].classList.add("js-slideshow__thumb-image--selected");
  thumbs[whichImage].scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center"
  });
}

const slideshow = document.querySelector("#jsSlideshow");
const slideshowSlides = slideshow.querySelector(".js-slideshow__slides");
const slideSpeed = slideshow.dataset.speed * 1000;
const slideTransition = slideshow.dataset.transition * 1000;
const overlap = 3; // how many images are duplicated at beginning & end
let whichImage = overlap;
let autoUpdate = setInterval(() => {
  incImage();
}, slideSpeed);
createDopplegangers(overlap);
const imageArray = slideshowSlides.querySelectorAll("img");
const imageGap =
  window.getComputedStyle(slideshow).getPropertyValue("--image-gap") * 1;
const imageWidthArray = [];
handleImageLoading();
toggleTransition(1);

// swipe gestures from https://stackoverflow.com/questions/15084675/how-to-implement-swipe-gestures-for-mobile-devices
slideshowSlides.addEventListener("touchstart", handleTouchStart, false);
slideshowSlides.addEventListener("touchmove", handleTouchMove, false);
var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }
  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;
  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      incImage(1);
    } else {
      incImage(-1);
    }
  }

  xDown = null;
  yDown = null;
}













