'use strict';

angular.module('Multimedia', ['Core'])
    .config(function($stateProvider) {
        $stateProvider
            .state('multimedia', {
                url: "/multimedia",
                abstract: true,
                template: "<ui-view />"
            })
            .state('multimedia.list', {
                url: "/",
                templateUrl: "multimedia/index.html"
            })
    });