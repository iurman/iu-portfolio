$(document).ready(function() {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  
    // Scroll reveal animation
    ScrollReveal().reveal('h1, h2, p, ul, form, footer', { delay: 100, duration: 1000, reset: true });
    ScrollReveal().reveal('.bg-cherry-blossom', { delay: 100, duration: 1000, reset: true, beforeReveal: function (el) {
        $(el).css('background-position', 'center -100px');
      }
    });
  });
  