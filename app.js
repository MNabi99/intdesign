$(function () {
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if(scroll >= 50){
      // No:3 code is for Mobile view
      $('humberger').addClass('whenscrolled');
      // No:1 code
      $('nav').addClass('stickyadd');
      // No:2-code now again here appling stick class
      $('nav').removeClass('stick');
    }
    else {
      // No:3 Code for the above No:3 If condition
      // No:1 code
      $('humberger').removeClass('whenscrolled');
      $('nav').removeClass('stickyadd')
      // No:2 Code As and the same for ELSE option below
      $('nav').addClass('stick');
    }
  })
  // for smoth scrollig href effect

  $('.navbar-nav a[href^="#"]').on('click',function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop:$(this.hash).offset().top
    },1000);
  });
  particlesJS.load("particles-js", "particlesjs-config.json");
  // Animate to whenscrolled
  AOS.init();
});


$(function () {
$(".aboutCode").load("aboutCode.html");
})
// the following function have been used to link contactForm.html in index.html
$(function () {
$(".serviceCode").load("serviceCode.html");
})
// the following function have been used to link contactForm.html in index.html
$(function () {
$(".projectCode").load("projectCode.html");
})
  // the following function have been used to link contactForm.html in index.html
$(function () {
  $(".contactForm").load("contactForm.html");
})
//  the following function have been used to link footer.html in index.html
$(function () {
  $(".bossfooter").load("footer.html");
})
