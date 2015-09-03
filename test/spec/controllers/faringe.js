'use strict';

describe('Controller: FaringeCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var FaringeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FaringeCtrl = $controller('FaringeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FaringeCtrl.awesomeThings.length).toBe(3);
  });
});
