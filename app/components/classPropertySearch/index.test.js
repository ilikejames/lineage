

(function() {
	
	describe('ClassPropertySearch directive', function() {

		var $compile,
			$rootScope,
			$httpBackend,
			classHierarchyService;

		beforeEach(angular.mock.module('app'));
		beforeEach(angular.mock.module('components.classPropertySearch'));

		beforeEach(inject(function(_$compile_, _$rootScope_, _ClassHierarchyService_){
			$compile = _$compile_;
			$rootScope = _$rootScope_;
			classHierarchyService = _ClassHierarchyService_;
		}));


		it('It should load the ClassPropertySearch directive', function() {

			spyOn(classHierarchyService, 'find').and.returnValue({ name : 'prop1', children : [ { name : 'a' } ] });

			var element = $compile('<class-property-search property="prop1"></class-property-search>')($rootScope);
			$rootScope.$digest();

			expect(classHierarchyService.find).toHaveBeenCalled();
			expect(element.find('lineage-map')).toBeTruthy();

		});

	});


})();
