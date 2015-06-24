
angular
    .module("jeviteca")
    .controller("GenerosCtrl", ["$scope", "Genres", function($scope, Genres){
        $scope.genres = Genres.data;
    }]);