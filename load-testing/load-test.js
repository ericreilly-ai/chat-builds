const http = require('http');
const https = require('https');
const { URL } = require('url');

const target = process.argv[2] || 'http://localhost:3000';
const numRequests = parseInt(process.argv[3], 10) || 100;

let completed = 0;

function sendRequest(index) {
  const urlObj = new URL(target);
  const protocol = urlObj.protocol === 'https:' ? https : http;

  const start = Date.now();
  const req = protocol.request(target, res => {
    res.on('data', () => {});
    res.on('end', () => {
      const duration = Date.now() - start;
      console.log(`Request ${index + 1}: ${res.statusCode} ${duration}ms`);
      completed++;
      if (completed === numRequests) {
        console.log('Load test complete');
      }
    });
  });

  req.on('error', err => {
    console.error(`Request ${index + 1} error: ${err.message}`);
    completed++;
    if (completed === numRequests) {
      console.log('Load test complete');
    }
  });

  req.end();
}

for (let i = 0; i < numRequests; i++) {
  sendRequest(i);
}
