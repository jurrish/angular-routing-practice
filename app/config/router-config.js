'use strict';

//state provider are functions that config services
//state provider is a function that configs our services by our ui-view
module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

//dont need to add controller because they get mounted by our context loops in the entry
function routerConfig($stateProvider, $urlRouterProvider){
  let routes = [
    {
      name:'home',
      url: '/home',
      template: require('../view/home/home.html'),
      //context handles this mounting/injecting of the controller for us! notice the pascal-casing of "HomeController"
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
    },
    {
      name:'signup',
      url: '/signup',
      template: require('../view/signup/signup.html'),
      //context handles this mounting/injecting of the controller for us! notice the pascal-casing of "HomeController"
      controller: 'SignupController',
      controllerAs: 'signupCtrl',
    }
  ];
  //for each route, we add the route's state to the routes array itself.
  routes.forEach(route => {
    $stateProvider.state(route);
  });
}


//--- file structure -----
//view
  //home
    //home.html
    //home.js
    //home.scss
  //profile
    //profile.html
    //profile.js
    //profile.scss
