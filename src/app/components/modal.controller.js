angular.module('kreoGulp').controller('ModalInstanceCtrl', function ($uibModalInstance, item, $sce) {
  var $ctrl = this;
  $ctrl.item = item;

  console.log('item for this modal:', $ctrl.item);

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
