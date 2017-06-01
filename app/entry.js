'use strict';

// order is important!
// require scss
// non angular npm modules
// angular
// require in 3rd party angular modules
// create app module

const path = require('path');
const pascalcase = require('pascalcase');
const camelcase = require('camelcase');

// const angular = require('angular');

//this might be renamed as (redo npm install) ui-router!
require('@uirouter/angularjs');

const slugram = angular.module('slugram', ['ui.router']);

//in the config directory, we are putting our configs for our services. aka routes, etc.
//gives us context object that has all the information of every file in the config directory. true = go through the directory recursively
//context(key) gives us an array, and we go through those configs and assign them to slugram
//give me an array of every module in a directory, loop over all of those modules, then add them to slugram
let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  console.log(context(key), ' context(key)');
  slugram.config(context(key));
});
// slugram.config(function($stateProvider){
//   let home = {
//     name: 'home',
//     url: '/home',
//     template: require('../view/home/home.html')
//   };
//   $stateProvider.state(home);
// });


//load all view controllers in .view/
context = require.context('../view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  //this injects our exported controller and mounts it to slugram
  slugram.controller(name, context(key));
});

// load all the services
// context = require.context('./service/', true, /\.js$/);
// context.keys().forEach(key => {
//   let name = camelcase(path.basename(key, '.js'));
//   //this injects our exported service(s) and mounts it to slugram
//   slugram.service(name, context(key));
// });
//
// //load all the components
// context = require.context('./component/', true, /\.js$/);
// context.keys().forEach(key => {
//   let name = camelcase(path.basename(key, '.js'));
//   //this injects our exported component and mounts it to slugram
//   console.log('loading component =>', name);
//   slugram.component(name, context(key));
// });

//------------example---------------- DONT UNCOMMENT
// let context = require.context('./view', true, /\.js$/);
// context.keys().forEach(key => {
//   let fileName = path.basename(key, '.js');
//   demoApp.component(fileName, context(key));
// });



// const angular = require('angular');
//
// require('@uirouter/angularjs');
//
// angular.module('slugram', ['ui.router'])
// .config([
//   '$stateProvider',
//   '$urlRouterProvider',
//   function($stateProvider, $urlRouterProvider){
//     $urlRouterProvider.when('', '/home');
//     let routes = [
//       {
//         name:'landing',
//         url: '/',
//         template: '<h1> landing </h1>'
//       },
//       {
//         name: 'home',
//         url: '/home',
//         template: require('../view/signup/signup.html'),
//       },
//     ];
//     routes.forEach($stateProvider.state);
//   }
// ]);
