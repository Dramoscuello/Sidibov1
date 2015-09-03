'use strict';

describe('Controller: EvaluacionCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var EvaluacionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EvaluacionCtrl = $controller('EvaluacionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EvaluacionCtrl.awesomeThings.length).toBe(3);
  });
});
