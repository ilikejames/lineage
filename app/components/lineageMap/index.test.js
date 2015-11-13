

(function() {
	
	describe('LineageMap directive', function() {

		var $compile,
			$rootScope;

		beforeEach(angular.mock.module('app'));
		beforeEach(angular.mock.module('components.lineageMap'));

		beforeEach(inject(function(_$compile_, _$rootScope_){
			$compile = _$compile_;
			$rootScope = _$rootScope_;
		}));


		it('It should load the directive', function() {

			var $scope = $rootScope.$new();
			$scope.hierarchy = {
				name : 'prop1',
				children : [
					{name : 'child1'}
				]
			}

			var element = $compile('<lineage-map hierarchy="hierarchy"></lineage-map>')($scope);
			$scope.$digest();

			// TODO: more tests.
			expect(element.find('svg').length).toEqual(1);

		});

	});


})();
