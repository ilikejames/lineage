
import angular from 'angular';

import LineageMapDirective from './directive.js';

(function() {

	'use strict';

	angular.module('components.lineageMap', ['common.services'])

	.directive('lineageMap', [LineageMapDirective]);

})();
