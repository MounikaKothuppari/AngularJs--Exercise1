'use strict';

/**
 * @ngdoc function
 * @name exercise1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the exercise1App
 */
var app=angular.module('exercise1App');
app.controller('SidebarController',  function() {
   

});app.controller("con", function($scope) {
    $scope.class1 = "col-xs-1";
    $scope.class2 = "col-xs-9";
    $scope.class3 = "sidebar";

    $scope.changeClass = function() {


        if ($scope.class1 == "col-xs-1" && $scope.class2 == "col-xs-9" && $scope.class3 == "sidebar") {
            $scope.class1 = "col-xs-3";
            $scope.class2 = "col-xs-8";
            $scope.class3 = "slideOut col-xs-10";
        } else {
            $scope.class1 = "col-xs-1";
            $scope.class2 = "col-xs-9";
            $scope.class3 = "sidebar";
        }


    };
});
