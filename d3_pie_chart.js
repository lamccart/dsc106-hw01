var data = [45636, 52265, 13781, 15821, 3220, 3484]

var svg = d3.select("svg"),
    width = svg.attr("width"),
    height = svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c', '#8B0000']);

// Generate the pie
var pie = d3.pie();

var data_ready = pie(d3.entries(data))

// Generate the arcs
var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

//Generate groups
var arcs = g.selectAll("arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc")

//Draw arc paths
arcs.append("path")
    .attr("fill", function(d, i) {
        return color(i);
    })
    .attr("d", arc);