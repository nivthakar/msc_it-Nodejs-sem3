let http = require('http');

let connect= http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Welcome to NodeJS</h1>');
    res.end();
});
connect.listen(3000,()=>{
    console.log('Server is running on port 3000');
});