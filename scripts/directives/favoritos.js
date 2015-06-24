
angular
    .module("jeviteca")
    .directive("favoritos", function(){
        return{
            restrict: "EA",
            replace: true,
            scope: {
                idPelicula: "="
            },
            templateUrl: "views/Favoritos.html",
            link: function(scope){

                scope.esFavorito = function() {
                    var favorito = localStorage.getItem("album"+ scope.id);
                    return favorito === "true";
                };

                scope.hacerFavorito = function(){
                    localStorage.setItem("album"+ scope.id, "true");
                };

                scope.quitarFavorito = function(){
                    localStorage.removeItem("album"+ scope.id);
                };
            }
        };
    });