//d3.js
//Scales

//resources
//https://github.com/mbostock/d3/wiki
//https://github.com/mbostock/d3/wiki/Tutorials
//https://github.com/mbostock/d3/wiki/Gallery
//https://github.com/mbostock/d3/wiki/Gallery#useful-snippets
//https://github.com/mbostock/d3/wiki/Gallery#techniques-interaction--animation
//https://github.com/mbostock/d3/wiki/Gallery#basic-charts
//https://github.com/mbostock/d3/wiki/API-Reference#d3layout-layouts
//https://github.com/mbostock/d3/wiki/Layouts

//Node Structure: http://www.brightpointinc.com/interactive/budget/index.html?source=d3js
//Radial Percentages: http://www.brightpointinc.com/clients/brightpointinc.com/library/radialProgress/index.html?source=d3js
//Parallel Coordinates: http://exposedata.com/parallel/
//Slope Graphs: http://skedasis.com/d3/slopegraph/
//Crossfilter (Multivariates): http://square.github.io/crossfilter/
//Node Explorer: http://ramblings.mcpher.com/Home/excelquirks/gassites/d3nodefocus
//Concept Browswer: http://xliberation.com/googlecharts/d3concept.html
//Dependency Graph: http://www.redotheweb.com/DependencyWheel/
//BiParite Graph (Categorical): http://bl.ocks.org/NPashaP/9796212
//Movie Network: http://bl.ocks.org/paulovn/9686202   ****
//Dashboard: http://bl.ocks.org/NPashaP/96447623ef4d342ee09b
//Word Cloud: https://github.com/jasondavies/d3-cloud


//#web application development workflow
//jshint/jslint sublime text package
//emmet.io
//require.js
//yeoman.io, codekit
//grunt
//uglify.js
//localtunnel -> ngrok.com
//testem
//appthwack
//mochajs - test framework
//guard
//chroome devtools: {sources/snippets}
//html5please.com
//http://www.paulirish.com/

//github.com/paulirish/dotfiles/../bashprompt
//dotfiles.github.com
//aliases

//ssh or scp
//shortcut 1
//cat ~/.ssh/id_rsa.pub | pbcopy
//paste into servers ~/.ssh/authorized_keys
//shortcut 2
//alias dev='akamlani@hostname.com -p 22000'
//ssh dev
//shortcut 3 (edit) {Host, HostName, Port, User}
//~/.ssh/config


/*
processing.js impelementation
void setup () {

}

void draw() {

}

void mousePressed() {

}
*/


/*
int x, y, circleSize = 0;

void setup() {
    size(200,200);
    background(120,120,180);
    fill(255, 255, 0);
    stroke(255);
    x = 0;
    y = height;
    circleSize = 70;
    frameRate(30); //30 fps
}
*/
/*
void draw() {
    background(120,120,180);
    ellipse(x,y,circleSize, circleSize);
    x += 1;
    if ( x <= width/2) {
        y -=2;
        if (x % 5 == 0) {circleSize-=2;}
    }
    else {
        y += 2;
        if (x % 5 == 0) {circleSize+=2;}
    }
    if (x > 200) {x=0; y=height; circleSize=70;}
    /*
    //rectangle vertical moving
    rect(50,y,70,70);
    y = y + 1;
    if  (y > 200) {y = -50;}
    */
    /*
    //mouse events
    ellipse(mouseX, mouseY, 50,50);
    ellipse(mouseX, 100,50,50);

    ellipse(100, mouseY, 50, 50);
    rect(mouseX, 100, 50, 50);
    */
    /*
    //mouse click events
    fill(fillColor);
    rect(x,y,100,50);
    */
    /*
    //distances
    ellipse(100,100, circleWidth, circleHeight);
    */
//}

/*
void mousePressed() {
    /*
    x = mouseX;
    y = mouseY;
    if (fillColor == 0) {fillColor = 255;}
    else {fillColor = 0;}
    */
    //animation rings
    //circleWidth  = 2 * dist(mouseX, mouseY, 100, 100);
    //circleHeight = 2 * dist(mouseX, mouseY, 100, 100);
//}


    /*
    //line attributes
    //does not use 'fill' style property; use 'stroke' instead
    obj = shape_object
          .attr("x1",       function(d){return d.x1})
          .attr("y1",       function(d){return d.y1})
          .attr("x2",       function(d){return d.x2})
          .attr("y2",       function(d){return d.y2})
          .attr("stroke-width", 2)
          .attr("stroke", "black");
    */


/*
var circleData = [[10, "rgb(246, 239, 247)", "A"], [15, "rgb(189,201,225)", "B"],
              [20, "rgb(103,169,207)", "C"], [25, "rgb(28,144,153)", "D"], [30, "rgb(1,108,89)", "E"]];
var projects = ["OpenFDA", "NuPIC", "Kaggle", "Keen.io", "GHOSN", "Pocket"];

container = create_container(selector = '#projects', width=circleData.length * 100, height=100)
shape = create_shape(container, circleData, "circle");
shape = create_shape(container, rectData, "rect");
shape = create_shape(container, lineData, "line");
obj = attach_attributes(shape, "circle");
obj = attach_attributes(shape, "rect");
obj = attach_attributes(shape, "line");
obj = attach_style(obj);
obj = attach_events(obj);
*/



/*
var dc = {"cx": 50 , "cy": 50, "radii": 30};
var circle_data = [];
for (i=0; i < portfolio_data.length; i++) {
    circle_data[i] = {};
    circle_data[i].cx = dc.cx + (100*i);
    circle_data[i].cy = dc.cy;
    circle_data[i].radii = dc.radii;
}


console.log(circle_data);
var canvas_details = create_container("#portfolio-details", width, height);
var circles = create_shape(canvas_details, circle_data, "circle");
circles = attach_attributes(circles, "circle");
//circles.exit().remove();
*/

/*
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
//point to origin
var svg = d3.select("#projects")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
*/
//data

/*
svg.select("body").selectAll("p")
              .data(projects)
              .enter()
              .append("p")
              .text(function(d) {return d;});

circleDemo.style("stroke", "black");
circleDemo.style("fill", "white");
*/




/*
d3.select("#projects").selectAll("p")
    .data(projects)
    .enter()
    .append("p")
    .text(function(d) { return d; });
*/

/*
d3.select("#example99 button")
      .on("click", function() {
        myExample.selectAll("circle")
          .attr("cx", function(){return Math.random() * w})
          .attr("cy", function(){return Math.random() * h});
      });
*/

/*
d3.select(“this”)
    .transition()
    .delay(function (d,i) { return 1000*(i + 1);})
    .attr(“stroke”, “blue”);

d3.select(“this)
    .transition()
    .ease(“bounce”);

*/
/*
<div class="row">
    <div class="col-md-4">
        <script src="/js/visualize.js" type="text/processing" data-processing-target="pjs"> </script>
        <canvas id="pjs"></canvas>
    </div>
</div>
*/


