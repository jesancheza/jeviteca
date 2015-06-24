
angular
    .module("jeviteca")
    .controller("BandasCtrl", ["$scope", "Bands", function($scope, Bands){
        $scope.bands = Bands.data;
    }]);