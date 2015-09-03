'use strict';

describe('Controller: TematicaCtrl', function () {

  // load the controller's module
  beforeEach(module('sidibov1App'));

  var TematicaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TematicaCtrl = $controller('TematicaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TematicaCtrl.awesomeThings.length).toBe(3);
  });
});
