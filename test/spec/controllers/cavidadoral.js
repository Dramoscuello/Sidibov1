'use strict';

describe('Controller: CavidadoralCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var CavidadoralCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CavidadoralCtrl = $controller('CavidadoralCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CavidadoralCtrl.awesomeThings.length).toBe(3);
  });
});
