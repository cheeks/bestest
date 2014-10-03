
var angular = require('angular');

var FavoritesCtrl = require('./controllers/FavoritesCtrl');

var app = angular.module('bestest', []);

app.controller('FavoritesCtrl', ['$scope', FavoritesCtrl]);
