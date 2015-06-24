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
            resolve: {
                Albums: ["AlbumsProvider", function(AlbumsProvider) {
                    return AlbumsProvider.getAlbums();
                }]
            }
        });

        $routeSegmentProvider.segment( "bandas", {
            controller: "BandasCtrl",
            templateUrl: "views/Bandas.html",
            resolve: {
             Bands: ["BandsProvider", function(BandsProvider) {
                return BandsProvider.getBands();
             }]
             }
        });

        $routeSegmentProvider.segment( "generos", {
            controller: "GenerosCtrl",
            templateUrl: "views/Generos.html",
            /*resolve: {
             Peliculas: ["ApiService", function(ApiService) {
             return ApiService.obtenerDatos("movie/upcoming");
             }]
             }*/
        });

        $routeProvider.otherwise({
            redirectTo: "/albunes"
        });

    }]);