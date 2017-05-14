# a3-software-design

Hello. This API will help you to easily create beautiful donut charts to visualize sources of data.

All you need is data with two columns, one for the category and the other for it's corresponding value. This API will allow you to create a donut chart with colored categories and corresponding sizes based on the values in the data.

In order to use the API effectively, the data needs to be structured like the following, with "keys" and "values". If the data is not structured with a "key" for the category and/or a "value" for the corresponding value, the API will not work.

This following example shows how your data should be structured and look like to make a donut chart using this API.

<pre><code>      
	var data = [
          { key: 'a', value: 10 },
          { key: 'b', value: 20 },
          { key: 'c', value: 30 },
          { key: 'd', value: 40 },
          { key: 'e', value: 14 }
        ];
</code></pre>

While there is a default donut chart that will be created from just the data, you also have the option of changing aspects of the chart to fit your needs. There are five methods that can be changed. 

The five methods are:<br>
.width()<br>
.height()<br>
.donutWidth()<br>
.cornerRadius()<br>
.padAngle()<br>

The first method allows you to change the width of your donut chart. It simply takes in an integer value as a parameter in order to change the size of the donut chart. This method is the .width() method.

The second method allows you to change the height of your donut chart. It simply takes in an integer value as a parameter as well in order to change the size of the donut chart. This method is the .height() method.

The third method allows you to change the proportions of the inner circle(the "donut hole") of the chart and make it bigger or smaller. This method also takes in an integer value as a parameter. This method is the .donutWidth() method.

The fourth method allows you to change the corner radius of your donut chart. It also takes in an integer value parameter in order to change how rounded the corners are on each slice of the chart. This method is the .cornerRadius() method.

The final method allows you to change the gap size between the slices in the donut chart. This method takes in a double (decimal) integer value as a parameter in order to set this. This method is the .padAngle method.

Any of these methods are easy to use. Just simply chain on when creating your chart just like the example below:

<pre><code>      
	var myChart = CircleChart().width(360).height(360);
</code></pre>
