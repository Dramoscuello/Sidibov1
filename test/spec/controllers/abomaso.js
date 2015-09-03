'use strict';

describe('Controller: AbomasoCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var AbomasoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AbomasoCtrl = $controller('AbomasoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AbomasoCtrl.awesomeThings.length).toBe(3);
  });
});
