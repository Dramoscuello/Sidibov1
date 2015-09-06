'use strict';

describe('Controller: IntestinogruesoCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var IntestinogruesoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IntestinogruesoCtrl = $controller('IntestinogruesoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IntestinogruesoCtrl.awesomeThings.length).toBe(3);
  });
});
