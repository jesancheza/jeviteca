
angular
    .module("jeviteca")
    .service("BandsProvider", function($http){

        this.getBands = function(){
            return $http.get("data/bands.json");
        };
    });