// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        from: 'whatsapp:+13252523040',
        body: 'Hello there!',
        to: 'whatsapp:+919717992694'
    })
    .then(message => console.log(message.sid));
