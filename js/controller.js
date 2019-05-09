//Developed by: Camilo Jose Montoya | @korneas
var app = angular.module('korneasPortfolioApp', ['ngRoute', 'ngAnimate']);

var projects = [{
    name: "Lifekeeper",
    id: "lifekeeper",
    date: "2019",
    description: "First aid learning and emergency app",
    tag: "Interactive",
    img: "../img/banners/lifekeeper_banner.jpg",
    url: "../pages/projects/lifekeeper.html",
    title: "First aid learning and emergency mobile application",
    role: "UI/UX Designer",
    team: "Camilo Montoya, Juan Piedrahita",
    overview: "Lifekeeper is a user-friendly interface to learn first aid, using the theoretical-practical learning model applied to the content of different entities that teach on the subject, and help during an emergency situation."
},
{
    name: "Hictio",
    id: "hictio",
    date: "2018",
    description: "Interactive accessible system for museography",
    tag: "Interactive",
    img: "../img/banners/hictio_banner.jpg",
    behance: "",
    url: "../pages/projects/hictio.html",
    title: "Interactive accessible system for museography and blind inclusion",
    role: "Product Designer",
    team: "Camilo Montoya, David Giraldo",
    overview: `Hictio offers an interactive and accessible museography experience in the aquarium of the "Zoológico de Cali" in Cali, Colombia. Where blind and sighted people inside the place can learn about the fishes using: a mobile app designed with TalkBack gestures, wristbands with NFC tech, BLE (Bluetooth low energy) beacons for proximity events and vibro-tactile silicone fish sculpture attached to an interactive installation.`
},
{
    name: "Nightmares",
    id: "nightmares",
    date: "2018",
    description: "The distorted perception of the reality",
    tag: "Art",
    img: "../img/banners/nightmares_banner.png",
    url: "../pages/projects/nightmares.html",
    title: "The distorted perception of the reality and the human being",
    role: "Artist",
    team: "Camilo Montoya",
    overview: "Nightmares is a collection of renders based in the human liberation in the postmodern time. Taking concepts like the self evolution, the duality and the distortion in the individual perception of the world, to create a series that place the human being confronting his dark conception of the reality."
},
{
    name: "Napole",
    id: "napole",
    date: "2018",
    description: "Assistance system for secure mobility",
    tag: "Interactive",
    img: "../img/banners/napole_banner.png",
    url: "../pages/projects/napole.html",
    title: "Assistance system for secure mobility during Google Maps trip",
    role: "UI/UX Developer",
    team: "Camilo Montoya, David Giraldo",
    overview: "Napole is a wearable and mobile app to help blind and sighted people navigate with Google Maps, just wearing a cap a planning their trip on their smartphone. This is based on investigations about our objective public to help them while they walk in unknown places"
}
];

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
    //$locationProvider.html5Mode(true);
}]);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })

        .when('/projects', {
            templateUrl: '../pages/projects.html',
            controller: 'ProjectsController'
        })

        .when('/about', {
            templateUrl: '../pages/about.html',
            controller: 'AboutController'
        })

        .when('/contact', {
            templateUrl: '../pages/contact.html',
            controller: 'ContactController'
        })

        .when('/projects/:projectid', {
            templateUrl: '../pages/project.html',
            controller: 'ProjectControl'
        })

        .otherwise({
            redirectTo: '/'
        })

});

app.controller('HomeController', function ($scope) {
    //Empty
});

app.controller('ProjectsController', function ($scope) {
    $scope.title = "Projects";

    $scope.projects = projects;

    $scope.tags = [{
        name: "All",
        num: projects.length
    },
    {
        name: "Interactive",
        num: projects.filter((project) => {
            return project.tag === "Interactive"
        }).length
    },
    {
        name: "Branding",
        num: projects.filter((project) => {
            return project.tag === "Branding"
        }).length
    },
    {
        name: "Art",
        num: projects.filter((project) => {
            return project.tag === "Art"
        }).length
    }
    ];
});

