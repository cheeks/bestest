// 'use strict';
//
var FavoritesController = function ($scope) {
  this.places = myFavs;
  $scope.test = 'fart?';
};

var myFavs = [
  {
    name: 'Toronado',
    description: 'Beer bar. Good for day drinking.',
    address: '547 Haight St, San Francisco, CA 94117',
    phone: 4158632276,
    latitude: 0.420,
    longitude: -0.420,
    votes: 420,
    image: {
      thumb: 'images/places/toronado.thumb.jpg',
      full: ''
    }
  },
  {
    name: 'Amoeba',
    description: 'Music store. Good for buying music.',
    address: '1855 Haight St, San Francisco, CA 94117',
    phone: 4158311200,
    latitude: 0.420,
    longitude: -0.420,
    votes: 69,
    image: {
      thumb: 'images/places/amoeba.thumb.png',
      full: ''
    }
  }
];

module.exports = FavoritesController;
