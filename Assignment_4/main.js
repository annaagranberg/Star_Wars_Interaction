// Load the JSON data
d3.json("sw/starwars-episode-2-interactions-allCharacters.json").then(function(data) {
    // Extract links from the data
    const links = data.links;
    const nodes = data.nodes;

    const width = 900; // Set your desired width
    const height = 900; // Set your desired height



    var simulation = d3.forceSimulation(nodes)
	.force('charge', d3.forceManyBody().strength(-600))
	.force('center', d3.forceCenter(width / 1.75, height / 2))
	.force('link', d3.forceLink().links(links))
	.on('tick', ticked);

    function updateLinks() {
        var u = d3.select('.links')
            .selectAll('line')
            .data(links)
            .join('line')
            .attr('x1', function(d) {
                return d.source.x
            })
            .attr('y1', function(d) {
                return d.source.y
            })
            .attr('x2', function(d) {
                return d.target.x
            })
            .attr('y2', function(d) {
                return d.target.y
            });
    }

    function updateNodes() {
        u = d3.select('.nodes')
            .selectAll('text')
            .data(nodes)
            .join('text')
            .text(function(d) {
                return d.name
            })
            .attr('x', function(d) {
                return d.x
            })
            .attr('y', function(d) {
                return d.y
            })
            .attr('dy', function(d) {
                return 5
            });
    }

    function ticked() {
        updateLinks()
        updateNodes()
    }
  });


function handleInput() {
    var x = document.getElementById("myRange").value;
    console.log(x);
}
  