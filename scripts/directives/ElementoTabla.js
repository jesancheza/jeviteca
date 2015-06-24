
angular
    .module("jeviteca")
    .directive("elementoTabla", function(){
        return {
            restrict: "AE",
            templateUrl: "views/ElementoTabla.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function( scope ) {

            }
        };
    });