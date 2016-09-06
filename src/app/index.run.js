(function() {
  'use strict';

  angular
    .module('kreoGulp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
