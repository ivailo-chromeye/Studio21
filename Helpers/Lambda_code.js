var aws = require('aws-sdk');
var ses = new aws.SES({region: 'eu-west-2'}); // make sure to enter the correct region

exports.handler = (event, context, callback) => {
     var params = {
        Destination: {
            ToAddresses: ["ivailo@chromeye.com"] // receiver
        },
        Message: {
            Body: {
                Text: { Data: `Name: ${event.name}\nEmail/Phone: ${event.mailPhone}\nMessage: ${event.message}` } // email text
                 
            },
            Subject: { Data: "Studio 21 Contact Form" } // subject
        },
        Source: "ivailo@chromeye.com" // sender
    };
    if (event.name && event.mailPhone) {
        ses.sendEmail(params, function (err, data) {
            callback(null, {err: err, data: data});
            if (err) {
                console.log(err);
                context.fail(err);
            } else {
                console.log(data);
                context.succeed(event);
            }
        });
    }
};