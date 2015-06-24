
angular
    .module("jeviteca")
    .directive("genresTabla", function(){
        return {
            restrict: "AE",
            templateUrl: "views/GenresTabla.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function( scope ) {

            }
        };
    });
