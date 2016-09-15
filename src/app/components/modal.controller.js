angular.module('kreoGulp').controller('ModalInstanceCtrl', function ($uibModalInstance, item, $sce) {
  var $ctrl = this;
  $ctrl.item = item;

  console.log('item for this modal:', $ctrl.item);
  var fakePath ='/'+$ctrl.item.title.replace(/ /g, '-');
  console.log('fakePath for analytics pagevew:', fakePath);
  ga('send', 'pageview', fakePath);

  $ctrl.ok = function () {
    $uibModalInstance.close();
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $ctrl.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }


});
