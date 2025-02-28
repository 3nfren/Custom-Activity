var ET_Client = require('sfmc-fuelsdk-node');
require('dotenv').config();

var Bluebird = require('bluebird');

var Campaign = require('../node_modules/sfmc-fuelsdk-node/lib/objects/Campaign');
var CampaignAsset = require('../node_modules/sfmc-fuelsdk-node/lib/objects/CampaignAsset');
var ContentArea = require('../node_modules/sfmc-fuelsdk-node/lib/objects/ContentArea');
var DataExtension = require('../node_modules/sfmc-fuelsdk-node/lib/objects/DataExtension');
var DataExtensionColumn = require('../node_modules/sfmc-fuelsdk-node/lib/objects/DataExtensionColumn');
var DataExtensionRow = require('../node_modules/sfmc-fuelsdk-node/lib/objects/DataExtensionRow');
var Email = require('../node_modules/sfmc-fuelsdk-node/lib/objects/Email');
var Folder = require('../node_modules/sfmc-fuelsdk-node/lib/objects/Folder');
var List = require('../node_modules/sfmc-fuelsdk-node/lib/objects/List');
var ListSubscriber = require('../node_modules/sfmc-fuelsdk-node/lib/objects/ListSubscriber');
var Subscriber = require('../node_modules/sfmc-fuelsdk-node/lib/objects/Subscriber');
var TriggeredSend = require('../node_modules/sfmc-fuelsdk-node/lib/objects/TriggeredSend');
var BounceEvent = require('../node_modules/sfmc-fuelsdk-node/lib/objects/BounceEvent');
var ClickEvent = require('../node_modules/sfmc-fuelsdk-node/lib/objects/ClickEvent');
var OpenEvent = require('../node_modules/sfmc-fuelsdk-node/lib/objects/OpenEvent');
var SentEvent = require('../node_modules/sfmc-fuelsdk-node/lib/objects/SentEvent');
var UnsubEvent = require('../node_modules/sfmc-fuelsdk-node/lib/objects/UnsubEvent');

let SFMC_Client;
const clientId = process.env.CLIENT_ID ? process.env.CLIENT_ID : "";
const clientSecret = process.env.CLIENT_SECRET ? process.env.CLIENT_SECRET : "";
const stack = process.env.STACK ? process.env.STACK : "";
const origin = process.env.BASE_URL ? process.env.BASE_URL : "";
const authOrigin = process.env.AUTH_URL ? process.env.AUTH_URL : "";
const soapOrigin = process.env.SOAP_URL ? process.env.SOAP_URL : "";
const accountId = process.env.ACCOUNTID ? process.env.ACCOUNTID : "";
const scope = process.env.SCOPE ? process.env.SCOPE : "";
const authOptions = {authVersion : 2, accountId : accountId, scope : scope};


ET_Client.prototype.campaign = function(options) {
	return Bluebird.promisifyAll(new Campaign(this, options));
};

ET_Client.prototype.campaignAsset = function(options) {
	return Bluebird.promisifyAll(new CampaignAsset(this, options));
};

ET_Client.prototype.contentArea = function(options) {
	return Bluebird.promisifyAll(new ContentArea(this, options));
};

ET_Client.prototype.dataExtension = function(options) {
	return Bluebird.promisifyAll(new DataExtension(this, options));
};

ET_Client.prototype.dataExtensionColumn = function(options) {
	return Bluebird.promisifyAll(new DataExtensionColumn(this, options));
};

ET_Client.prototype.dataExtensionRow = function(options) {
	return Bluebird.promisifyAll(new DataExtensionRow(this, options));
};

ET_Client.prototype.email = function(options) {
	return Bluebird.promisifyAll(new Email(this, options));
};

ET_Client.prototype.folder = function(options) {
	return Bluebird.promisifyAll(new Folder(this, options));
};

ET_Client.prototype.list = function(options) {
	return Bluebird.promisifyAll(new List(this, options));
};

ET_Client.prototype.listSubscriber = function(options) {
	return Bluebird.promisifyAll(new ListSubscriber(this, options));
};

ET_Client.prototype.subscriber = function(options) {
	return Bluebird.promisifyAll(new Subscriber(this, options));
};

ET_Client.prototype.triggeredSend = function(options) {
	return Bluebird.promisifyAll(new TriggeredSend(this, options));
};

ET_Client.prototype.bounceEvent = function(options) {
	return Bluebird.promisifyAll(new BounceEvent(this, options));
};

ET_Client.prototype.clickEvent = function(options) {
	return Bluebird.promisifyAll(new ClickEvent(this, options));
};

ET_Client.prototype.openEvent = function(options) {
	return Bluebird.promisifyAll(new OpenEvent(this, options));
};

ET_Client.prototype.sentEvent = function(options) {
	return Bluebird.promisifyAll(new SentEvent(this, options));
};

ET_Client.prototype.unsubEvent = function(options) {
	return Bluebird.promisifyAll(new UnsubEvent(this, options));
};

if (clientId) {
  SFMC_Client = new ET_Client(clientId, clientSecret, stack, {origin, authOrigin, soapOrigin, authOptions});
  
  // SFMC_Client.FuelAuthClient.getAccessToken(SFMC_Client.FuelAuthClient)
}


module.exports = SFMC_Client;