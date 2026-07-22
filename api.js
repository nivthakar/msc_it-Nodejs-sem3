const https = require('https');

https.get('https://dummyjson.com/comments', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data)));
}).on('error', err => console.error(err));