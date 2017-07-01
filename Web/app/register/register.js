'use strict';

angular.module('Register', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider){
        $stateProvider('register', {
            templateUrl: 'register/register.html',
            controller: 'RegisterCtrl'
        });
    }]);