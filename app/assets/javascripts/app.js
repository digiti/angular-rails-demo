app = angular.module('demoapp',[
  'templates',
  'ngRoute',
  'controllers',
])

app.config([ '$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'ArticlesController'
      })
  }
])

controllers = angular.module('controllers', [])
