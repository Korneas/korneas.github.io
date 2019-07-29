//Developed by: Camilo Jose Montoya | @korneas
var app = angular.module('korneas', ['ngRoute', 'ngAnimate']);

const cursor = document.getElementById("cursor");

const size_s = 600;

var imageList = [
    //Home
    "../img/home/0_k.png",
    "../img/home/1_trees.png",
    "../img/home/2_city.png",
    "../img/home/3_mountain.png",
    "../img/home/4_andes.png",
    "../img/home/5_sun.png",
    "../img/whatido.png",
    "../img/contact.png",
    //Banners
    "../img/banners/hictio_bgs.png",
    "../img/banners/lifekeeper_bgl.png",
    "../img/banners/lifekeeper_bgs.png",
    "../img/banners/napole_bgs.png",
    "../img/banners/nightmares_bgs.png",
    //About
    "../img/profile_pic.png",
    "../img/research.png",
    "../img/skills/pic/appdev.png",
    "../img/skills/pic/communication.png",
    "../img/skills/pic/concept.png",
    "../img/skills/pic/creativity.png",
    "../img/skills/pic/decision.png",
    "../img/skills/pic/detailoriented.png",
    "../img/skills/pic/gaming.png",
    "../img/skills/pic/problemsolving.png",
    "../img/skills/pic/teamwork.png",
    "../img/skills/pic/uidesign.png",
    "../img/skills/pic/uxdesign.png",
    "../img/skills/pic/webdev.png"
];

var projectImageList = [
    //Rest of banners
    "../img/banners/hictio_bgl.png",
    "../img/banners/napole_bgl.png",
    "../img/banners/nightmares_bgl.png",
    //Preview project
    "../img/banners/lifekeeper_bgp.png",
    "../img/banners/hictio_bgp.png",
    "../img/banners/nightmares_bgp.png",
    "../img/banners/napole_bgp.png",
    //Lifekeeper
    "../img/projects/lifekeeper/brand_interface.png",
    "../img/projects/lifekeeper/context.png",
    "../img/projects/lifekeeper/emergency.png",
    "../img/projects/lifekeeper/font.png",
    "../img/projects/lifekeeper/icon_emergency.png",
    "../img/projects/lifekeeper/icon_learning.png",
    "../img/projects/lifekeeper/icon_real.png",
    "../img/projects/lifekeeper/icon_social.png",
    "../img/projects/lifekeeper/identification.png",
    "../img/projects/lifekeeper/illustrations.png",
    "../img/projects/lifekeeper/interview.png",
    "../img/projects/lifekeeper/iphone.png",
    "../img/projects/lifekeeper/learn.png",
    "../img/projects/lifekeeper/news.png",
    "../img/projects/lifekeeper/palette.png",
    "../img/projects/lifekeeper/practice.png",
    "../img/projects/lifekeeper/start_composition.jpg",
    "../img/projects/lifekeeper/userflow.png",
    "../img/projects/lifekeeper/volunteer.png",
    "../img/projects/lifekeeper/wireframes_1.png",
    "../img/projects/lifekeeper/wireframes_2.png",
    "../img/projects/lifekeeper/wireframes_3.png",
    "../img/projects/lifekeeper/wireframes_4.png",
    //Hictio
    "../img/projects/hictio/context_city.png",
    "../img/projects/hictio/field_friends.png",
    "../img/projects/hictio/field_users.png",
    "../img/projects/hictio/haptic_evolution.png",
    "../img/projects/hictio/haptic_installation.png",
    "../img/projects/hictio/ideation.png",
    "../img/projects/hictio/problem_aquarium.png",
    "../img/projects/hictio/problem_zoo.png",
    "../img/projects/hictio/proposal_gesture.png",
    "../img/projects/hictio/proposal_physical.png",
    "../img/projects/hictio/proposal_proximity.png",
    "../img/projects/hictio/proposal_tactile.png",
    "../img/projects/hictio/proposal_wristband.png",
    "../img/projects/hictio/proposal.png",
    "../img/projects/hictio/result_haptic.png",
    "../img/projects/hictio/result_sound.png",
    "../img/projects/hictio/result_tech.png",
    "../img/projects/hictio/test_ergonomic.png",
    "../img/projects/hictio/test_haptic.png",
    "../img/projects/hictio/test_interface.png",
    "../img/projects/hictio/test_wristband.png",
    "../img/projects/hictio/usertesting.png",
    //Napole
    "../img/projects/napole/app.png",
    "../img/projects/napole/cap_band.png",
    "../img/projects/napole/caps.png",
    "../img/projects/napole/circuit.png",
    "../img/projects/napole/problem.png",
    "../img/projects/napole/start_composition.png",
    "../img/projects/napole/start_screen.png",
    "../img/projects/napole/step_1.png",
    "../img/projects/napole/step_2.png",
    "../img/projects/napole/step_3.png",
    "../img/projects/napole/step_4.png",
    "../img/projects/napole/step_5.png",
    "../img/projects/napole/testing_1.png",
    "../img/projects/napole/testing_2.png",
    "../img/projects/napole/testing_3.png",
    //Nightmares
    "../img/projects/nightmares/title_nightmares.png",
    "../img/projects/nightmares/sketch.png",
    "../img/projects/nightmares/composition_1.png",
    "../img/projects/nightmares/composition_2.png",
    "../img/projects/nightmares/composition_3.png",
    "../img/projects/nightmares/composition_4.png",
    "../img/projects/nightmares/composition_5.png",
    "../img/projects/nightmares/composition_6.png",
    "../img/projects/nightmares/composition_7.png",
    "../img/projects/nightmares/composition_8.png",
    "../img/projects/nightmares/composition_9.png",
    "../img/projects/nightmares/NightMare_1.jpg",
    "../img/projects/nightmares/NightMare_2.jpg",
    "../img/projects/nightmares/NightMare_3.jpg",
    "../img/projects/nightmares/NightMare_4.jpg",
    "../img/projects/nightmares/NightMare_5.jpg",
    "../img/projects/nightmares/NightMare_6.jpg",
    "../img/projects/nightmares/NightMare_7.jpg",
    "../img/projects/nightmares/NightMare_8.jpg",
    "../img/projects/nightmares/NightMare_9.jpg",
    "../img/projects/nightmares/NightMare_10.jpg",

];

