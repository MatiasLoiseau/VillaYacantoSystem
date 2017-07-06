'use strict';

angular.module('Administrator', ['Core', 'PropertyOwners'])
    .config(function($stateProvider) {
        $stateProvider
            .state('administrator', {
                url: "/administrator",
                abstract: true,
                template: "<ui-view />"
            })
            .state('administrator.new', {
                url: "/new",
                templateUrl: "administrator/edit.html",
                controller:"administrator.new"
            })
            .state('administrator.list', {
                url: "/",
                templateUrl: "administrator/index.html"
            })
    });