app.controller('AboutController', function ($scope, $timeout) {

    $scope.description_1 = "I’m Korneas, or Camilo Montoya, a 21 years-old Colombian-based Product Design student in ICESI University."
    $scope.description_2 = "I design digital solutions for clients based on the context and the experience of the user, getting high quiality prototypes and results in the process.";
    $scope.description_3 = "Impulsed by my interest on digital content and the human feelings, I try to explore new things daily to apply them in unique experiences and visuals.";
    $scope.description_4 = "I'm also interested in illustration, lo-fi music, videogames, Pokemon and theories about the end of Evangelion.";

    $scope.toogleController = false;
    $scope.skillTitle = "Skills";

    skillsList = [{
        title: "UI Design",
        description: "Capacity to design digital user interfaces that convey client values and maximize usability, using visual keys for a easy understanding for the user.",
        tools: [{
            name: "Photoshop",
            img: "../img/tools/photoshop.png"
        },
        {
            name: "Illustrator",
            img: "../img/tools/illustrator.png"
        },
        {
            name: "Adobe XD",
            img: "../img/tools/adobe_xd.png"
        },
        {
            name: "Figma",
            img: "../img/tools/figma.png"
        }
        ],
        image: "../img/skills/pic/uidesign.png",
        icon: "../img/skills/icon/ui.svg"
    },
    {
        title: "UX Design",
        description: "Knowledge to perform user and context research, focused on the bases of user-centered design, in order to devise and prototype meaningful experiences.",
        tools: [{
            name: "Figma",
            img: "../img/tools/figma.png"
        },
        {
            name: "Invision",
            img: "../img/tools/invision.png"
        },
        {
            name: "Marvel",
            img: "../img/tools/marvel_app.png"
        }
        ],
        image: "../img/skills/pic/uxdesign.png",
        icon: "../img/skills/icon/ux.svg"
    },
    {
        title: "Concept Art",
        description: "Experience using techniques such as sketching, illustration and 3d modeling and rendering, to conceptualize ideas for advertising, applications or animations",
        tools: [{
            name: "Photoshop",
            img: "../img/tools/photoshop.png"
        },
        {
            name: "Cinema 4D",
            img: "../img/tools/c4d.png"
        },
        {
            name: "Adobe After Effects",
            img: "../img/tools/adobe_after.png"
        }
        ],
        image: "./img/skills/pic/concept.png",
        icon: "../img/skills/icon/art.svg"
    },
    {
        title: "Web Development",
        description: "Familiarity in the use of functional programming for the development of web prototypes, through front-end and back-end design.",
        tools: [{
            name: "HTML5",
            img: "../img/tools/html5.png"
        },
        {
            name: "CSS",
            img: "../img/tools/css.png"
        },
        {
            name: "Javascript",
            img: "../img/tools/js.png"
        },
        {
            name: "Angular",
            img: "../img/tools/angular.png"
        },
        {
            name: "React",
            img: "../img/tools/react.png"
        }
        ],
        image: "../img/skills/pic/webdev.png",
        icon: "../img/skills/icon/web.svg"
    },
    {
        title: "App Development",
        description: "Dexterity to design and program prototypes of mobile applications in native and hybrid language.",
        tools: [{
            name: "Android",
            img: "../img/tools/android_studio.png"
        },
        {
            name: "React",
            img: "../img/tools/react.png"
        },
        {
            name: "Java",
            img: "../img/tools/java.png"
        }
        ],
        image: "../img/skills/pic/appdev.png",
        icon: "../img/skills/icon/app.svg"
    },
    {
        title: "Game Development",
        description: "Aptitude for the design and development of videogames, focused on the narrative, the art, the gameplay and the programming of it.",
        tools: [{
            name: "Unity",
            img: "../img/tools/unity.png"
        },
        {
            name: "Java",
            img: "../img/tools/java.png"
        },
        {
            name: "Processing",
            img: "../img/tools/processing.png"
        }
        ],
        image: "../img/skills/pic/gaming.png",
        icon: "../img/skills/icon/game.svg"
    }
    ];

    capacitiesList = [{
        title: "Creativity",
        description: "Constant observation of the human nature with a playful mindset, to think about new ideas that can help my projects or workflow.",
        tools: "",
        icon: "../img/skills/icon/creative.svg"
    },
    {
        title: "Problem-solving",
        description: "Always trying to find the solution to different challenges or situations during the design and development process.",
        tools: "",
        image: "../img/skills/pic/problemsolving.png",
        icon: "../img/skills/icon/problem.svg"
    },
    {
        title: "Decision-making",
        description: "Fast selection of choices when a problem is around the corner, to get always the best outcome of the situation.",
        tools: "",
        icon: "../img/skills/icon/decision.svg"
    },
    {
        title: "Teamwork",
        description: "Ability to work in sync with a team to achieve a goal, using the individual qualities of each one for a better flow during the development of a project",
        tools: "",
        image: "../img/skills/pic/teamwork.png",
        icon: "../img/skills/icon/team.svg"
    },
    {
        title: "Detail-oriented",
        description: "Strong sense of details and aesthethics to develop high quality products.",
        tools: "",
        icon: "../img/skills/icon/detail.svg"
    },
    {
        title: "Communication",
        description: "Effectiveness to communicate my ideas with the work team and reach agreements for the development of projects.",
        tools: "",
        image: "../img/skills/pic/communication.png",
        icon: "../img/skills/icon/communication.svg"
    }
    ];

    $scope.skills = skillsList;
    $scope.skillName = skillsList[0].title;
    $scope.skillDescription = skillsList[0].description;
    $scope.skillImage = skillsList[0].image;
    $scope.skillTools = skillsList[0].tools;
    $scope.skillSelected = 0;

    $scope.toogleSkills = function () {
        $scope.toogleController = !$scope.toogleController;
        if ($scope.toogleController) {
            $scope.skillTitle = "Talent";
            $scope.skills = capacitiesList;
            $scope.skillSelected = 0;
            $scope.changeItem = true;
            $timeout(function () {
                $scope.changeItem = false;
                $scope.skillName = $scope.skills[0].title;
                $scope.skillDescription = $scope.skills[0].description;
                $scope.skillImage = $scope.skills[0].image;
                $scope.skillTools = [];
                $("#tools").hide();
            }, 200);
        } else {
            $scope.skillTitle = "Skills";
            $scope.skills = skillsList;
            $scope.skillSelected = 0;
            $scope.changeItem = true;
            $timeout(function () {
                $scope.changeItem = false;
                $scope.skillName = $scope.skills[0].title;
                $scope.skillDescription = $scope.skills[0].description;
                $scope.skillImage = $scope.skills[0].image;
                $scope.skillTools = $scope.skills[0].tools;
                $("#tools").show();
            }, 200);
        }
    };

    $scope.changeSelected = (index) => {
        var o = '.3';
        if (index == $scope.skillSelected) {
            o = '1';
        }

        return {
            opacity: o
        }
    };

    $scope.changeSkill = (index) => {
        if ($scope.skillSelected != index) {
            $scope.changeItem = true;
            $timeout(function () {
                $scope.changeItem = false;
                $scope.skillName = $scope.skills[index].title;
                $scope.skillDescription = $scope.skills[index].description;
                $scope.skillImage = $scope.skills[index].image;
                $scope.skillTools = skillsList[index].tools;
            }, 200);
            $scope.skillSelected = index;
        }
    };
});

