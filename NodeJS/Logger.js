url = "https://logger.io/log";

function log(msg) {
    console.log(msg);
}

module.exports.log = log;
module.exports.endpoint = url;