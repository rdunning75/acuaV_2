'use strict';
var whitelist = ['http://localhost:8080'];
module.exports = {
    "initial": {
        "cors": {
            "params": {
                "origin": function (origin, callback) {
                    if (whitelist.indexOf(origin) !== -1) {
                        callback(null, true);
                    } else {
                        callback(new Error('Not allowed by CORS'));
                    }
                }
            }
        }
    }
};