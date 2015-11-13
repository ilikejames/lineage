
import Controller from './controller.js';


(function() {
	
	describe('ClassPropertySearch.controller', function() {

		var classHierarchyService = {
				find : {} 
			},
			$scope;

		beforeEach(inject(function(_$rootScope_) {
			$scope = _$rootScope_;
		}));


		it('It should watch for changes to the property attribute and perform a search', function() {

			$scope.property = 'prop1';
			spyOn(classHierarchyService, 'find').and.returnValue({ name : 'prop1', children : []});

			var controller = new Controller($scope,classHierarchyService);

			$scope.$digest();

			expect(classHierarchyService.find).toHaveBeenCalled();
			expect(controller.hierarchy).toEqual( { name : 'prop1', children : [] });

		});

	});


})();
