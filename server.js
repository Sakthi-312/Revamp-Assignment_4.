const http = require('http');

const server = http.createServer((req,res) => {
	res.write("Hi from Sakthi Application");
	res.end();
});

server.listen(4000, () => {
	console.log("Server Started Running at Port 4000");
});

