let config = function($stateProvider, $urlRouterProvider, $locationProvider, APP) {

  let cache_version = '?v' + APP.VERSION;

  $stateProvider

    // Layout & Home States
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html' + cache_version,
      controller: 'LayoutController as vm'
    })
    .state('root.landing', {
      url: '/',
      templateUrl: 'templates/app-layout/landing.tpl.html' + cache_version,
      controller: 'HomeController as vm'
    })
    .state('root.start', {
      url: '/start',
      templateUrl: 'templates/app-layout/start.tpl.html' + cache_version,
      controller: 'HomeController as vm'
    })

    // Submission
    .state('root.submit', {
      url: '/submit',
      templateUrl: 'templates/app-layout/submit.tpl.html' + cache_version
    })

    // User States
    .state('root.login', {
      url: '/login?c',
      templateUrl: 'templates/app-user/login.tpl.html' + cache_version,
      controller: 'AuthController as vm'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/app-user/register.tpl.html' + cache_version,
      controller: 'AuthController as vm'
    })
    .state('root.profile', {
      url: '/profile?c',
      templateUrl: 'templates/app-user/profile.tpl.html' + cache_version,
      controller: 'ProfileController as vm'
    })

    // Add States
    .state('root.addItem', {
      url: '/:type/add',
      templateUrl: function (params) {
        return 'templates/app-search/add/add-' + params.type + '.tpl.html' + cache_version;
      },
      controller: 'ItemAddController as vm'
    })

    // Search & Listing States
    .state('root.all', {
      url: '/all/:type?page',
      templateUrl: function (params) {
        return 'templates/app-search/listings/' + params.type + '.tpl.html' + cache_version;
      },
      controller: 'ListingController as vm'
    })
    .state('root.search', {
      url: '/search?q',
      templateUrl: 'templates/app-search/search.tpl.html' + cache_version,
      controller: 'SearchController as vm'
    })
    .state('root.item', {
      url: '/:type/:id',
      templateUrl: function (params) {
        return 'templates/app-search/types/single-' + params.type + '.tpl.html' + cache_version;
      },
      controller: 'ItemController as vm'
    })

    // Edit States
    .state('root.editBrand', {
      url: '/:type/edit/:id',
      templateUrl: function (params) {
        return 'templates/app-search/edit/edit-' + params.type + '.tpl.html' + cache_version;
      },
      controller: 'ItemEditController as vm'
    })


  ; // End $stateProvider

  // Route home if a state from above does not match the one attempted
  $urlRouterProvider.otherwise('/');

  // Use HTML5 Mode if not on localhost
  if (window.location.href.indexOf("localhost") < 0) {
    $locationProvider.html5Mode(true);
  }



};

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'APP'];

export default config;
