'use strict';

describe('Controller: EnfermedadesCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var EnfermedadesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnfermedadesCtrl = $controller('EnfermedadesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EnfermedadesCtrl.awesomeThings.length).toBe(3);
  });
});
