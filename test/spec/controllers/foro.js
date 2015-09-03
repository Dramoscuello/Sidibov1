'use strict';

describe('Controller: ForoCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var ForoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForoCtrl = $controller('ForoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForoCtrl.awesomeThings.length).toBe(3);
  });
});
