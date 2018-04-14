var Calculator = {
	add: function(x, y){
		return x + y;
	},
	sub: function(x, y){
		x = x || 0;
		y = y || 0;
		return x - y;
	},
	mul: (x, y) => {
		return x*y;
	},
	div: (x, y) => x/y
}

module.exports = Calculator;