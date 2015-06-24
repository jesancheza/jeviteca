
angular
    .module("jeviteca")
    .service("GenresProvider", function($http){

        this.getGenres = function(){
            return $http.get("data/genres.json");
        };
    });