'use strict';

describe('Controller: IntroduccionCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var IntroduccionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IntroduccionCtrl = $controller('IntroduccionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IntroduccionCtrl.awesomeThings.length).toBe(3);
  });
});