app.controller('ContactController', function ($scope) {
    $scope.k_msg = "Contacto";
});

app.controller('ProjectControl', function ($scope, $routeParams, $window) {
    var id = $routeParams.projectid;

    var inproject = projects.find((project) => {
        return project.id === id;
    });

    $scope.project = inproject;

    setInterval(() => {
        if ($window.scrollY >= 400) {
            $('.scrolldown').fadeOut();
        } else {
            $('.scrolldown').fadeIn();
        }
    }, 200);

    if (!inproject.team.includes(",")) {
        $scope.personal = true;
    } else {
        $scope.personal = false;
    }
});

app.run(function ($rootScope, $timeout, $window) {

    $rootScope.loaded = function () {
        $('#menu').hide();
        $('#preloader').hide();
        $('#k_awaken').attr("src", "./img/k_awake.svg");
        $('#loader-text').text("READY!");
        setTimeout(() => {
            $('#preloader').fadeOut(1000, () => {
                $('#preloader').hide();
            });
        }, 500);
    };

    $rootScope.$on('$routeChangeSuccess', function () {
        $timeout(function () {
            $window.scrollTo(0, 0);
        }, 400);
    });

    //Smooth Scrolling
    // var lastPosition = 0;
    // var scroll = window.requestAnimationFrame ||
    //     window.webkitRequestAnimationFrame ||
    //     window.mozRequestAnimationFrame ||
    //     window.msRequestAnimationFrame ||
    //     window.oRequestAnimationFrame ||
    //     // IE Fallback, you can even fallback to onscroll
    //     function (callback) {
    //         window.setTimeout(callback, 1000 / 60)
    //     };

    // function loop() {

    //     // Avoid calculations if not needed
    //     if (lastPosition == window.pageYOffset) {
    //         scroll(loop);
    //         return false;
    //     } else lastPosition = window.pageYOffset;

    //     var transform = 'translate3d(0px, -' + lastPosition + 'px, 0px)';
    //     var smoothScoll = $(".smooth")[0];

    //     smoothScoll.style.webkitTransform = transform;
    //     smoothScoll.style.mozTransform = transform;
    //     smoothScoll.style.transform = transform;


    //     scroll(loop)
    // }

    // // Call the loop for the first time
    // loop();
});