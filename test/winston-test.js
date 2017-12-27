const winston = require('winston');
require('..');

winston.add(winston.transports.Loggly, {
    token: "53beea74-c135-4683-b876-1e7dad32bbaf",
    subdomain: "labenv4",
    tags: ["Winston-bulk-8.9.1-everything"],
    json: true,
    isBulk: false,
    bufferOptions: {
        size: 500,
        retriesInMilliSeconds: 1 * 5000,

    },
});

//Sending a single event both text and json object
var source = {
    foo: 1,
    bar: 2,
    buzz: {
        sheep: 'jumped',
        times: 10
    }
};

winston.log('info', 'The Docker logging driver allows you send stdout and stderr output from your container to the host’s syslog daemon.')


//Sending multiple events in a loop
for (i = 0; i < 10; i++) {
    winston.log('info',source);
    winston.log('info', 'The Docker logging driver allows you send stdout and stderr output from your container to the host’s syslog daemon. The syslog daemon on the host will then forward the logs to Loggly. For alternatives, please see the Advanced Options section below.');
    winston.log('info', 'The Docker logging driver allows you send stdout and stderr output from your container to the host’s syslog daemon. The syslog daemon on the host will then forward the logs to Loggly. For alternatives, please see the Advanced Options section below.');
    winston.log('info', source); 
}

//Test logging an exception
try {
    var a = 10, b = 0;
    a = a / b;
    throw new Error("Something unexpected has occurred.", a);

} catch (e) {
    winston.error(e);
}

//Sending null or empty message
winston.log('info', '');
winston.log('info', null);
winston.log('info', source);


var callCount = 1;
var repeater = setInterval(function () {
    if (callCount < 10) {
        sendMultipleLogs();
        callCount += 1;
    }
    else clearInterval(repeater);
    }, 5 * 1000);

function sendMultipleLogs() {
    for (i = 0; i < 54; i++) {
        winston.log('info', source);
        winston.log('info', 'cry me a river :(');
    }
}


