
angular
    .module("jeviteca")
    .controller("AlbumDetalleCtrl", ["$scope","Album", function($scope, Album){
        $scope.album = Album;
    }]);