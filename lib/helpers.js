var ET_Client = require('../lib/sfmc_client');

var Helpers = {
	
	sendCodeOrData: function (func, req, res) {
		if (ET_Client) {
			func( req, res );
		} else {
			res.status(200).send( func.toString() );
		}
	},
	
	parseSOAPresults: (results) => {
		return results.map( element => {
			var row = {};
			element.Properties.Property.forEach( element => {
				row[`${element.Name}`] = element.Value;
			})
			return row;
		})
	},

	replacePlaceholders: (object, array) => {
		let newObject = object
		for (let [key, value] of Object.entries(object)){
			let replacedString = value;
			array.forEach(element => {
				let placeholder = Object.keys(element)[0];
				let string = element[placeholder]
				replacedString = replacedString.replace(`<<${placeholder}>>`, string)
			});
			newObject[key] = replacedString;
		}
		return newObject;
	},

	mergeInArguments: (inArguments) => {
		let object = {}
		inArguments.forEach(element => {
			Object.assign(object, element)
		});
		return object
	}
	
};

module.exports = Helpers;	