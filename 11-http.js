const http = require('http')
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end("Hello Welcome to our Homepage!")
    }
    if (req.url === '/about') {
        res.end("Its about page!!")
    }

    res.end(`
    <h3>OOPS!!</h3>
    <p>We dont find the page you looking for!!</p>
    <a href="/">Back Home</a>
    `)

})

server.listen(5000);