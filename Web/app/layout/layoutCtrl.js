'use strict';

angular.module('Layout')
    .controller('layoutCtrl', ['$scope', 'authenticationService',
        function ($scope, authenticationService) {
            $scope.authenticationService = authenticationService;
            $scope.$watch('authenticationService.isAuthenticated()', function(newVal) {
                $scope.isAuthenticated = newVal;
                $scope.username = authenticationService.getCurrentUsername();
            });
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