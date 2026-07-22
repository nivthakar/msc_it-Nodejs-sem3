let http= require('http');
let port=4000;

let connect=http.createServer((req,res)=>{

    let name="Javascript";
    let no=10;

    res.setHeader('Content-Type','text/html');
    res.write(`<h1>Welcome to my server</h1>
        <h1>Hello, Nodejs!</h1>`);

    res.write(`Hello, World!<br>`);
    res.write(`Hello, ${name}<br>`);
    res.write(`Number: ${no}<br>`);
    res.end(`Exit`);
});

connect.listen(port,()=>{
    console.log(`Server is running on port 4000`);
});
