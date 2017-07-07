'use strict';

angular.module('Administrator')
    .controller('administrator.new', ['$scope', 'propertyOwnerService','$stateParams', function($scope, propertyOwnerService, $stateParams){
        $scope.setup = function () {
            if (isAddingANewPropertyOwner()) {
                $scope.newRegister = {
                        email: null,
                        password: null};
                $scope.propertyOwnerEditing={
                        id:null,
                        email: null};
                $scope.isEditing = false;
            } else {
                $scope.isEditing = true;
                propertyOwnerService.getPropertyOwner($stateParams.id, setPropertyOwnersToEdit);
            }

            $scope.cuilRegExpr = '^\\d{2}-\\d{8}-\\d{1}$';
            $scope.propertyOwnerSaved = false;
            $scope.newRegisterSaved = false;
        }

        $scope.signUp = function(){
            var email = $scope.newRegister.email;
            var password = $scope.newRegister.password;

            if(email && password){
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode == 'auth/weak-password') {
                            alert('The password is too weak.');
                        } else {
                            alert(errorMessage);
                        }
                        console.log(error);
                    });
                $scope.newRegisterSaved = true;
            }
        }

        $scope.save = function () {
            $scope.propertyOwnerSaved = false;
            propertyOwnerService.save($scope.propertyOwnerEditing, onPropertyOwnerSaved);
            $scope.newRegister.email=$scope.propertyOwnerEditing.email;
        }

        var onPropertyOwnerSaved = function () {
            $scope.propertyOwnerSaved = true;
            if(isAddingANewPropertyOwner())
            {
                $stateParams.id = $scope.propertyOwnerEditing.id;
                propertyOwnerService.getPropertyOwner($scope.propertyOwnerEditing.id, setPropertyOwnersToEdit);
            }
            else
            {
                $scope.$apply();
            }
        }

        var setPropertyOwnersToEdit = function (propertyOwner) {
            $scope.propertyOwnerEditing = propertyOwner;
        }

        var isAddingANewPropertyOwner=function () {
            return $stateParams.id == undefined;
        }

        $scope.setup();
    }]);


angular.module('Administrator')
    .controller('administrator.list', ['$scope', 'propertyOwnerService', function($scope, propertyOwnerService){
            $scope.setup = function () {
                $scope.firstTime = true;
                loadPropertyOwners();
                $scope.readOnlyMode = false;
            };
            var loadPropertyOwners = function () {
                    propertyOwnerService.getPropertyOwners(refreshPropertyOwners);
                },
                refreshPropertyOwners = function(propertyOwners){
                    if(propertyOwners == null || Object.keys(propertyOwners).length==0){
                        $scope.propertyOwners = null;
                    }else{
                        $scope.propertyOwners = propertyOwners;
                    }
                    if($scope.firstTime)
                    {
                        $scope.$apply();
                        $scope.firstTime = false;
                    }
                }

        $scope.deletePropertyOwner = function (propertyOwner) {
            propertyOwnerService.removePropertyOwner(propertyOwner);
        }
                $scope.setup();
    }]);

angular.module('Administrator')
    .controller('administrator.property', ['$scope', 'propertyOwnerService', function($scope, propertyService){
        $scope.setup = function () {
            $scope.propertyEditing = {};
        };

        $scope.addNewProperty = function () {
            propertyService.addProperty($scope.propertyOwnerEditing, $scope.propertyEditing, onPropertyUpdated);
        };

        var onPropertyUpdated = function () {
            $scope.propertySaved = true;
            $scope.propertyEditing = {id: null};
            $scope.$apply();
        }
    }]);