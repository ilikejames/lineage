
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

		controller : controller,

		controllerAs : 'classPropertySearch'

	};
}