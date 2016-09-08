(function() {
  'use strict';

  angular
    .module('kreoGulp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {

    var container = angular.element(document.getElementById('container'));
     var section2 = angular.element(document.getElementById('section-2'));
     $scope.toTheTop = function() {
       container.scrollTop(0, 5000);
     }
     $scope.toSection2 = function() {
       container.scrollTo(section2, 0, 1000);
     }

     $scope.workItems = [
       {
         "title": "BMW Tunnel",
         "subtitle": "Installation",
         "img": "assets/images/portfolio/underwater.jpg"
       },
       {
         "title": "SAB Kickstart Wall",
         "subtitle": "Installation",
         "img": "assets/images/portfolio/underwater.jpg"
       },
       {
         "title": "BMW Tunnel",
         "subtitle": "Installation",
         "img": "assets/images/portfolio/underwater.jpg"
       },
       {
         "title": "SAB Kickstart Wall",
         "subtitle": "Installation",
         "img": "assets/images/portfolio/underwater.jpg"
       },
       {
         "title": "BMW Tunnel",
         "subtitle": "Installation",
         "img": "assets/images/portfolio/underwater.jpg"
       },
       {
         "title": "SAB Kickstart Wall",
         "subtitle": "Installation",
         "img": "assets/images/portfolio/underwater.jpg"
       }
     ];


  }
})();
