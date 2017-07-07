'use strict';

angular.module('Layout')
    .controller('layoutCtrl', ['$scope', 'authenticationService', 'propertyOwnerService', 'scopedTimeout',
        function ($scope, authenticationService, propertyOwnerService, scopedTimeout) {
            $scope.authenticationService = authenticationService;
            $scope.$watch('authenticationService.isAuthenticated()', function(newVal) {
                $scope.isAuthenticated = newVal;
                $scope.username = authenticationService.getCurrentUsername();
            });

            $scope.setup = function () {
                scopedTimeout($scope).timeout(function () {
                    loadPropertyOwners();
                    $scope.showContent();
                })
            }

            $scope.showContent = function () {
                console.log($scope.username + " algo");
                if($scope.username!=null && $scope.username!= undefined){
                    $scope.isAdmin = false;
                    console.log($scope.username);
                    if( $scope.username=="admin@yacanto.com"){
                        console.log("Entre");
                        $scope.isAdmin = true;
                    }
                }
                console.log($scope.isAdmin);
            }


            var loadPropertyOwners = function () {
                    propertyOwnerService.getPropertyOwners(refreshPropertyOwners);
                },
                refreshPropertyOwners = function(propertyOwners){
                    if(propertyOwners == null || Object.keys(propertyOwners).length==0){
                        $scope.propertyOwnerList = null;
                    }else{
                        $scope.propertyOwnerList = propertyOwners;
                    }
                    if($scope.firstTime)
                    {
                        $scope.$apply();
                        $scope.firstTime = false;
                    }
                }

            $scope.setup();
        }
    ]);

angular.module('Layout')
    .controller('layout.header', ['$scope', '$controller',
        function ($scope, $controller) {
            $controller('layoutCtrl', { $scope: $scope });
        }
    ]);

angular.module('Layout')
    .controller('layout.footer', ['$scope', '$controller',
        function ($scope, $controller) {
            $controller('layoutCtrl', { $scope: $scope });
        }
    ]);

angular.module('Layout')
    .controller('homeCtrl', ['$scope',
        function ($scope) {
        }
    ]);