var loaded = false;
var toggled = false;
function fadeOut(el) {
    var fadeTarget = el;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }

        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= .05;
        } else {
            clearInterval(fadeEffect);
            fadeTarget.style.display = 'none';
        }
    }, 50);
}

function fadeIn(el) {
    var fadeTarget = el;
    var fadeEffect = setInterval(function () {
        fadeTarget.style.display = 'block';

        if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.opacity = 1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
}

let homeLink = "/";
let aboutLink = "/about";
let projectsLink = "/projects";
let contactLink = "/contact";

var projects = [
    {
        name: "Lifekeeper",
        id: "lifekeeper",
        date: "2019",
        description: "First aid learning and emergency app for university students",
        hashtag: "#FirstAid",
        tag: "Interactive",
        logo: "../img/banners/lifekeeper_logo.png",
        img: "../img/banners/lifekeeper_img.png",
        bgs: "../img/banners/lifekeeper_bgs.png",
        bgl: "../img/banners/lifekeeper_bgl.png",
        bgp: "../img/banners/lifekeeper_bgp.png",
        url: "../pages/projects/lifekeeper.html",
        color: 1,
        title: "First aid learning and emergency mobile application",
        role: "UI/UX Designer",
        team: "Camilo Montoya, Juan Piedrahita",
        overview: "Lifekeeper is a user-friendly interface to learn first aid, using the theoretical-practical learning model applied to the content of different entities that teach on the subject, and help during an emergency situation."
    },
    {
        name: "Hictio",
        id: "hictio",
        date: "2018",
        description: "Interactive accessible system for museography and blind inclusion",
        hashtag: "#Museography",
        tag: "Interactive",
        logo: "../img/banners/hictio_logo.png",
        img: "../img/banners/hictio_img.png",
        bgs: "../img/banners/hictio_bgs.png",
        bgl: "../img/banners/hictio_bgl.png",
        bgp: "../img/banners/hictio_bgp.png",
        url: "../pages/projects/hictio.html",
        color: 0,
        title: "Interactive accessible system for museography and blind inclusion",
        role: "Product Designer",
        team: "Camilo Montoya, David Giraldo",
        overview: `Hictio offers an interactive and accessible museography experience in the aquarium of the "Zoológico de Cali" in Cali, Colombia. Where blind and sighted people inside the place can learn about the fishes using: a mobile app designed with TalkBack gestures, wristbands with NFC tech, BLE (Bluetooth low energy) beacons for proximity events and vibro-tactile silicone fish sculpture attached to an interactive installation.`
    },
    {
        name: "Nightmares",
        id: "nightmares",
        date: "2018",
        description: "The distorted perception of reality and the human being",
        hashtag: "#HumanBeing",
        tag: "Art",
        logo: "../img/banners/nightmares_logo.png",
        img: "../img/banners/nightmares_img.png",
        bgs: "../img/banners/nightmares_bgs.png",
        bgl: "../img/banners/nightmares_bgl.png",
        bgp: "../img/banners/nightmares_bgp.png",
        url: "../pages/projects/nightmares.html",
        color: 0,
        title: "The distorted perception of the reality and the human being",
        role: "Artist",
        team: "Camilo Montoya",
        overview: "Nightmares is a collection of renders based in the human liberation in the postmodern time. Taking concepts like the self evolution, the duality and the distortion in the individual perception of the world, to create a series that place the human being confronting his dark conception of the reality."
    },
    {
        name: "Napole",
        id: "napole",
        date: "2018",
        description: "Assistance system for secure mobility during Google Maps trip",
        hashtag: "#Mobility",
        tag: "Interactive",
        logo: "../img/banners/napole_logo.png",
        img: "../img/banners/napole_img.png",
        bgs: "../img/banners/napole_bgs.png",
        bgl: "../img/banners/napole_bgl.png",
        bgp: "../img/banners/napole_bgp.png",
        url: "../pages/projects/napole.html",
        color: 0,
        title: "Assistance system for secure mobility during Google Maps trip",
        role: "UI/UX Developer",
        team: "Camilo Montoya, David Giraldo",
        overview: "Napole is a wearable and mobile app to help blind and sighted people navigate with Google Maps, just wearing a cap a planning their trip on their smartphone. This is based on investigations about our objective public to help them while they walk in unknown places"
    }
];

skillsList = [
    {
        title: "UI Design",
        description: "Ability to design digital interfaces that convey client values and improve usability through visual and animation principles.",
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
        description: "Knowledge to perform user-centered research and design, in order to devise and prototype meaningful experiences.",
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
        description: "Experience using techniques such as sketching, illustration and 3d rendering, to conceptualize ideas for mixed markets.",
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
        description: "Familiarity in the use of functional programming for the development of web applications, through front-end design.",
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
        description: "Dexterity to design, prototype and program mobile applications in native or hybrid language.",
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
        description: "Aptitude for the design and development of videogames, focused on the narrative, the art and the gameplay.",
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

talentList = [
    {
        title: "Creativity",
        description: "Constant observation of the human nature with a playful mindset, to think about new ideas that help my daily work.",
        tools: "",
        image: "../img/skills/pic/creativity.png",
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
        image: "../img/skills/pic/decision.png",
        icon: "../img/skills/icon/decision.svg"
    },
    {
        title: "Teamwork",
        description: "Ability to work in sync with a team to achieve a goal, using the qualities of each one for a better flow during a project.",
        tools: "",
        image: "../img/skills/pic/teamwork.png",
        icon: "../img/skills/icon/team.svg"
    },
    {
        title: "Detail-oriented",
        description: "Strong sense of details and aesthethics to develop high quality products and results.",
        tools: "",
        image: "../img/skills/pic/detailoriented.png",
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

paperList = [
    {
        name: "Universal Design for Enhancing Accessibility of the Visually Impaired in Touristic Environments",
        year: "2019",
        link: "https://link.springer.com/chapter/10.1007%2F978-3-030-20227-9_48"
    },
    {
        name: "User Engagement for Collaborative Learning on a Mobile and Desktop Augmented Reality Application (Coming soon!)",
        year: "2019",
        link: ""
    }
];

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
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

app.controller('MenuController', function ($scope) {
    $scope.homeLink = homeLink;
    $scope.aboutLink = aboutLink;
    $scope.projectsLink = projectsLink;
    $scope.contactLink = contactLink;
});

app.controller('HomeController', function ($scope, $window) {
    $scope.projectsLink = projectsLink;
    $scope.lastProjects = projects.slice(0, 3);

    if ($window.innerWidth < size_s) {
        $scope.lastProjects[0].bgl = $scope.lastProjects[0].bgs;
    }

    $scope.projectTag = function (value) {
        var tagValue = "";
        switch (value) {
            case "Interactive":
                tagValue = "interactive";
                break;
            case "Branding":
                tagValue = "branding";
                break;
            case "Art":
                tagValue = "art";
                break;
        }
        return tagValue;
    }

    $scope.projectDescription = function (color) {
        var desClass = "project_description";
        if (color === 1) {
            desClass += " black";
        }
        return desClass;
    }

    $scope.projectHashtag = function (color) {
        var desClass = "project_tag";
        if (color === 1) {
            desClass += " black";
        }
        return desClass;
    }

    let landing4 = document.getElementById("landing-4");
    let landing3 = document.getElementById("landing-3");
    let landing2 = document.getElementById("landing-2");
    let landing1 = document.getElementById("landing-1");
    let landing0 = document.getElementById("landing-0");
    let hiding = document.getElementById("hiding");
    let actualScroll = $window.pageYOffset;

    $window.onscroll = () => {
        actualScroll = $window.pageYOffset;

        if (actualScroll > 0) {
            landing0.setAttribute("style", "transform: translateY(-" + actualScroll / 2 + "px);");
            hiding.setAttribute("style", "transform: translateY(-" + actualScroll / 2 + "px);");
            landing1.setAttribute("style", "transform: translateY(-" + ((actualScroll / 2) - (10 * (actualScroll / 100))) + "px);");
            landing2.setAttribute("style", "transform: translateY(-" + ((actualScroll / 2) - (20 * (actualScroll / 100))) + "px);");
            landing3.setAttribute("style", "transform: translateY(-" + ((actualScroll / 2) - (30 * (actualScroll / 100))) + "px);");
            landing4.setAttribute("style", "transform: translateY(-" + ((actualScroll / 2) - (40 * (actualScroll / 100))) + "px);");
        } else if (actualScroll == 0) {
            landing0.setAttribute("style", "transform: translateY(0px);");
            landing1.setAttribute("style", "transform: translateY(0px);");
            landing2.setAttribute("style", "transform: translateY(0px);");
            landing3.setAttribute("style", "transform: translateY(0px);");
            landing4.setAttribute("style", "transform: translateY(0px);");
            hiding.setAttribute("style", "transform: translateY(0px);");
        }
    }
});

app.controller('ProjectsController', function ($scope) {
    $scope.projects = projects;

    $scope.tags = ["All", "Interactive", "Branding", "Art"];
    $scope.iconTag = function (num) {
        return $scope.tags[num].toLowerCase();
    }

    $scope.projectTag = function (value) {
        var tagValue = "";
        switch (value) {
            case "Interactive":
                tagValue = "interactive";
                break;
            case "Branding":
                tagValue = "branding";
                break;
            case "Art":
                tagValue = "art";
                break;
        }
        return tagValue;
    }

    $scope.projectDescription = function (color) {
        var desClass = "project_description";
        if (color === 1) {
            desClass += " black";
        }
        return desClass;
    }

    $scope.projectHashtag = function (color) {
        var desClass = "project_tag";
        if (color === 1) {
            desClass += " black";
        }
        return desClass;
    }
});

app.controller('AboutController', function ($scope, $timeout, $window) {
    $scope.toggleSkill = 0;
    $scope.skillTitle = "Skills";
    $scope.skills = skillsList;
    $scope.talents = talentList;
    $scope.papers = paperList;
    $scope.skillName = skillsList[0].title;
    $scope.skillDescription = skillsList[0].description;
    $scope.skillImage = skillsList[0].image;
    $scope.skillTools = skillsList[0].tools;
    $scope.skillSelected = 0;
    $scope.skillType = 0;

    $scope.changeSelected = (index, type) => {
        var o = '.3';
        if (type == $scope.skillType) {
            if (index == $scope.skillSelected) {
                o = '1';
            }
        }

        return {
            opacity: o
        }
    };

    $scope.changeSkill = (index, type) => {
        if ($scope.skillSelected != index || $scope.skillType != type) {
            $scope.changeItem = true;
            $timeout(function () {
                $scope.changeItem = false;
                $scope.skillTypeAfter = type;
                switch (type) {
                    case 0:
                        $scope.skillName = $scope.skills[index].title;
                        $scope.skillDescription = $scope.skills[index].description;
                        $scope.skillImage = $scope.skills[index].image;
                        $scope.skillTools = $scope.skills[index].tools;
                        break;
                    case 1:
                        $scope.skillName = $scope.talents[index].title;
                        $scope.skillDescription = $scope.talents[index].description;
                        $scope.skillImage = $scope.talents[index].image;
                        $scope.skillTools = [];
                        break;
                    default:
                        break;
                }
            }, 300);
            $scope.skillSelected = index;
            $scope.skillType = type;
        }
    };

    $scope.toolsType = (type) => {
        var height = "30px";
        if (type == 1) {
            height = 0;
        }

        return {
            height: height
        }
    }

    $scope.switchSkills = (type) => {
        if ($window.innerWidth < 768 && $scope.typeSkill != type) {
            if (type == 0) {
                document.getElementsByClassName("about_grid")[0].classList.add("change");
                document.getElementById("about_skills_switch").classList.add("on");
                document.getElementById("about_talent_switch").classList.remove("on");
                $scope.changeSkill($scope.skillSelected, 0);
                $timeout(function () {
                    $scope.skills = skillsList;
                    document.getElementsByClassName("about_grid")[0].classList.remove("change");
                }, 299);
            } else if (type == 1) {
                document.getElementsByClassName("about_grid")[0].classList.add("change");
                document.getElementById("about_talent_switch").classList.add("on");
                document.getElementById("about_skills_switch").classList.remove("on");
                $scope.changeSkill($scope.skillSelected, 1);
                $timeout(function () {
                    $scope.skills = talentList;
                    document.getElementsByClassName("about_grid")[0].classList.remove("change");
                }, 299);
            }
        }
        $scope.toggleSkill = type;
    }
});

app.controller('ContactController', function ($scope) {
    $scope.k_msg = "Contacto";
});

app.controller('ProjectControl', function ($scope, $routeParams, $window, $interval) {
    var id = $routeParams.projectid;

    var inproject = projects.find((project) => {
        return project.id === id;
    });

    $scope.project = inproject;
    $scope.projectsLink = projectsLink;

    function nextProject() {
        var nextNum = 0;
        var actualNum = projects.findIndex(p => p.id === $scope.project.id);
        nextNum = actualNum + 1;

        if (actualNum >= projects.length - 1) {
            nextNum = 0;
        }

        return projects[nextNum];
    };

    $scope.nextProject = nextProject();

    if ($window.innerWidth < size_s) {
        $scope.nextProject.bgl = $scope.nextProject.bgs;
    }

    $scope.projectTag = function (value) {
        var tagValue = "";
        switch (value) {
            case "Interactive":
                tagValue = "interactive";
                break;
            case "Branding":
                tagValue = "branding";
                break;
            case "Art":
                tagValue = "art";
                break;
        }
        return tagValue;
    }

    $scope.projectDescription = function (color) {
        var desClass = "project_description";
        if (color === 1) {
            desClass += " black";
        }
        return desClass;
    }

    $scope.projectHashtag = function (color) {
        var desClass = "project_tag";
        if (color === 1) {
            desClass += " black";
        }
        return desClass;
    }

    var scrollListenerAnim = $interval(() => {
        if ($window.scrollY >= 400) {
            if (document.getElementsByClassName("scrolldown")) {
                fadeOut(document.getElementsByClassName("scrolldown")[0]);
            }
        } else {
            if (document.getElementsByClassName("scrolldown")) {
                fadeIn(document.getElementsByClassName("scrolldown")[0]);
            }
        }
    }, 200);

    if (!inproject.team.includes(",")) {
        $scope.personal = true;
    } else {
        $scope.personal = false;
    }

    $scope.$on('$destroy', () => {
        $interval.cancel(scrollListenerAnim);
    });
});

app.run(function ($rootScope, $timeout, $window, $interval, preloader) {

    $rootScope.loaded = function () {
        if (!loaded) {
            preloader.preloadImages(imageList)
                .then(function () {
                    console.log("%cHey! Welcome to my portfolio.", "color: blue; font-size: 16px; font-weight: 700;");
                    console.log("Feel free to explore around it.");
                    //Loading successful
                    document.getElementById("menu").classList.add("out");
                    document.getElementById("preloader_loading").classList.add("loaded");
                    setTimeout(() => {
                        document.getElementById("preloader_left").classList.add("loaded");
                        document.getElementById("preloader_right").classList.add("loaded");
                        document.getElementById("preloader_line").classList.add("loaded");
                    }, 500);
                    setTimeout(() => {
                        fadeOut(document.getElementById("preloader"));
                    }, 1000);
                    preloader.preloadImages(projectImageList).then(function () { }, function () {
                        console.log("%cFailed Loading: Projects Images", "color: red")
                    })
                },
                    function () {
                        console.log("%cFailed Loading: Home Images", "color: red");
                    },
                    function (update) {
                        var load = update.percent;
                        document.getElementById("preloader_line").style.height = load + "%";
                        document.getElementById("preloader_percent").innerText = load + "%";
                    }
                );

            if ($window.innerWidth > 768) {
                document.addEventListener("mousemove", (e) => {
                    if (cursor.classList.contains("disabled")) {
                        cursor.classList.remove("disabled");
                    }
                    cursor.setAttribute("style", "top: " + (e.pageY - 12 - $window.pageYOffset) + "px; left:" + (e.pageX - 12) + "px;");

                    const isLinkTag = e.target.localName === "a";
                    let isIconTag = false;
                    if (e.path.length > 1 && e.path[1] != null && e.path[3] != null && e.path[1].classList != null && e.path[3].classList != null) {
                        isIconTag = e.path[1].classList.contains("skill_icon") || e.path[1].classList.contains("link") || e.path[3].classList.contains("link");
                    }
                    const isHovered = cursor.classList.contains("hovered");

                    if ((isLinkTag || isIconTag) && !isHovered) {
                        cursor.classList.add("hovered");
                    } else if ((!isLinkTag && !isIconTag) && isHovered) {
                        cursor.classList.remove("hovered");
                    }
                });

                document.addEventListener("mouseleave", (e) => {
                    cursor.classList.add("disabled");
                });

                document.addEventListener("mouseenter", (e) => {
                    cursor.classList.remove("disabled");
                });
            }

            function toggleMenu() {
                if (!toggled) {
                    document.getElementsByClassName("menuicon")[0].classList.add("on");
                    document.getElementsByClassName("menuicon")[1].classList.add("on");
                    document.getElementsByClassName("menuicon")[2].classList.add("on");
                    document.getElementsByClassName("fillBlue")[0].classList.add("on");
                    document.getElementsByClassName("fillBlack")[0].classList.add("on");
                    document.getElementsByClassName("fillBlack")[1].classList.add("on");
                    document.getElementsByClassName("fillBlack")[2].classList.add("on");
                    document.getElementsByClassName("fillBlack")[3].classList.add("on");
                    //document.getElementsById("fillBlack").classList.add("on");
                    document.getElementById("mail").classList.add("on");
                    document.getElementById("social").classList.add("on");
                    document.getElementById("menu_fade").classList.add("on");
                    document.getElementById("menu").classList.remove("out");
                    document.getElementById("menu").classList.remove("hidden");
                    toggled = true;
                } else {
                    document.getElementsByClassName("menuicon")[0].classList.remove("on");
                    document.getElementsByClassName("menuicon")[1].classList.remove("on");
                    document.getElementsByClassName("menuicon")[2].classList.remove("on");
                    document.getElementsByClassName("fillBlue")[0].classList.remove("on");
                    document.getElementsByClassName("fillBlack")[0].classList.remove("on");
                    document.getElementsByClassName("fillBlack")[1].classList.remove("on");
                    document.getElementsByClassName("fillBlack")[2].classList.remove("on");
                    document.getElementsByClassName("fillBlack")[3].classList.remove("on");
                    // document.getElementsById("fillBlack").classList.adremoved("on");
                    document.getElementById("mail").classList.remove("on");
                    document.getElementById("social").classList.remove("on");
                    document.getElementById("menu_fade").classList.remove("on");
                    document.getElementById("menu").classList.add("hidden");
                    toggled = false;
                }

                $timeout(() => {
                    if (document.getElementById("menu").classList.contains("hidden")) {
                        document.getElementById("menu").classList.add("out");
                    }
                }, 200);
            }

            function calculateRes() {
                return window.innerWidth < 768;
            }

            // Open menu
            document.getElementById("menu_block").addEventListener('click', () => {
                toggleMenu();
            });

            // Logo working as home
            document.getElementById("logo").addEventListener('click', () => {
                for (let index = 0; index < document.getElementsByClassName("menulink").length; index++) {
                    document.getElementsByClassName("menulink")[index].classList.remove("menu_selected");
                }
                window.location = homeLink;
                if (document.getElementById("mail").classList.contains("on")) {
                    toggleMenu();
                }
            });

            // Menu links actions
            function menuLink(e) {
                for (let index = 0; index < document.getElementsByClassName("menulink").length; index++) {
                    document.getElementsByClassName("menulink")[index].classList.remove("menu_selected");
                }
                this.classList.add("menu_selected");
                if (calculateRes()) {
                    toggleMenu();
                }
            }

            for (let index = 0; index < document.getElementsByClassName("menulink").length; index++) {
                document.getElementsByClassName("menulink")[index].addEventListener('click', menuLink);
            }

            loaded = true;
        }
    };

    $rootScope.$on('$routeChangeSuccess', function () {
        $timeout(function () {
            $window.scrollTo(0, 0);
        }, 400);
    });
});