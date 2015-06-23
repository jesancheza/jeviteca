// Setter del módulo.
angular.module( "jeviteca", ["ngRoute", "route-segment", "view-segment"] );

angular
    .module("jeviteca")
    .config(["$routeSegmentProvider", "$routeProvider", function( $routeSegmentProvider, $routeProvider ) {

        $routeSegmentProvider.when( "/albunes", "albunes" );
        $routeSegmentProvider.when( "/bandas", "bandas" );
        $routeSegmentProvider.when( "/generos", "generos" );

        $routeSegmentProvider.segment( "albunes", {
            controller: "AlbunesCtrl",
            templateUrl: "views/Albunes.html",
        });

        $routeProvider.otherwise({
            redirectTo: "/albunes"
        });

    }]);