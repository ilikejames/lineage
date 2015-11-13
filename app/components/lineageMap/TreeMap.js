import d3 from 'd3/d3.js';

/**
 * [TreeMap description]
 * @param {[dom element]} element [where to attach the map to]
 * @param {[object]} data    [{name : '', children : []} recursive object]
 */
export default function TreeMap(element, data) {

	this.setSize = function() {
		// TODO: based on element width
		svg
			.attr('width', WIDTH)
			.attr('height', HEIGHT);

		vis.attr("transform", (d) => "translate(250,50)" );
	};

	this.setData = function(newData) {

		vis.selectAll('*').remove();

		nodes = tree.nodes(newData);

		// calculate space between
		var deepest = nodes.reduce((prev, node) => Math.max(prev, node.depth), 0),
			width = Math.min(120, (WIDTH - 300)/deepest);


		nodes.forEach(function(d) { d.y = d.depth * width; });
		drawNodes(nodes);
		drawConnections(nodes);

	};

	function drawConnections(nodes) {

		var link = vis.selectAll("path.link")
			.data(tree.links(nodes), function(d) { return d.target.id; });

		// Enter any new links at the parent's previous position.
		link.enter().insert("svg:path", "g")
			.attr("class", "link")
			.attr("d", function(d) {
				var o = {x: source.x0, y: source.y0};
				return diagonal({source: o, target: o});
			})
			.transition()
			.duration(duration)
			.attr("d", diagonal);

		link.transition()
			.duration(duration)
			.attr("d", diagonal);

		link.exit().remove();
	}

	function drawNodes(nodes) { 
		var node = vis.selectAll("g.node").data(nodes, (d,i) => (d.id = ++i) );

		var nodeEnter = node.enter().append("svg:g")
		    .attr("class", "node")
		    .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; });

		nodeEnter.append("svg:circle")
		    .attr("r", 0.01)
		    .style("fill-opacity", 0.01)
		    .style("fill", (d) => d.children ? '#eee' : '#333'); 

		nodeEnter.append("svg:text")
			.attr("dy", (d) => d.depth===0 ? "0.2rem" : "-1.5em")
			.attr("dx", (d) => d.depth===0 ? "-1em" : "0")
			.attr("text-anchor", (d) => d.depth===0 ? 'end' : 'middle')
			.text((d) => d.name);

		node.exit().remove();

		var nodeUpdate = node.transition()
			.duration(duration)
			.attr("transform", (d) => "translate(" + d.y + "," + d.x + ")")
			.select("circle").attr("r", 6).style("fill-opacity", 1)
			.select("text")
			.style("fill-opacity", 1);
	}

	var WIDTH = 1200,
		HEIGHT = 600;

	var svg = d3.select(element).append("svg:svg");
	var vis = svg.append("svg:g");

	var i = 0;

	var nodes;

	var source = data || {};
	source.x0 = HEIGHT / 2;
	source.y0 = 0;

	var tree = d3.layout.tree().size([HEIGHT-100, WIDTH-60]);

	var diagonal = d3.svg.diagonal().projection(function(d) { return [d.y, d.x]; });
	var duration = d3.event && d3.event.altKey ? 5000 : 500;

	this.setSize();
	this.setData(data);
	
}