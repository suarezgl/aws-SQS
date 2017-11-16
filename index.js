var config = require('./config/config');
var file   = require('./file');
var AWS    = require('aws-sdk');
var fileHandler = new file("./messages.txt");



AWS.config.update({
				region : config.region,
				accessKeyId : config.accessKeyId,
				secretAccessKey: config.secretAccessKey
});

var sqs = new AWS.SQS();

var params = {
    QueueUrl:config.queueUrl, 
    AttributeNames: [ 'All' ],
    MaxNumberOfMessages: 5,
    VisibilityTimeout: 0,
    WaitTimeSeconds: 0
};
sqs.receiveMessage(params, function(err, data) {
  if (err){ 
    console.log(err, err.stack);
  } 
  else{     
      if(data && data.Messages){
        data["Messages"].forEach(function(message){
          fileHandler.storageMessage(message.Attributes.SentTimestamp+ " -->" +message.Body+" \n");
        });
      }
  	}         
});