'use strict';

angular.module('kreoGulp')
.directive('modal', function() {
  return {
    restrict: 'AE',
    templateUrl: 'app/components/modal-popup.html',
    replace: true,
    transclude: true,
    scope:{
      modalShow:'=',
      item:'='
    },
    link: function postLink(scope, element, attrs){

      scope.$watch('item', function(newVal, oldVal){
        // console.log(newVal, oldVal);
        console.log(scope.item);
      });
    }
  };
});
