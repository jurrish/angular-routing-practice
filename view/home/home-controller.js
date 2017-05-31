'use strict';

//require home sass
// require('./home.scss');


module.exports = ['$log', HomeController];

function HomeController($log){
  $log.debug('init homeCtrl');
  this.$onInit = () => {
    this.title = 'title inside of homeCtrl';
  };
}
