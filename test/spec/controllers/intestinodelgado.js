'use strict';

describe('Controller: IntestinodelgadoCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var IntestinodelgadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IntestinodelgadoCtrl = $controller('IntestinodelgadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IntestinodelgadoCtrl.awesomeThings.length).toBe(3);
  });
});
