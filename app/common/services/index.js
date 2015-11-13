
import angular from 'angular';

import ClassHierarchyService from './ClassHierarchyService.js';

(function() {

	'use strict';

	angular.module('common.services', [])

	.service('ClassHierarchyService', [ ClassHierarchyService ]);

})();

