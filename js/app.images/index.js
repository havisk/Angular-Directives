import angular from 'angular';
import '../app.core/index';
import  ImageAddController from './controllers/imageAdd.controller';
import ImageService from './services/image.service';


angular
  .module('app.images', ['app.core'])
  .controller('ImageAddController', ImageAddController)
  .service('ImageService', ImageService)

  ;