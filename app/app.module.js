
import angular from 'angular';
import router from 'angular-ui-router/release/angular-ui-router.js';

import 'common/services';
import 'components';

(function () {

	'use strict';

	angular.module('app', ['components', 'common.services', 'ui.router'])

	.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise("/$$ChildScope");

		$stateProvider
		.state('home', {
			url: '/',
			template : '<class-property-search property="$$ChildScope">'
		})
		.state('search', {
			url : '/:search', 
			template : function(params) {
				return `<class-property-search property="${params.search}">`;
			}
		});

	}]);

})();


