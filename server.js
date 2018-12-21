var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/', function (req, res) {
	res.redirect('index.html');
});
server.listen(3000);
console.log("Connected");

var clientExists = false;
weathers = ['winter', 'spring', 'summer', 'autumn'];
weather = weathers[0];
//var time = 0;

io.on("connection", function () {
	if (!clientExists) {
		setInterval(draw, 1000);
		setInterval(printStat, 1000);
		clientExists = true;
	}
});


var nQanak = 80;
var mQanak = 80;
matrix = [];
grassArr = [];
xotakerArr = [];
gishatichArr = [];
bombArr = [];
vorsordArr = [];



var xotQanak = 4000;
var xotakerQanak = 900;
var bombQanak = 300;
var gishQanak = 1000;
var vorsQanak = 200;

xotQanakStat = 4000;
xotakerQanakStat = 900;

var Grass = require("./Grass.js");
var Xotaker = require("./Xotaker.js");
var Gishatich = require("./Gishatich.js");
var Bomb = require("./Bomb.js");
var Vorsord = require("./Vorsord.js");

for (var m = 0; m < mQanak; m++) {
	matrix[m] = [];
	for (var n = 0; n < nQanak; n++) {
		matrix[m][n] = 0 /*Math.round(random(0,5))*/;
	}
}

while (xotQanak > 0) {
	var x = Math.floor(Math.random() * nQanak);
	var y = Math.floor(Math.random() * mQanak);

	matrix[y][x] = 1;
	xotQanak--;
}
while (xotakerQanak > 0) {
	var x = Math.floor(Math.random() * nQanak);
	var y = Math.floor(Math.random() * mQanak);
	if (matrix[y][x] == 0) {
		matrix[y][x] = 2;
		xotakerQanak--;
	}

}

while (bombQanak > 0) {
	var x = Math.floor(Math.random() * nQanak);
	var y = Math.floor(Math.random() * mQanak);
	if (matrix[y][x] == 0) {
		matrix[y][x] = 4;
		bombQanak--;
	}

}
while (gishQanak > 0) {
	var x = Math.floor(Math.random() * nQanak);
	var y = Math.floor(Math.random() * mQanak);
	if (matrix[y][x] == 0) {
		matrix[y][x] = 3;
		gishQanak--;
	}

}
while (vorsQanak > 0) {
	var x = Math.floor(Math.random() * nQanak);
	var y = Math.floor(Math.random() * mQanak);
	if (matrix[y][x] == 0) {
		matrix[y][x] = 5;
		vorsQanak--;
	}
}

for (var m = 0; m < mQanak; m++) {
	for (var n = 0; n < nQanak; n++) {
		if (matrix[m][n] == 1) {
			var gr = new Grass(n, m);
			grassArr.push(gr);
		}
		else if (matrix[m][n] == 2) {
			var xt = new Xotaker(n, m);
			xotakerArr.push(xt);
		}
		else if (matrix[m][n] == 3) {
			var gs = new Gishatich(n, m);
			gishatichArr.push(gs);
		}
		else if (matrix[m][n] == 4) {
			var bm = new Bomb(n, m);
			bombArr.push(bm);
		}
		else if (matrix[m][n] == 5) {
			var vor = new Vorsord(n, m);
			vorsordArr.push(vor);
		}
	}
}

var time = 0;
function draw() {
	time += 1;
	if (time % 20 == 0) {
		weather = weathers[0];
	}
	else if (time % 20 == 5) {
		weather = weathers[1];
	}
	else if (time % 20 == 10) {
		weather = weathers[2];
	}
	else if (time % 20 == 15) {
		weather = weathers[3];
	}
	for (var i in grassArr) {
		grassArr[i].bazmanal();
	}
	for (var i in xotakerArr) {
		if (weather == 'winter') {
			continue;
		}
		xotakerArr[i].utel();
	}
	for (var i in gishatichArr) {
		if (weather == 'autumn' || weather == 'spring') {
			continue;
		}
		gishatichArr[i].utel();
	}
	for (var i in bombArr) {
		bombArr[i].nstel();
	}
	for (var i in vorsordArr) {
		if (weather == 'summer' || weather == 'autumn') {
			continue;
		}
		vorsordArr[i].spanel();
	}

	io.sockets.emit("matrix", { m: matrix, w: weather });
}
var jsonObj = {"info":[]};
function printStat() {
	var file = "stat.json";
	jsonObj.info.push({"xot qanak":xotQanakStat, "xotaker qanak":xotakerQanakStat});
	fs.writeFileSync(file, JSON.stringify(jsonObj));

}