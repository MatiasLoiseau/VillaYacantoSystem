'use strict';

angular.module('Administrator')
    .controller('administrator.new', ['$scope', function($scope){
        $scope.setup = function () {
            $scope.newRegister = {
                email: null,
                password: null};
            $scope.propertyOwnerEditing={id:null, email: null};
            console.log($scope.propertyOwnerEditing);
        }
        $scope.signUp = function(){
            var email = $scope.newRegister.email;
            var password = $scope.newRegister.password;
            $scope.propertyOwnerEditing.email = email;

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
            }
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


