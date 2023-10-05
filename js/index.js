$(document).ready(function() {
 


    $('#wrap .container .cont03 div .fieldset .bottom>div').click(function() {
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


    // 브라우저 resize 처리
    window.addEventListener("resize", function() {
        var innerWidth = window.innerWidth;
        if(innerWidth >= 1280) { 
          $(window).scrollTop(0);
        } 
    })



    // 보기 클릭시 모달창 (열기)
    $(".view").click(function() {
        $(this).parent().find(".topBg").css({"display":"block"})
        $(this).parent().find(".topPp").css({"display":"block"})
        $("body").css({"overflow" : "hidden"})
    })

    // (닫기)
    $(".close").click(function() {
      $(".topBg").css({"display":"none"})
      $(".topPp").css({"display":"none"})
      $("body").css({"overflow":"visible"})
    })
      
  





});