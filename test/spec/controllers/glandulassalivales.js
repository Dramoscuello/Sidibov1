'use strict';

describe('Controller: GlandulassalivalesCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var GlandulassalivalesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GlandulassalivalesCtrl = $controller('GlandulassalivalesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GlandulassalivalesCtrl.awesomeThings.length).toBe(3);
  });
});
