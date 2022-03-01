const EventEmitter = require('events')

url = "https://logger.io/log";

class Logger extends EventEmitter {
    
    log(msg) {
        console.log(msg);
        this.emit("messageLogged", {id:1, url:'https://'})  //Event Trigger
    }
}
module.exports = Logger;
module.exports.endpoint = url;