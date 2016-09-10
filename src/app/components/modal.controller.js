angular.module('kreoGulp').controller('ModalInstanceCtrl', function ($uibModalInstance, item) {
  var $ctrl = this;
  $ctrl.items = item;

  $ctrl.ok = function () {
    $uibModalInstance.close();
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
