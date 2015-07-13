hh = $('header').height() - $('nav').height() - 15;

$(window).scroll(function () {
    if ($(this).scrollTop() > hh) {
        $("nav.desk").addClass("sticky");
    } else {
        $("nav.desk").removeClass("sticky");
    }
});



$('.banner-box').delay(600).fadeIn(800);
var menu_up = false;
$(".menu_button").on("click", function () {
    if (menu_up === false) {
        $(".mob ul").fadeIn(200);
        $(this).addClass("is-open");
        menu_up = true;
    } else {
        $(".mob ul").fadeOut(200);
        $(this).removeClass("is-open");
        menu_up = false;
    }
});
$(window).on('resize', function () {
    $(".mob ul").fadeOut();
    $(".menu_button").removeClass("is-open");
    menu_up = false;
});
