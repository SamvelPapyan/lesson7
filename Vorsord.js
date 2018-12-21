var Root = require('./class.js');
module.exports = class Vorsord extends Root {
	constructor(n, m) {
        super(n, m);
		this.energy = 10;
		this.c = 0;
	}
	bazmanal() {
		var datVandak = this.yntrelVandakVs(0);
		var norVandak = datVandak[Math.floor(Math.random() * datVandak.length)];
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			matrix[nory][norx] = 5;

			var norVs = new Vorsord(norx, nory);
			vorsordArr.push(norVs);
			this.c = 0;
		}
	}
	sharjvel() {
		var datVandak = this.yntrelVandakVs(0);
		var norVandak = datVandak[Math.floor(Math.random() * datVandak.length)];
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			matrix[nory][norx] = 5;
			matrix[this.y][this.x] = 0;
			this.y = nory;
			this.x = norx;
			this.energy--;
		}
	}
	spanel() {
		var gisVandak = this.yntrelVandakVs(3);
		var norVandak = gisVandak[Math.floor(Math.random() * gisVandak.length)];
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			for (var i in gishatichArr) {
				var xotObj = gishatichArr[i];
				if (xotObj.x == norx && xotObj.y == nory) {
					gishatichArr.splice(i, 1);
				}
			}
			matrix[nory][norx] = 5;
			matrix[this.y][this.x] = 0;
			this.y = nory;
			this.x = norx;
			this.c++
			this.energy = 10;

		}
		else {
			this.sharjvel()
		}
		if (this.energy <= 0) {
			this.mernel();
		}
		if (this.c >= 10) {
			this.bazmanal();
		}
	}
	mernel() {
		matrix[this.y][this.x] = 0;
		for (var i in vorsordArr) {
			var xotObj = vorsordArr[i];
			if (xotObj.x == this.x && xotObj.y == this.y) {
				vorsordArr.splice(i, 1);
			}
		}
	}
}