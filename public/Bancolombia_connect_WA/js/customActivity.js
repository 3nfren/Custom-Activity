'use strict';
define(['./postmonger'], function (Postmonger) {

  var connection = new Postmonger.Session();
  var lastStepEnabled = false;
  var payload = {};
  var journey = {};
  var event = {};

  $(window).ready(function () {
    // JB will respond the first time 'ready' is called with 'initActivity'
    connection.trigger('ready');
  });

  connection.on('initActivity', initialize);
	connection.on('clickedNext', save);
  connection.on('requestedInteraction', requestedInteractionHandler);
  
  function initialize(data) {

    if (data) {
        payload = data;
    }

    var hasInArguments = Boolean(
        payload['arguments'] &&
        payload['arguments'].execute &&
        payload['arguments'].execute.inArguments &&
        payload['arguments'].execute.inArguments.length > 0
    );

    var inArguments = hasInArguments ? payload['arguments'].execute.inArguments : {};
    connection.trigger('requestInteraction');
    // probando
    // document.getElementById('configuration').value = JSON.stringify(data, null, 2)
    /*
    if (inArguments != null){
      const regex = /\.([^}]+)\}/;
      var template_field1, template_field2;
      

      if (inArguments[5]["template_field1"] != null) {
        template_field1 = inArguments[5]["template_field1"].split('.').pop().split('}')[0];
        document.getElementById('template_field1').value = template_field1;
      }

      if (inArguments[6]["template_field2"] != null) {
        template_field2 = inArguments[6]["template_field2"].split('.').pop().split('}')[0];
        document.getElementById('template_field2').value = template_field2;
      }  
      document.getElementById('contenido').value = inArguments[1]["smsText"];
    }
      */
}
  
  function requestedInteractionHandler (interaction) {
    journey = interaction;
    event = journey.triggers[0].metaData.eventDefinitionKey;
  }

  function save() {
    /*
    var var1 = document.getElementById('template_field1').value;
    var var2 = document.getElementById('template_field2').value;
  
    var template_field1, template_field2;
    if (var1 !== null && var1 !== undefined && var1 !== "") {
      template_field1 = `{{Event.${event}.${var1}}}`;
    }
    if (var2 !== null && var2 !== undefined && var2 !== "") {
      template_field2 = `{{Event.${event}.${var2}}}`;
    }
      */

  payload['arguments'].execute.inArguments = [
    {"Telefono":`{{Event.${event}.Phone}}`},
    {"smsText":document.getElementById('contenido').value},
    {"Nombre":`{{Event.${event}.Nombre}}`}
  ]
    payload['metaData'].isConfigured = true;
    connection.trigger('updateActivity', payload);
	}
})