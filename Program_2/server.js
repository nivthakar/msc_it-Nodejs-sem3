http = require('http');
port=4000;


connect= http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    let name=prompt("Enter your name: ");
    res.write(`<h1>Hello ${name}</h1>`);
    res.end();
    /*
    let color=["Red","Green","Blue","Yellow","Orange","Pink","Purple"];  
    for(i=0;i<color.length;i++){
        res.write(`<h1>${color[i]}</h1>`);
    }
        */
    

    /*
    let no1=1;

    while(no1<=10){
        res.write(no1+"<br>");
        no1++;
    }
    res.end();
    
    for(i=0;i<10;i++){
        
        res.write(i+"<h1>Hello World</h1>");
    
    }
    res.end();
    */
    /*
    let day=2;

    switch(day){
        case 1:
            res.write("<h1>Monday</h1>");
            break;
        case 2:
            res.write("<h1>Tuesday</h1>");
            break;
        default:
            res.write("<h1>Invalid day</h1>");
    }
    res.end();
    
    if(age>=18){
        res.write("<h1>You are an adult</h1>");
    }
    else{
        res.write("<h1>You are a child</h1>");
    }
    res.end();
    */
  /*
    let name="ABC";
    let a=21;
    let b=20;
    let f=4.15;

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`<h1>Hello ${name}</h1>`);
    res.write(`<h1>${a+b}</h1><br>`);
    res.write(`<h1>${f}</h1>`);
    res.write("<h2>My name is Node</h2>");
    res.end('<h1>Hello World</h1>\n');
    */
});
connect.listen(port);
console.log('Server running at http://localhost:'+port+'/');