
goods = {
	"R2D2" : {
		cost 	: 100500,
		color 	: 'silver',
		smart	: true,
		weapon	: 'none',
		friendly: true
	},

	"T1000" : {
		cost 	: 9999,
		color	: 'skin',
		smart	: true,
		weapon	: 'winchester',
		friendly: false
	},

	"Transformer" : {
		cost	: 100000,
		color	: 'yellow',
		smart	: false,
		weapon	: 'rockets',
		friendly: true
	}
}

console.log(goods);
console.log(goods.R2D2);
console.log(goods.T1000);
console.log(goods['Transformer'])
console.log(goods.T1000.cost);
console.log(goods.Transformer.smart);
console.log(goods.R2D2.color);
console.log(goods.T1000.weapon)