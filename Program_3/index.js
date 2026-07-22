http= require('http');
fs= require('fs');  
port= 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url === '/') {
    res.write('<h1>Welcome to the Home Page</h1>');
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.write('<h1>Error loading index.html</h1>');
      } else {
        res.write(data);
      }
    });
  }
  else if (req.url === '/about') {
    fs.readFile('about.html');  
  }
  else if (req.url === '/contact') {
    fs.readFile('contact.html', (err, data) => {
      if (err) {
        res.write('<h1>Error loading contact.html</h1>');
      } else {
        res.write(data);
      }
    });
  }
  else if (req.url === '/services') {
    fs.readFile('services.html', (err, data) => {
      if (err) {
        res.write('<h1>Error loading services.html</h1>');
      } else {
        res.write(data);
      }
    });
  }
  else{
    res.write('<h1>404 Not Found</h1>');
  }
  res.end('');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});