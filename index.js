const httpProxy = require('http-proxy'),
      fs = require('fs');

httpProxy.createServer({
  target: {
    host: 'localhost',
    port: 8080
  },
  ssl: {
    key: fs.readFileSync('key.pem', 'utf8'),
    cert: fs.readFileSync('cert.pem', 'utf8')
  }
}).listen(8090);