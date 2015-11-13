/*
 * @example
 *  <class-property-search property="$scope">
 */

import angular from 'angular';

import ClassHierarchySearch from './directive.js';

(function() {

	'use strict';

	angular.module('components.classPropertySearch', ['common.services'])

	.directive('classPropertySearch', ['ClassHierarchyService', ClassHierarchySearch]);

})();
