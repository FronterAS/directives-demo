var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.name = 'Gavin';
});

app.directive('gavin', function () {
    return {
        restrict: 'E',
        template: '<div>{{name}}</div>'
    };
});
