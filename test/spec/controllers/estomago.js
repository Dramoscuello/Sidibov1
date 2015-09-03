'use strict';

describe('Controller: EstomagoCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var EstomagoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EstomagoCtrl = $controller('EstomagoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EstomagoCtrl.awesomeThings.length).toBe(3);
  });
});
