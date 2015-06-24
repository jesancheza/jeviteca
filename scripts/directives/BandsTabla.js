
angular
    .module("jeviteca")
    .directive("bandsTabla", function(){
        return {
            restrict: "AE",
            templateUrl: "views/BandsTabla.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function( scope ) {

            }
        };
    });