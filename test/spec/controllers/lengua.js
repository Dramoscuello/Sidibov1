'use strict';

describe('Controller: LenguaCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var LenguaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LenguaCtrl = $controller('LenguaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LenguaCtrl.awesomeThings.length).toBe(3);
  });
});
