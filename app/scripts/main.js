(function () {
  // google api key AIzaSyC9sCcEL-7LIq3oTpPnfg-RtvqHBtAYSC0

  'use strict';

  var angular = require('angular');

  var FavoritesController = require('./controllers/FavoritesController');


  var app = angular.module('bestest', []);
  app.controller('FavoritesController', ['$scope', FavoritesController]);

})();
