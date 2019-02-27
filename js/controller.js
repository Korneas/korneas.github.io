var app = angular.module('K_Portfolio', ['ngRoute']);

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

        .otherwise({ redirectTo: '/' })
});

app.controller('HomeController', function ($scope) {
    $scope.k_msg = "Camilo";
});

app.controller('ProjectsController', function ($scope) {
    $scope.title = "PROJECTS";

    projects = [
        { name: "Napole", date: "2017", description: "Vibrator assistance for blind mobilitation", tag: "Interactive" },
        { name: "Ikigai", date: "2017", description: "Vibrator assistance for blind mobilitation", tag: "Interactive" },
        { name: "Hictio", date: "2017", description: "Vibrator assistance for blind mobilitation", tag: "Interactive" },
        { name: "Fresco", date: "2017", description: "Vibrator assistance for blind mobilitation", tag: "Render" },
        { name: "Arduino", date: "2017", description: "Vibrator assistance for blind mobilitation", tag: "Illustration" }
    ];
    $scope.projects = projects;

    $scope.tags = [
        { name: "All", num: projects.length },
        { name: "Interactive", num: projects.filter((project) => { return project.tag === "Interactive" }).length },
        { name: "Render", num: projects.filter((project) => { return project.tag === "Render" }).length },
        { name: "Illustration", num: projects.filter((project) => { return project.tag === "Illustration" }).length }
    ];
});

app.controller('AboutController', function ($scope) {
    $scope.k_msg = "Sobre mi";
});

app.controller('ContactController', function ($scope) {
    $scope.k_msg = "Contacto";
});