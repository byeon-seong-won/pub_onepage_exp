$(document).ready(function() {


    $('#wrap .container .cont03 form fieldset .bottom>div').click(function() {
      $(this).find(".xi-check").toggleClass("active");
    });

    // logo click
    $('#wrap header .logo').click(function() {
        $(window).scrollTop(0);
    });

    // button click
    $('#wrap header .button button').click(function() {
        $('html, body').animate({
            scrollTop: $("#submit").offset().top
        });
    });





});