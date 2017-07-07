'use strict';

angular.module('Administrator')
    .controller('administrator.new', ['$scope', 'propertyOwnerService', function($scope, propertyOwnerService){
        $scope.setup = function () {
            $scope.newRegister = {
                email: null,
                password: null};
            $scope.propertyOwnerEditing={id:null, email: null};
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
            $scope.$apply();
        }

        /*$scope.signUp = function(){
            var username = $scope.user.email;
            var password = $scope.user.password;

            if(username && password){
                var auth = $firebaseAuth();
                auth.$createUserWithEmailAndPassword(username, password).then(function(){
                    console.log("User Successfully Created");
                    $location.path('/login');
                }).catch(function(error){
                    $scope.errMsg = true;
                    $scope.errorMessage = error.message;
                });
            }
        }*/

        $scope.setup();
    }]);


