
angular
    .module("jeviteca")
    .directive("favoritos", function(){
        return{
            restrict: "EA",
            replace: true,
            scope: {
                idAlbum: "="
            },
            templateUrl: "views/Favoritos.html",
            link: function(scope){

                scope.esFavorito = function() {
                    var favorito = localStorage.getItem("album_"+ scope.idAlbum);
                    return favorito === "true";
                };

                scope.hacerFavorito = function(){
                    localStorage.setItem("album_"+ scope.idAlbum, "true");
                };

                scope.quitarFavorito = function(){
                    localStorage.removeItem("album_"+ scope.idAlbum);
                };
            }
        };
    });