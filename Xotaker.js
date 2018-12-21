var Root = require('./class.js');
module.exports = class Xotaker extends Root{
	constructor(n, m) {
		super(n, m);
		this.energy = 5;
		this.c = 0;
	}
	sharjvel() {
		var datVandak = this.yntrelVandak(0);
		var norVandak = datVandak[Math.floor(Math.random() * datVandak.length)];
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			matrix[nory][norx] = 2;
			matrix[this.y][this.x] = 0;
			this.y = nory;
			this.x = norx;
			this.energy--;
		}
		
	}
	utel() {
		var xotVandak = this.yntrelVandak(1);
		var norVandak = xotVandak[Math.floor(Math.random() * xotVandak.length)];
		if (norVandak) {
			xotQanakStat--;
			var norx = norVandak[0];
			var nory = norVandak[1];
			for (var i in grassArr) {
				var xotObj = grassArr[i];
				if (xotObj.x == norx && xotObj.y == nory) {
					grassArr.splice(i, 1);
				}
			}
			matrix[nory][norx] = 2;
			matrix[this.y][this.x] = 0;
			this.y = nory;
			this.x = norx;
			this.c++
			this.energy = 5;
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
		for (var i in xotakerArr) {
			var xotObj = xotakerArr[i];
			if (xotObj.x == this.x && xotObj.y == this.y) {
				xotakerArr.splice(i, 1);
			}
		}
	}
	bazmanal() {
		var datVandak = this.yntrelVandak(0);
		var norVandak = datVandak[Math.floor(Math.random() * datVandak.length)];
		if (norVandak) {
			xotakerQanakStat++;
			var norx = norVandak[0];
			var nory = norVandak[1];
			matrix[nory][norx] = 2;
			var norXt = new Xotaker(norx, nory);
			xotakerArr.push(norXt);
			this.c = 0;
		}
	}
}