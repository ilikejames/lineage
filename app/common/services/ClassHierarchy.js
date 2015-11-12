/**
 * [ClassHierarchy description]
 */
export default function ClassHierarchy() {

	var cache = new WeakMap();

	function buildPath(parentId, obj, depth=0, maxDepth=4, memo={}) {

		if(['object', 'function'].indexOf(typeof obj)==-1) return memo;
		if(depth>maxDepth) return memo;

		for(var prop in obj) {

			var id = prop + '.' + parentId;

			if(!memo[prop]) {
				memo[prop] = [];
			}

			// why? incase of native methods on the Object e.g. toString.
			if(Array.isArray(memo[prop])) {
				memo[prop].push(parentId);
			}

			memo = buildPath(id, obj[prop], depth+1, maxDepth, memo);
		}
		return memo;
	}

	this.find = function(name, rootClass=window, rootName='window') {

		var hierarchy = cache.get({ id : rootName });
		if(!hierarchy) {
			hierarchy = buildPath(rootName, rootClass);
			cache.set({ id : rootName }, hierarchy);
		}

		var namespaces = hierarchy[name] || [];

		var result = namespaces.reduce(function(memo, itm) {

			var parts = itm.split('.');
			var o = memo;

			for(var part in parts) {

				var key = parts[part];

				if(!o.children) {
					o.children = [];
				}

				var existing = o.children.find((itm) => itm.name==key);

				if(!existing) {
					o.children.push({
						name : key
					});
					o = o.children[o.children.length-1];
				}
				else {
					o = existing;
				}
			}

			return memo;

		}, { name : name, children : [] });

		
		return result;

	};


}

