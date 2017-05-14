var CircleChart = function() {

    var width = 360,
        height = 360,
        donutWidth = 75;
        margin = {top: 10, right: 10, bottom: 10, left: 10},
        color = d3.scaleOrdinal(d3.schemeCategory20b);
        drawWidth = width - margin.left - margin.right,
        drawHeight = height - margin.top - margin.bottom;

    function chart(selection){
        selection.each(function(data) {
        radius = Math.min(width, height) / 2;
        var svg = d3.select('#chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');

        var arc = d3.arc()
          .innerRadius(radius - donutWidth)            
          .outerRadius(radius);

        var pie = d3.pie()
          .value(function(d) { return d.count; })
          .sort(null);

        var path = svg.selectAll('path')
          .data(pie(data))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d, i) {
            return color(d.data.label);
          });
        });
    }

    chart.width = function(value) {
        if (!arguments.length) return width;
        width = value;
        return chart;
    };

    chart.height = function(value) {
        if (!arguments.length) return height;
        height = value;
        return chart;
    };

    chart.margin = function(value) {
        if (!arguments.length) return margin;
        margin = value;
        return chart;
    };

    chart.donutWidth = function(value) {
        if (!arguments.length) return donutWidth;
        donutWidth = value;
        return chart;
    };

    chart.color = function(value) {
        if (!arguments.length) return color;
        color = value;
        return chart;
    };

    chart.variable = function(value) {
        if (!arguments.length) return variable;
        variable = value;
        return chart;
    };

    return chart;
}

