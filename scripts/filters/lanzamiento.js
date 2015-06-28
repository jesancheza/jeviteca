
angular
    .module("jeviteca")
    .filter("lanzamiento", function(){

        return function($year){

            return "Fecha de lanzamiento: " + $year;

        }
    });