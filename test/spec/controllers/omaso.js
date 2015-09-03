'use strict';

describe('Controller: OmasoCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var OmasoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OmasoCtrl = $controller('OmasoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OmasoCtrl.awesomeThings.length).toBe(3);
  });
});
