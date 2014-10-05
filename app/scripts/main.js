(function () {
  // google api key AIzaSyC9sCcEL-7LIq3oTpPnfg-RtvqHBtAYSC0

  'use strict';

  var angular = require('angular');

  var FavoritesCtrl = require('./controllers/FavoritesCtrl');


  var app = angular.module('bestest', []);
  app.controller('FavoritesCtrl', ['$scope', FavoritesCtrl]);

})();
