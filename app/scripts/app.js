'use strict';

/**
 * @ngdoc overview
 * @name exercise1App
 * @description
 * # exercise1App
 *
 * Main module of the application.
 */

var app = angular
    .module('exercise1App', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ]);
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('main', {
            url: "/main",
            views: {
                "main1": {
                    templateUrl: 'views/main.html'
                },"main2": {
                    templateUrl: 'views/slider.html'
                }
            }
        })
        .state('Profile', {
            parent: 'main',
            url: "/Profile",
            templateUrl: 'views/Profile.html'
           })
 .state('MyRequests', {
            parent: 'main',
            url: "/MyRequests",
            templateUrl: 'views/MyRequests.html'
           })
 .state('MyToDo', {
            parent: 'main',
            url: "/MyToDo",
            templateUrl: 'views/MyToDo.html'
           })
 .state('MyLifeEvents', {
            parent: 'main',
            url: "/MyLifeEvents",
            templateUrl: 'views/MyLifeEvents.html'
           })
 .state('MyRewards', {
            parent: 'main',
            url: "/MyRewards",
            templateUrl: 'views/MyRewards.html'
           })
 .state('Nominations', {
            parent: 'main',
            url: "/Nominations",
            templateUrl: 'views/Nominations.html'
           })

    $urlRouterProvider.otherwise('/main');
});
app.controller('myCtrl', function($scope, $http) {
    $http.get("../data/mainjson.json")
        .then(function(response) {
            $scope.oImage = response.data.Images;
            $scope.oItem = response.data.items;
            console.log($scope.oItem[0].icon);
        });

});