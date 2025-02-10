import twilio from 'twilio';
const client = twilio(accountSid, authToken);

async function sendSms(req, res) {
    console.log(req.body);
    const message = await client.messages.create({
        body: req.body.message,
        from: "+18288071816",
        to: req.body.mobile,
    }); 

    res.send({message:'Message send successfully'})
}

export default sendSms;