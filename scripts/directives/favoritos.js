
angular
    .module("jeviteca")
    .directive("favoritos", function(){
        return{
            restrict: "EA",
            replace: true,
            scope: {
                id: "=",
                section: "@"
            },
            templateUrl: "views/Favoritos.html",
            link: function(scope){

                scope.esFavorito = function() {
                    var favorito = localStorage.getItem(scope.section+"_"+ scope.id);
                    return favorito === "true";
                };

                scope.hacerFavorito = function(){
                    localStorage.setItem(scope.section + "_" + scope.id, "true");
                };

                scope.quitarFavorito = function(){
                    localStorage.removeItem(scope.section + "_" + scope.id);
                };

                scope.soportaLocalStorage = function(){
                    if (typeof(Storage) !== "undefined") {
                        return true;
                    }else{
                        return false;
                    }
                };
            }
        };
    });