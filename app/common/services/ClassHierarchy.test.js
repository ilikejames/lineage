
import ClassHierarchy from './ClassHierarchy.js';


(function() {
	
	describe('ClassHierarchy', function() {

		var classHierarchy;

		beforeEach(inject(function() {
			classHierarchy = new ClassHierarchy();
		}));


		it('It should find the full path with the property name', function() {

			var data = {
				a : {
					a1 : {
						prop1 : {}
					},
					a2 : {
						prop1 : {}
					}
				},

				b : { prop1 : {} }
			};

			var found = classHierarchy.find('prop1',  data, 'object');

			/*
			prop1.a1.a
			prop1.a2.a
			prop1.b
			*/

			var expected = {
				name : 'prop1',
				children : [
					{
						name : 'a1',
						children : [
							{
								name : 'a',
								children : [
									{
										name : 'object'
									}
								]
							}
						]
					},
					{
						name : 'a2',
						children : [
							{
								name : 'a',
								children : [
									{
										name : 'object'
									}
								]
							}
						]
					},
					{
						name : 'b',
						children : [
							{
								name : 'object'
							}
						]
					}
				]
			};

			expect(found).toEqual(expected);

		});


	
	});


})();
