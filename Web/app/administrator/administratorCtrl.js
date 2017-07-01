'use strict';

angular.module('Administrator', ['ngRoute', 'firebase'])
    .controller('registerCtrl', ['$scope', '$firebaseAuth', '$location', function($scope, $firebaseAuth, $location){
        $scope.signUp = function(){
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
        }
    }]);