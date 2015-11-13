
import d3 from 'd3/d3.js';
import TreeMap from './TreeMap.js';


export default function LineageMap() {

	'use strict';

	return {

		restrict : 'E',
		
		scope : {
			'hierarchy' : '='
		},
		
		template : function() {
			return '<div></div>';
		},

		link : function(scope, element, attributes) {

			var treeMap = new TreeMap(element[0], scope.hierarchy);

			scope.$watch('hierarchy', function(newVal) {
				
				if(newVal && newVal.children.length) {
					treeMap.setData(newVal);
				}
			});

		}
	};
}