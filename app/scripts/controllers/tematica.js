'use strict';

/**
 * @ngdoc function
 * @name sidibov1App.controller:TematicaCtrl
 * @description
 * # TematicaCtrl
 * Controller of the sidibov1App
 */
angular.module('sidibov1App')
  .controller('TematicaCtrl', function ($scope) {
    $scope.content = [
        {titulo: "Introduccion", link: "#/tematica"},
        {titulo: "Cavidad oral", link: "#/tematica/cavidad_oral"},
        {titulo: "Dientes", link: "#/tematica/dientes"},
        {titulo: "Lengua", link: "#/tematica/lengua"},
        {titulo: "Glandulas salivales", link: "#/tematica/glandulas_salivales"},
        {titulo: "Faringe", link: "#/tematica/glandulas_salivales"},
        {titulo: "Esofago", link: "#/tematica/glandulas_salivales"},
        {titulo: "Estomago", link: "#/tematica/glandulas_salivales"},
        {titulo: "Reticulo y rumen", link: "#/tematica/glandulas_salivales"},
        {titulo: "Omaso", link: "#/tematica/glandulas_salivales"},
        {titulo: "Abomaso", link: "#/tematica/glandulas_salivales"},
        {titulo: "Evaluacion", link: "#/tematica/glandulas_salivales"}
    ]
  });
