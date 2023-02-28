// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
let accountSid = "ACf112af8d83e25d910320f51995fc287e"
let authToken = "ca312278987ec1e6e22f38d8b768ff7e"
const client = require('twilio')(accountSid, authToken);
console.log(accountSid)
// client.messages
//     .create({
//         from: 'whatsapp:+13252523040',
//         body: 'Hello there!',
//         to: 'whatsapp:+919717992694'
//     })
//     .then(message => console.log(message.sid));

client.messages
    .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+15095026853',
        to: '+919717992694'
    })
    .then(message => console.log(message.sid)); 