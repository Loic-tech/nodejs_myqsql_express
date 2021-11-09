const http = require('http')
const app = require('./app')

app.set('port',process.env.PORT || 5000 )
const server = http.createServer(app)

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(5000, "192.168.56.1");
console.log('Server running at http://192.168.56.1:5000/');


const port = process.env.PORT || 5000
server.listen(port, () => console.log(`Listen on port ${port}`)) 