//Developed by: Camilo Jose Montoya | @korneas

$('#menu').hide();

function toggleMenu(){
    $('.menuicon').toggleClass("on");
    $('.fillBlue').toggleClass("on");
    $('.fillBlack').toggleClass("on");
    $('#mail').toggleClass("on");
    $('#social').toggleClass("on");
    $('#menu').show();
    $('#menu').toggleClass("hidden");

    setTimeout(() => {
        if ($('#menu').hasClass('hidden')) {
            $('#menu').hide();
        }
    }, 200);
}

$('#deploy').on('click', () => {
    toggleMenu();
});

$('#homelink').on('click', () => {
    toggleMenu();
});

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        inverted: true,
    },
    pagination: {
        el: '.blog-slider_pager',
        clickable: true,
    }
});