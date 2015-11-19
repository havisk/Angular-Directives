import angular from 'angular';
import '../app.core/index';
import HomeController from './controllers/home.controller';
import CollectionService from './services/collection.service';
import imgKool from './directives/image.directive';



angular
  .module('app.layout', ['app.core'])
  .controller('HomeController', HomeController)
  .service('CollectionService', CollectionService)
  .directive('imgKool', imgKool)

  ;