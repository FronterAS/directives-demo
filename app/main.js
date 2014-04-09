var app = angular.module('myApp', []);

app.controller('Controller', function($scope) {
    $scope.name = 'Gavin';
});

app.directive('gavin', function () {
    return {
        restrict: 'E',
        template: '<div>Gavin</div>'
    };
});
