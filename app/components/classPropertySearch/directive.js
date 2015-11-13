
import controller from './controller.js';

/**
 * [ClassProperySearchDirective description]
 * @param {[type]} ClassHierarchyService [description]
 */
export default function ClassProperySearchDirective(ClassHierarchyService) {

	'use strict';

	return {

		restrict : 'E',
		
		scope : {
			'property' : '@'
		},
		
		templateUrl : 'components/classPropertySearch/template.htm',

		controller : ['$scope', 'ClassHierarchyService', controller],

		controllerAs : 'classPropertySearch'

	};
}