// Setter del módulo.
angular.module( "jeviteca", ["ngRoute", "route-segment", "view-segment"] );

angular
    .module("jeviteca")
    .config(["$routeSegmentProvider", "$routeProvider", function( $routeSegmentProvider, $routeProvider ) {

        $routeSegmentProvider.when( "/albunes", "albunes" );
        $routeSegmentProvider.when( "/bandas", "bandas" );
        $routeSegmentProvider.when( "/generos", "generos" )
        $routeSegmentProvider.when( "/albunes/:id/detalle", "albunes_detail")

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
            resolve: {
             Genres: ["GenresProvider", function(GenresProvider) {
                return GenresProvider.getGenres();
             }]
             }
        });

        $routeSegmentProvider.segment( "albunes_detail", {
            controller: "AlbumDetalleCtrl",
            templateUrl: "views/albumDetalle.html",
            resolve: {
                Album: ["AlbumsProvider", "$routeParams", function(AlbumsProvider, $routeParams){
                    return AlbumsProvider.getAlbum($routeParams.id);
                }]
            }
        });

        $routeProvider.otherwise({
            redirectTo: "/albunes"
        });

    }]);