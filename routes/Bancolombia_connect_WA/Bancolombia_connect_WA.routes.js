var express = require('express');
var router = express.Router();
var bodyDecoder = require('../../lib/bodyDecoder');
var controller = require('./Bancolombia_connect_WA.controller')

router.post('*', bodyDecoder)

router.post('/execute', (req, res) => {
  let {journeyId, inArguments} = req.body
  let {Telefono} = inArguments[0]
  var smsText = inArguments[1]["smsText"];
  if(inArguments[2]["Nombre"].length > 0){
    smsText = smsText.replace('%%Nombre%%', inArguments[2]["Nombre"]); 
  }
  /*
  if(inArguments[2]["Nombre"].length == 0 && smsText.indexOf("%%Nombre%%")){
    smsText = smsText.replace('%%vencimiento%%', '-');
  

  var var1 = inArguments[3]["var1"];
  var var2 = inArguments[4]["var2"];
  var template_field1 = inArguments[5]["template_field1"];
  var template_field2 = inArguments[6]["template_field2"];

  if (var1 !== null && var1 !== undefined && var1 !== "") {
    let position1 = smsText.search('%%' + var1 + '%%');
    if(position1 != -1){
      smsText = smsText.replace('%%' + var1 +'%%', template_field1);
    }
  }

  if (var2 !== null && var2 !== undefined && var2 !== "") {
    let position2 = smsText.search('%%' + var2 + '%%');
    if(position2 != -1){
      smsText = smsText.replace('%%' + var2 +'%%', template_field2);
    }

  }
  */
  console.log("SMS Bancolombia");
  console.log(smsText);

  controller(Telefono, smsText)
  .then(status => {
    console.log(status);
    res.send(status)
  }).catch(error => {
    console.log("error: " + error);
    res.send(error)
  })
});

// Routes for saving, publishing and validating the custom activity. In this case
// nothing is done except decoding the jwt and replying with a success message.
router.post(/\/(save|publish|validate)/, (req, res) => {
  res.status(200).json({ success: true });
});

module.exports = router;
