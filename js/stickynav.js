hh = $('header').height() - $('nav').height() - 15;

$(window).scroll(function () {
    if ($(this).scrollTop() > hh) {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
});