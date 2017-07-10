'use strict';

angular.module('PropertyOwners')
    .controller('propertyOwner.list', ['$scope', 'propertyService', 'propertyOwnerService' , 'authenticationService', '$stateParams', function($scope, propertyService, propertyOwnerService, authenticationService, $stateParams){
        $scope.setup = function () {
            $scope.emailUser = authenticationService.getCurrentUsername();
            $scope.firstTime = true;
            $scope.propertyEditing = {};
            $scope.currentOwner = {};
            $scope.propertyOwners = {};


            loadPropertyOwners();
            propertyService.getProperty($scope.currentOwner ,$stateParams.id, setPropertyToEdit);
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

        $scope.save = function () {
                $scope.propertySaved = false;
                propertyService.addProperty( $scope.currentOwner, $scope.propertyEditing, onPropertySaved);
            };
            


        var onPropertySaved = function () {
            $scope.propertySaved = true;
            $stateParams.id = $scope.propertyEditing.id;
            $scope.apply();
            };
        

        var setPropertyToEdit = function (property) {
            $scope.propertyEditing = property;
        };

        $scope.deleteProperty = function (property) {
            propertyService.removeOwnersProperty($scope.currentOwner, property);
        };

        $scope.setup();
    }]);