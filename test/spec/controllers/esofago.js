'use strict';

describe('Controller: EsofagoCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var EsofagoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EsofagoCtrl = $controller('EsofagoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EsofagoCtrl.awesomeThings.length).toBe(3);
  });
});
