const http = require('http')

const server = http.createServer()

server.on('connection', (socket) => {
    console.log("New Connection")
})

server.listen(3000)

console.log("Server Listening at port 3000 ")