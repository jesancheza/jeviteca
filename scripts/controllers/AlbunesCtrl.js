
angular
    .module("jeviteca")
    .controller("AlbunesCtrl", ["$scope", "Albums", function( $scope, Albums ) {

        $scope.albums = Albums.data;

    }]);