//Developed by: Camilo Jose Montoya | @korneas

$('#menu').hide();

var preloadTimer = setTimeout(() => {
    $('#k_awaken').attr("src","img/k_awake.svg");
    $('#loader-text').text("READY!");
    
}, 3000);

$(window).on('load', () => {
    $('#preloader').hide();
});

function toggleMenu() {
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

// Open menu
$('#deploy').on('click', () => {
    toggleMenu();
});

// Logo working as home
$('#logo').on('click', () => {
    window.location = "#";
});

// Menu links actions
$('#homelink').on('click', () => {
    toggleMenu();
});
$('#projectslink').on('click', () => {
    toggleMenu();
});
$('#aboutlink').on('click', () => {
    toggleMenu();
});
$('#contactlink').on('click', () => {
    toggleMenu();
});

// Calling Behance API

var apiKey = "8oZRxtP5VMo5D37II1xVHcHWnn5ERCt0";
var userId = "korneas";

() => {
    var behanceUserAPI = 'http://www.behance.net/v2/users/' + userId + '/callback=?api_key=' + apiKey;

}