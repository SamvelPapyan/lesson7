var nQanak = 80;
var mQanak = 80;
var side = 10;

var socket = io();


function setup() {
	createCanvas(nQanak * side, mQanak * side);
	background('#acacac');
	frameRate(10);
	
}
function drawMatrix(obj) {

	var matrix = obj.m;
	var weather = obj.w;
	for (var m = 0; m < mQanak; m++) {
		for (var n = 0; n < nQanak; n++) {
			if (matrix[m][n] == 1) {
				if(weather == 'summer'){
					fill('green');
				}
				else if(weather == 'autumn'){
					fill('rgb(153, 102, 51)');
				}
				else if(weather == 'winter'){
					fill('lightgrey');
				}
				else if(weather == 'spring'){
					fill('rgb(51, 204, 51)');
				}
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 0) {
				if(weather == 'winter'){
					fill('white');
				}
				else if(weather == 'spring'){
					fill('lightgreen');
				}
				else if(weather == 'summer'){
					fill('rgb(255, 204, 204)');
				}
				else if(weather == 'autumn'){
					fill('rgb(204, 153, 255)');
				}
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 2) {
				if(weather == 'spring'){
					fill('rgb(255, 255, 153)');
				}
				else{
					fill('yellow');
				}
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 3) {
				if(weather == 'winter'){
					fill('black');
				}
				else if(weather == 'spring'){
					fill('lightgreen');
				}
				else{
					fill('orange');
				}
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 4) {
				fill('red');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 5) {
				if(weather == 'summer'){
					fill('rgb(255, 204, 204)');
				}
				else if(weather == 'autumn'){
					fill('rgb(153, 102, 51)');
				}
				else{
					fill(0,0,200);
				}
				rect(n * side, m * side, side, side);
			}
		}
	}
}
socket.on("matrix",drawMatrix);