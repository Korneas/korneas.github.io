//Developed by: Camilo Jose Montoya | @korneas


//          MENU

$('#menu').hide();

var preloadTimer = setTimeout(() => {
    $('#k_awaken').attr("src", "img/k_awake.svg");
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

//          PROJECT

var counter = 0;
var updateRate = 10;
var timeUpdate = function () {
    return counter++ % updateRate === 0;
}

var project = document.getElementsByClassName('project');
var inner = document.getElementsByClassName('inner-project');

var onMouseEnterHandler = function (event) {
    update(event);
};

var onMouseLeaveHandler = function () {
    inner.style = "";
};

var onMouseMoveHandler = function (event) {
    if (timeUpdate()) {
        update(event);
    }
};

project.onmouseenter = onMouseEnterHandler;
project.onmouseleave = onMouseLeaveHandler;
project.onmousemove = onMouseMoveHandler;

var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientX - this._y) * -1;
    },
    setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function (e) { return '(' + this.x + ', ' + this.y + ')'; }
}

mouse.setOrigin(container);

var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
};

var updateTransformStyle = function (x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
}

// Calling Behance API

var apiKey = "8oZRxtP5VMo5D37II1xVHcHWnn5ERCt0";
var userId = "korneas";

() => {
    var behanceUserAPI = 'http://www.behance.net/v2/users/' + userId + '/callback=?api_key=' + apiKey;

}