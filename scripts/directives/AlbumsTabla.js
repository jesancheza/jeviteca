
angular
    .module("jeviteca")
    .directive("albumsTabla", function(){
        return {
            restrict: "AE",
            templateUrl: "views/AlbumsTabla.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function( scope ) {

            }
        };
    });