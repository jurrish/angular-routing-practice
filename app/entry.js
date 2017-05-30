'use strict';

//order is important!
//require scss
//non angular npm modules
//angular
//require in 3rd party angular modules
//create app module

const path = require('path');
const pascalcase = require('pascalcase');
const camelcase = require('camelcase');

const angular = require('angular');

//this might be renamed as (redo npm install) ui-router!
const uiRouter = require('angular-ui-router');
const slugram = angular.module('slugram', [uiRouter]);

//in the config directory, we are putting our configs for our services. aka routes, etc.
//gives us context object that has all the information of every file in the config directory. true = go through the directory recursively
//context(key) gives us an array, and we go through those configs and assign them to slugram
//give me an array of every module in a directory, loop over all of those modules, then add them to slugram
let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  slugram.config(context(key));
});

//load all view controllers in .view/
context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  //this injects our exported controller and mounts it to slugram
  slugram.controller(name, context(key));
});

//load all the services
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
