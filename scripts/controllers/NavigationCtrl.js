
angular
    .module("jeviteca")
    .controller("NavigationCtrl", ["$scope", "$routeSegment", function( $scope, $routeSegment ) {

        $scope.rutaEsAlbunes = function() {
            return $routeSegment.startsWith( "albunes" );
        };

        $scope.rutaEsBandas = function() {
            return $routeSegment.startsWith( "bandas" );
        };

        $scope.rutaEsGeneros = function() {
            return $routeSegment.startsWith( "generos" );
        };

    }]);