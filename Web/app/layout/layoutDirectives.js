'use strict'

angular.module('Layout')
    .directive('menu', function() {
        return {
            restrict: 'A',
            templateUrl: 'layout/menu.html'
        }
    });

angular.module('Layout')
    .directive('header', function() {
        return {
            restrict: 'A',  //Si tengo la etiqueta "header", me trae este html
            templateUrl: 'layout/header.html'
        }
    });

angular.module('Layout')
    .directive('content', function() {
        return {
            restrict: 'A',
            templateUrl: 'layout/content.html'
        }
    });

angular.module('Layout')
    .directive('footer', function() {
        return {
            restrict: 'A',
            templateUrl: 'layout/footer.html'
        }
    });

