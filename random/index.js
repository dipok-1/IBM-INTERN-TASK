const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/heavy') {
    // ⚠️ This blocks the single JavaScript thread
    let i = 0;
    while (i < 5_000_000_000) {  
        i++; } 
    
    return res.end('Heavy task finished!');
  }

  // This should be fast, but it gets stuck behind the heavy task
  if (req.url === '/fast') {
    return res.end('Fast task finished!');
  }
});

server.listen(3000, () => console.log('Server on port 3000'));
