const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server= http.createServer((req,res)=>{
    const data = url.parse(req.url);
    const query=querystring.parse(data.query);
    res.writeHead(200,{'Content-Type':'text/html'});    
    res.write("Name: "+query.name+"<br>");
    res.write("Age: "+query.age+"<br>");
    res.end("Query String Example");


});
server.listen(4000,()=>{
    console.log("Server is running on port 4000");
})
