console.log("circles.js loaded")

var circles = [];

 var keyData = {q: {sound: new Audio('assets/sounds/bubbles.mp3'), color: '#1abc9c'}, w: {sound: new Audio('assets/sounds/clay.mp3'), color: '#2ecc71'}, e: {sound: new Audio('assets/sounds/confetti.mp3'), color: '#3498db'}, r: {sound: new Audio('assets/sounds/corona.mp3'), color: '#9b59b6'}, t: {sound: new Audio('assets/sounds/dotted-spiral.mp3'), color: '#34495e'}, y: {sound: new Audio('assets/sounds/flash-1.mp3'), color: '#16a085'}, u: {sound: new Audio('assets/sounds/flash-2.mp3'), color: '#27ae60'}, i: {sound: new Audio('assets/sounds/flash-3.mp3'), color: '#2980b9'}, o: {sound: new Audio('assets/sounds/glimmer.mp3'), color: '#8e44ad'}, p: {sound: new Audio('assets/sounds/moon.mp3'), color: '#2c3e50'}, a: {sound: new Audio('assets/sounds/pinwheel.mp3'), color: '#f1c40f'}, s: {sound: new Audio('assets/sounds/piston-1.mp3'), color: '#e67e22'}, d: {sound: new Audio('assets/sounds/piston-2.mp3'), color: '#e74c3c'}, f: {sound: new Audio('assets/sounds/prism-1.mp3'), color: '#95a5a6'}, g: {sound: new Audio('assets/sounds/prism-2.mp3'), color: '#f39c12'}, h: {sound: new Audio('assets/sounds/prism-3.mp3'), color: '#d35400'}, j: {sound: new Audio('assets/sounds/splits.mp3'), color: '#1abc9c'}, k: {sound: new Audio('assets/sounds/squiggle.mp3'), color: '#2ecc71'}, l: {sound: new Audio('assets/sounds/strike.mp3'), color: '#3498db'}, z: {sound: new Audio('assets/sounds/suspension.mp3'), color: '#9b59b6'}, x: {sound: new Audio('assets/sounds/timer.mp3'), color: '#34495e'}, c: {sound: new Audio('assets/sounds/ufo.mp3'), color: '#16a085'}, v: {sound: new Audio('assets/sounds/veil.mp3'), color: '#27ae60'}, b: {sound: new Audio('assets/sounds/wipe.mp3'), color: '#2980b9'}, n: {sound: new Audio('assets/sounds/zig-zag.mp3'), color: '#8e44ad'}, m: {sound: new Audio('assets/sounds/moon.mp3'), color: '#2c3e50'} }

function onKeyDown(event) {
	if(keyData[event.key] && keyData[event.key].sound) {
		playSound(event.key);
		renderCircle()
	} else {
		return
	}

function playSound(key){
	
	keyData[key].sound.currentTime = 0;
	keyData[key].sound.play();
}

function renderCircle(){
	var maxPoint = new Point(view.size.width, view.size.height)
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint
	var color = keyData[event.key].color;
	var newCircle = new Path.Circle({
		center: [point.x, point.y],
		radius: 300,
		fillColor: color
	})
	circles.push(newCircle);
	console.log(circles)
}}


function onFrame(event) {
	// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	//scale down by x0.9

	for(var i = 0; i<circles.length; i++){
		circles[i].fillColor.hue += 1;
		circles[i].scale(.9);

		if(circles[i].area < 1){
			circles[i].remove();
			circles.splice(i, 1);

		}

	}

}