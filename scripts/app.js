angular
  .module('productsApp', [
    'ngAnimate',
    'ui.router',
    'ui.router.router'
  ])
    .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    '': { templateUrl: './views/main.html' },
                    'nav@home': { templateUrl: './views/nav.html' },
                    'body@home': { templateUrl: './views/body.html' },
                    'footer@home': {templateUrl: './views/footer.html'}
                },
                controller: 'MainCtrl'

            })
            .state('home.menupage1', {
                url: 'menupage1',
                templateUrl: './views/menupage1/menupage1.html',
                controller: 'MenuPage1Ctrl'
            })
            .state('home.menupage1.submenu1', {
                url: '/submenu1',
                templateUrl: './views/menupage1/menupage1.submenu1.html',
            })
            .state('home.menupage1.submenu2', {
                url: '/submenu2',
                templateUrl: './views/menupage1/menupage1.submenu2.html',
            })
            .state('home.menupage2', {
                url: 'menupage2',
                templateUrl: './views/menupage2/menupage2.html',
                controller: 'MenuPage2Ctrl'
            })

    }]);


  //.config(function ($routeProvider) {
  //  $routeProvider
  //    .when('/products', {
  //      templateUrl: 'views/main.html',
  //      controller: 'MainCtrl'
  //    })
  //    .when('/products/:productId', {
  //  	  templateUrl: 'views/product.html',
  //  	  controller: 'ProductCtrl'
  //    })
  //    .when('/chart', {
  //  	  templateUrl: 'views/chart.html',
  //  	  controller: 'ChartCtrl'
  //    })
  //    .otherwise({
  //      redirectTo: '/'
  //    });
  //});