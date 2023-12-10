$(document).ready(function(){

  $(window).on('load', function(){

    $('.preloader').addClass('complete');

  });

  $(window).on('scroll', function(){

    var scroll = $(window).scrollTop();

    console.log(scroll);

    if ( scroll >= $('.navbar').innerHeight() ) {

        $(".sticky").addClass("stickyadd");
 
    } else {

        $(".sticky").removeClass("stickyadd"); 

    }
    
  });

  var typed = new Typed(".element",{

    strings: ["Hannah Atta", "a Full Stack Developer", "an Odoo Developer"],

    smartBackspace: true,

    typeSpeed: 100,

    backSpeed: 100,

    loop:true,

    loopCount: Infinity,
    
    startDelay:1000

  });

  //progress bar

//  var waypoint = new Waypoint({
//   element: document.getElementById('exp-id'),
//   handler: function(){
//     var p = document.querySelectorAll('.progress-bar');

//     p[0].setAttribute("style", "width:92%;transition:1s all"); 
//     p[1].setAttribute("style", "width:88%;transition:1s all");
//     p[2].setAttribute("style", "width:40%;transition:1s all");
//     p[3].setAttribute("style", "width:70%;transition:1s all");
//     p[4].setAttribute("style", "width:55%;transition:1s all");
//   },
//   offset:'90%'
//  });

// var filterizd = $('.filter-container').filterizr({

//   animationDuration : .5,

// });

 var p = document.querySelectorAll('.progress-bar');
 console.log(p);

  p[0].setAttribute("style", "width:92%;transition:1s all"); 
  p[1].setAttribute("style", "width:42%;transition:1s all");
  p[2].setAttribute("style", "width:72%;transition:1s all");
  p[3].setAttribute("style", "width:82%;transition:1s all");
  p[4].setAttribute("style", "width:92%;transition:1s all");

  //owl
  $(".owl-carousel").owlCarousel({

    loop:true,

    autoplay:true,

    autoplayTimeout:8000,

    items:1
  });
  //end owl



  //end progress bar

});