const http = require('http')

const server = http.createServer(function (request, response) {
    if(request.url === '/') {
        response.write('Welcome to BMC !')
        response.end()
    }
    if (request.url === '/bmc/developers') {
        console.log("Inside BMC developers")
        response.write(JSON.stringify([1,2,3]))
        response.end()
    }
})

server.on('connection', (socket) => {
    console.log("New Connection")
})

server.listen(3000)

console.log("Server Listening at port 3000 ")