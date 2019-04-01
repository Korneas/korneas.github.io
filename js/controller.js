var app = angular.module('korneasPortfolioApp', ['ngRoute', 'ngAnimate']);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
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

        .otherwise({
            redirectTo: '/'
        })
});

app.controller('HomeController', function ($scope) {
    //Empty
});

app.controller('ProjectsController', function ($scope) {
    $scope.title = "Projects";

    projects = [{
            name: "Ikigai",
            date: "2019",
            description: "Vibrator assistance for blind mobilitation",
            tag: "Interactive",
            img: "",
            link: ""
        },
        {
            name: "Napole",
            date: "2018",
            description: "Vibrator assistance for blind mobilitation",
            tag: "Interactive",
            img: "../img/banners/napole_banner.png",
            link: "https://www.behance.net/gallery/59197013/Napole-Interactive-design-for-blind-people"
        },
        {
            name: "Trek Magazine",
            date: "2015",
            description: "Vibrator assistance for blind mobilitation",
            tag: "Branding",
            img: "../img/banners/trek_banner.png",
            link: "https://www.behance.net/gallery/37665031/TREK-Travel-Magazine"
        },
        {
            name: "DMI Redesign",
            date: "2016",
            description: "Vibrator assistance for blind mobilitation",
            tag: "Interactive",
            img: "../img/banners/dmi_banner.png",
            link: "https://www.behance.net/gallery/43404461/DMI"
        }
    ];
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
            image: "../img/skills/pic/ui.png",
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
            image: "",
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
            image: "",
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
            image: "",
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
            image: "",
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
            image: "",
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
            $scope.skillTitle = "Capacities";
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
        $scope.changeItem = true;
        $timeout(function () {
            $scope.changeItem = false;
            $scope.skillName = $scope.skills[index].title;
            $scope.skillDescription = $scope.skills[index].description;
            $scope.skillImage = skillsList[index].image;
            $scope.skillTools = skillsList[index].tools;
        }, 200);
        $scope.skillSelected = index;
    };

});

app.controller('ContactController', function ($scope) {
    $scope.k_msg = "Contacto";
});

app.run(function ($rootScope, $timeout, $window) {
    $rootScope.$on('$routeChangeSuccess', function () {
        $timeout(function () {
            $window.scrollTo(0, 0);
        }, 1000);
    });
});