
angular
    .module("jeviteca")
    .service("AlbumsProvider",["$http", "$q", "$filter", function($http, $q, $filter){

        this.getAlbums = function(){
            return $http.get("data/albums.json");
        };

        this.getAlbum = function($id_album){

            var deferred = $q.defer()
            $http.get("data/albums.json").then(
                function(data){
                    var album = $filter("filter")(data.data, {"id": $id_album})[0];

                    deferred.resolve(album);
                },
                function(){
                    deferred.reject("Error! Couldn't get Album data.")
                }
            );

            return deferred.promise;
        };
    }]);