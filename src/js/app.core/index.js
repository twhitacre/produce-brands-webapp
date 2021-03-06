import angular from 'angular';
import 'angular-ui-router';
import 'angular-flash-alert';
import 'angular-loading-bar';
import 'angular-animate';
import config from './config';

// Services
import MessageService from './services/message.service';

// Filters
import UnderscoreCapFilter from './filters/underscorecap.filter';
import MomentFilter from './filters/moment.filter';
import AddHTTPFilter from './filters/addHTTP.filter';
import CapitalizeFilter from './filters/capitalize.filter';

// Import Constants
import APP from './constants/app.constant';

// Directives
import VerifySrcDirective from './directives/verify-src.directive';
import NutritionDirective from './directives/nutrition.directive';

angular
  .module('app.core', ['ui.router', 'flash', 'angular-loading-bar'])
  .config(config)
  .constant('APP', APP)
  .service('MessageService', MessageService)
  .filter('moment', MomentFilter)
  .filter('underscoreCap', UnderscoreCapFilter)
  .filter('addHTTP', AddHTTPFilter)
  .filter('capitalize', CapitalizeFilter)
  .directive('verifySrc', VerifySrcDirective)
  .directive('nutritionLabel', NutritionDirective)
;
