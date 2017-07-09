'use strict';

angular.module('PropertyOwners')
    .controller('propertyOwner.list', ['$scope', 'propertyService', 'propertyOwnerService' , 'authenticationService', function($scope, propertyService, propertyOwnerService, authenticationService){
        $scope.setup = function () {
            $scope.emailUser = authenticationService.getCurrentUsername();
            $scope.firstTime = true;
            $scope.currentOwner = {};
            $scope.propertyOwners = {};
            loadPropertyOwners();
            $scope.readOnlyMode = false;
        };
        var loadPropertyOwners = function () {
                propertyOwnerService.getPropertyOwners(refreshPropertyOwners);
            },
            refreshPropertyOwners = function(propertyOwners){
                console.log(propertyOwners);
                if(propertyOwners == null || Object.keys(propertyOwners).length==0){
                    $scope.propertyOwners = null;
                }else{
                    $scope.propertyOwners = propertyOwners;
                    for (var key in $scope.propertyOwners) {
                        if($scope.propertyOwners[key].email == $scope.emailUser)
                        {
                            $scope.currentOwner = $scope.propertyOwners[key];
                            $scope.properties = $scope.propertyOwners[key].properties;
                        }
                    }
                }
                if($scope.firstTime)
                {
                    $scope.$apply();
                    $scope.firstTime = false;
                }
            }
            /*
            loadProperties = function () {
                console.log($scope.propertyOwners);
                if($scope.propertyOwners == null || Object.keys($scope.propertyOwners).length==0){
                    $scope.properties = null;
                }else{
                    for (var key in $scope.propertyOwners) {
                        if(scope.propertyOwners[key].email == $scope.emailUser)
                        {
                            $scope.properties = $scope.propertyOwners[key].properties;
                        }
                    }
                }
            }*/;

        $scope.deleteProperty = function (property) {
            propertyService.removeOwnersProperty($scope.currentOwner, property);
        };

        $scope.setup();
    }]);