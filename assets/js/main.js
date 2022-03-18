$(function () {
    "use strict"
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky")
        }
    });

    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // wow js
    new WOW().init();

    // tiny slider
    var slider = tns({
        container: '.testimonial-active',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        nav: false,
        controlsText: ['<i class="fas fa-angle-left prev"></i>', '<i class="fas fa-angle-right next"></i>'],
    });

    //   scrollit js
    $.scrollIt();

    const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
});

