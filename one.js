let http = require('http');
let connect=http.createServer((req,res)=>{
	res.setHeader("Content-Type","text/html");
	
	let name="Rahul";
	let a=5;
	let b=4
	
	res.write(`
	<h1>Hello World </h1>
	<h1>My name is Nirav</h1>
	<h2>Your  name is ${name}</h2>`);
	
	res.write(`${a+b}`);
	res.end();
	
});

connect.listen(4000,()=>{
	console.log("Your Server is running on 4000");
});