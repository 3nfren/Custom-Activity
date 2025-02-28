var client = require('../../lib/sfmc_client');
var rp = require("request-promise");

function sendSms (Telefono, smsText) {
  /*var llamada = {
    "msisdn": customerId,  
    "origin": "SalesForce", 
    "text": smsText
  }*/

  /* Payload */
  
  var llamada = {
    "messaging_product": "whatsapp",
    "preview_url": false,
    "recipient_type": "individual",
    "to": Telefono,
    "type": "text",
    "text": {
        "body": smsText
    }
  } 


  var options = {
    method: 'POST',
    uri: 'https://gw-whatsapp-qa.apps.ambientesbc.com/whatsapp-bancolombia/whatsapp/gns/112789018505312/messages',
    headers: {
      'client-id' : '25d9f3e6-08d5-4e52-b9aa-867db1855b58',
      'client-secret': '37dce798dc7c46dea87a64b6dff4fb30',
      'Content-Type':'application/json'
    },
    body: llamada,
    rejectUnauthorized: false,
    json: true
};
return rp(options)

};

module.exports = sendSms;
