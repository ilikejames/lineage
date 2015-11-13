/**
 * [ClassProperySearchController controller for the ClassPropertySearch web component]
 * @param {[type]} $scope                [description]
 * @param {[type]} ClassHierarchyService [description
*/
export default function ClassProperySearchController($scope, ClassHierarchyService) {

	'use strict';

	var self=this;

	this.hierarchy = {};
	this.property = $scope.property;

	$scope.$watch(() => this.property, function (newval) {
		self.hierarchy = ClassHierarchyService.find(newval, angular, 'angular');
	});
}
