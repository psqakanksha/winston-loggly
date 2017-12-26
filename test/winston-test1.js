const winston = require('winston');
var winlog = require('winston-loggly-bulk');

var loggly = new winston.transports.Loggly({
    token: "53beea74-c135-4683-b876-1e7dad32bbaf",
    subdomain: "labenv4",
    tags: ["test-check-120"],
    json: true
});

winston.add(loggly, null, true);

winston.log('info', "Hello World from Node.js!");
