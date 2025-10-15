var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>PAGE!!!!!</title>
        </head>
        <body>
            <h1>On the VM?!?!</h1>
            <p>yes this is on the VM</p>
        </body>
        </html>
        `);
    }).listen(port, function() {
        console.log(`Node server is running on ${port}...`);
});