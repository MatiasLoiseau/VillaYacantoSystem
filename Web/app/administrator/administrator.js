'use strict';

angular.module('Administrator', ['Core', 'PropertyOwners', 'Property'])
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
                templateUrl: "administrator/index.html",
                controller:"administrator.list"
            })
            .state('administrator.edit', {
                url: "/edit/{id}",
                templateUrl: "administrator/edit.html",
                controller: "administrator.new"
            })
            .state('administrator.property', {
                url: "/newProperty/{id}",
                templateUrl: "administrator/propertyRegistration.html",
                controller: "administrator.property"
            })
    });

