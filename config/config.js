
const Config = function(){

	return {
		region : process.env.REGION,
		accessKeyId : process.env.ACCESSKEY,
		secretAccessKey : process.env.SECRETACCESSKEY,
		queueUrl:'queue_url'
	}
};

module.exports = Config();