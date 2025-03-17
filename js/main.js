document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Sticky Navbar
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 300) {
  //       $('.sticky-top').addClass('shadow-sm').css('top', '0px');
  //   } else {
  //       $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
  //   }
  // });

   // Fixed Navbar
   $(window).scroll(function () {
    if ($(window).width() < 992) {
        if ($(this).scrollTop() > 45) {
            $('.fixed-top').addClass('head-bg shadow');
        } else {
            $('.fixed-top').removeClass('head-bg shadow');
        }
    } else {
        if ($(this).scrollTop() > 45) {
            $('.fixed-top').addClass('head-bg shadow').css('top', -45);
        } else {
            $('.fixed-top').removeClass('head-bg shadow').css('top', 0);
        }
    }
});


// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
});


// Latest-news-carousel
$(".latest-news-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
});

  // Spinner
  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
  };
  spinner();

  (function ($) {
    
    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#robertoNav').classyNav();
    }

    })(jQuery);

});

document.addEventListener("DOMContentLoaded", function () {
  // Create a new button element
  var closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "close d-flex align-items-center justify-content-center";
  closeButton.setAttribute("data-dismiss", "modal");
  closeButton.setAttribute("aria-label", "Close");

  // Create an icon element for the close button
  var closeIcon = document.createElement("i");
  closeIcon.className = "bx bx-x";
  closeIcon.setAttribute("aria-hidden", "true");

  // Append the icon to the button
  closeButton.appendChild(closeIcon);

  // Find the modal content and append the close button
  var modalContent = document.querySelector("#exampleModal .modal-content");
  if (modalContent) {
      modalContent.insertBefore(closeButton, modalContent.firstChild);

      // Attach a click event listener to close the modal
      closeButton.addEventListener("click", function () {
          $('#exampleModal').modal('hide');
      });
  }



  document.querySelector('.play-button').addEventListener('click', function() {
    var video = this.previousElementSibling;
    if (video.paused) {
        video.play();
        this.style.display = 'none'; // Hide the play button once the video starts playing
    }
});

document.querySelector('video').addEventListener('ended', function() {
    var playButton = this.nextElementSibling;
    this.load(); // Reset the video to its initial state (poster image)
    playButton.style.display = 'flex'; // Show the play button again
});


});