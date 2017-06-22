'use strict';

angular.module('PropertyOwners', ['Core'])
    .config(function($stateProvider) {
        $stateProvider
            .state('propertyOwners', {
                url: "/propertyOwners",
                abstract: true,
                template: "<ui-view />"
            })
            .state('propertyOwners.list', {
                url: "/",
                templateUrl: "propertyOwners/index.html"
            })
    });