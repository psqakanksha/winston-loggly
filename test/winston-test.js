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

var source = {
    foo: 1,
    bar: 2,
    buzz: {
        sheep: 'jumped',
        times: 10
    }
};



for (i = 0; i < 750; i++) {
    winston.log('info',source);
    winston.log('info', 'The Docker logging driver allows you send stdout and stderr output from your container to the host’s syslog daemon. The syslog daemon on the host will then forward the logs to Loggly. For alternatives, please see the Advanced Options section below.');
    winston.log('info', 'The Docker logging driver allows you send stdout and stderr output from your container to the host’s syslog daemon. The syslog daemon on the host will then forward the logs to Loggly. For alternatives, please see the Advanced Options section below.');
    winston.log('info', source); 
}


try {
    var a = 10, b = 0;
    a = a / b;
    throw new Error("Something unexpected has occurred.", a);

} catch (e) {
    winston.error(e);
}


winston.log('info', '');
winston.log('info', null);
winston.log('info', source);



setInterval(function () {
    sendMultipleLogs();
}, 5 * 1000);

function sendMultipleLogs() {
    for (i = 0; i < 50; i++) {
        winston.log('info', source);
        winston.log('info', 'cry me a river :(');
    }
}

