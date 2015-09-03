'use strict';

describe('Controller: ReticuloyrumenCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var ReticuloyrumenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReticuloyrumenCtrl = $controller('ReticuloyrumenCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReticuloyrumenCtrl.awesomeThings.length).toBe(3);
  });
});
