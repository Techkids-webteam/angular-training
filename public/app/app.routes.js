angular.module('app.routes',['ngRoute'])
.config(function($routeProvider,$locationProvider) {
  $routeProvider
  .when('/',{
    templateUrl:'app/views/home.html'
  })
  .when('/questions',{
    templateUrl:'app/components/questions/view/all.html',
    controller:'questionController',
    controllerAs:'question'
  });
  $locationProvider.html5Mode(true);
});
