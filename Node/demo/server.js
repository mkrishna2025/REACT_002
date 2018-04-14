var Add = require('./addition.js');
var Calculator1 = require('./calculator1.js');
var { sub,  mul } = require('./calculator1.js');
var Calculator2 = require('./calculator2.js');
var { multiplication } = require('./calculator2.js');
var Person = require('./person.js');
var Son = require('./son.js');

var http = require('http');
var fs = require('fs');

console.log('Welcome to Demo');
console.log('Add of 2 and 5 is ' + Add(2, 5));
console.log('Add of 3 and 4 is ' + Calculator1.add(3, 4));
console.log('Sub of 3 and 4 is ' + Calculator1.sub(3, 4));
console.log('Sub of 10 and 2 is ' + sub(10, 2));
console.log('Mul of 10 and 2 is ' + mul(10, 2));
console.log('Add of 3 and 4 is ' + Calculator2.addition(3, 4));
console.log('Mul of 10 and 2 is ' + multiplication(10, 2));

var p1 = new Person();
p1.setName("Ranjith Kumar");
console.log(" Welcome to " + p1.getName());

var s1 = new Son();
console.log(" Welcome to " + s1.getName() + "," + s1.getGender() + "," + s1.getCity());

/*
http.createServer(function(req, res) {
	console.log('User Requested');
	res.end("Welcome to Demo");
}).listen(3000);*/

http.createServer((req, res) => {
	fs.readFile('Page/Test3.html', function(error, response){
		if(error){
			res.writeHead(404);
			res.write('Content not found');
		}
		else {
			res.writeHead(200, { 'content-type': 'text/html'});
			res.write(response);
		}
		res.end();
	});
}).listen(3002);

