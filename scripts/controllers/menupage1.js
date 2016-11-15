angular.module('productsApp')
  .controller('MenuPage1Ctrl', function ($rootScope, $scope, $state) {
      console.log("state name = " + $state.current.name);
      $scope.$state = $state;
      $rootScope.$state = $state;
  });