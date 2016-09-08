(function() {
  'use strict';

  angular
    .module('kreoGulp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, $log) {

    var container = angular.element(document.getElementById('container'));
     var section2 = angular.element(document.getElementById('section-2'));
     $scope.toTheTop = function() {
       container.scrollTop(0, 5000);
     }
     $scope.toSection2 = function() {
       container.scrollTo(section2, 0, 1000);
     }

     $http.get("app/data/work.json").then(function(json) {
       $log.debug(json);
       $scope.workItems = json.data;
     });

  }
})();
