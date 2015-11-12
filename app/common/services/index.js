
import angular from 'angular';

import ClassHierarchy from './ClassHierarchy.js';

(function() {

	'use strict';

	angular.module('common.services', [])

	.service('ClassHierarchy', [ ClassHierarchy ]);

})();

