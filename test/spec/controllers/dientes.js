'use strict';

describe('Controller: DientesCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var DientesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DientesCtrl = $controller('DientesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DientesCtrl.awesomeThings.length).toBe(3);
  });
});
