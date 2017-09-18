const http = require('http');

const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node Http!</h1>');
    res.end();
});
const port = process.env.PORT || 1300;
server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});