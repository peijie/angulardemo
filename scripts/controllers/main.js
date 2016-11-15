angular.module('productsApp')
  .controller('MainCtrl', function ($scope, $state) {
      this.state = $state;
  });