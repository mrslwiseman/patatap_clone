// paper.js tutorial



// PATHS

// Path constructor
var myPath = new Path();

myPath.strokeColor = 'black';


// adding segments
myPath.add(new Point(0, 0));
myPath.add(new Point(100, 50));

// can add as an array 
myPath.add(new Point(0, 0), new Point(100, 50));


// adding segments
path.insert(index, segment)
myPath.insert(1, new Point(30, 40)); // adds a segment in 2nd place of array


// remove segment within array of segments
myCircle.removeSegment(0);

// close the first and last points
path.closed = true;


// view the bezier handles of shape:
path.fullySelected = true;


// CREATING PREDEFINED SHAPES

// Shape Constructor
// CIRCLES
new Path.Circle(new Point(centrePointX, centrePointY), RadiusPT);

var myCircle = new Path.Circle(new Point(100, 70), 50);

// RECTANGLES

// draw an abstract rectangle save as variable
 // draw path around that rectangle


 							   // start 				  finish
var rectangle = new Rectangle(new Point(0, 0), new Point(150, 100));
// draw path on that abscract rect
var path = new Path.Rectangle(rectangle);

path.fillColor = '#e9e9ff';


// Rectangular Shaped Paths with Rounded Corners

// constrcutor
new Path.RoundedRectangle(rect, size)

// The rect parameter describes the Rectangle and 
// the size parameter describes the Size of the rounded corners.

var rectangle = new Rectangle(new Point(50, 50), new Point(150, 100));
var cornerSize = new Size(20, 20);
var path = new Path.RoundRectangle(rectangle, cornerSize);
path.fillColor = 'black';


// REGULAR POLYGON SHAPED PATHS

new Path.RegularPolygon(center, numSides, radius)








































