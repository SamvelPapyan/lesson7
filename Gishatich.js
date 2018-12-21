var Root = require('./class.js');
module.exports = class Gishatich extends Root{
	constructor(n, m) {
        super(n, m);
		this.energy = 5;
	}
	sharjvel() {
		this.stanalNorKordinatner();
		var datVandak = this.yntrelVandak(0);
		var norVandak = datVandak[Math.floor(Math.random() * datVandak.length)];
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			matrix[nory][norx] = 3;
			matrix[this.y][this.x] = 0;
			this.y = nory;
			this.x = norx;
			this.energy--;
		}
	}
	utel() {
		this.stanalNorKordinatner();
		var wormVandak = this.yntrelVandak(2);
		var norVandak = wormVandak[Math.floor(Math.random() * wormVandak.length)];
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			for (var i in xotakerArr) {
				var xotObj = xotakerArr[i];
				if (xotObj.x == this.x && xotObj.y == this.y) {
					xotakerArr.splice(i, 1);
				}
			}
			matrix[nory][norx] = 3;
			matrix[this.y][this.x] = 0;
			this.y = nory;
			this.x = norx;
			this.energy = 5;
		}
		else {
			this.sharjvel()
		}
		if (this.energy == 0) {
			this.mernel();
		}
	}
	mernel() {
		matrix[this.y][this.x] = 0;
		for (var i in gishatichArr) {
			var xotObj = gishatichArr[i];
			if (xotObj.x == this.x && xotObj.y == this.y) {
				gishatichArr.splice(i, 1);
			}
		}
	}
}