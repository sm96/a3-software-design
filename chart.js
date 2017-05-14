var CircleChart = function() {

    var width = 960,
        height = 500,
        cornerRadius = 3,
        padAngle = 0.015,
        donutWidth = 75;

    function chart(selection){
        selection.each(function(data) {
        radius = Math.min(width, height) / 2;
        color = d3.scaleOrdinal(d3.schemeCategory20c);
        var svg = d3.select('#chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');

        var arc = d3.arc()
          .innerRadius(radius - donutWidth)            
          .outerRadius(radius)
          .cornerRadius(cornerRadius)
          .padAngle(padAngle);

        var pie = d3.pie()
          .value(function(d) { return d.value; })
          .sort(null);

        var path = svg.selectAll('path')
          .data(pie(data))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d, i) {
            return color(d.data.key);
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

    chart.donutWidth = function(value) {
        if (!arguments.length) return donutWidth;
        donutWidth = value;
        return chart;
    };

    chart.cornerRadius = function(value) {
        if (!arguments.length) return cornerRadius;
        cornerRadius = value;
        return chart;
    };

    chart.padAngle = function(value) {
        if (!arguments.length) return padAngle;
        padAngle = value;
        return chart;
    };

    return chart;
}

