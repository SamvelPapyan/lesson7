var Root = require('./class.js');
module.exports = class Grass extends Root{
	constructor(n, m) {
		super(n, m);
	}
	bazmanal() {
		this.multiply++;
		var datarkVandakner = this.yntrelVandak(0);
		var item = datarkVandakner[Math.floor(Math.random()*datarkVandakner.length)];
		var norVandak = item;
		if (norVandak && this.multiply >= 3) {
			xotQanakStat++;
			var norx = norVandak[0];
			var nory = norVandak[1];
			var norXot = new Grass(norx, nory);
			grassArr.push(norXot);
			matrix[nory][norx] = 1;
			this.multiply = 0;
		}
	}
}