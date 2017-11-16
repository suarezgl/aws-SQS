"use strict";
const fs = require('fs');

class File {

	constructor(file){
	 	this.file = file;
	}
	storageMessage(msg){
		fs.appendFile(this.file, msg, function (err) {
		  if (err) throw err;
		  return true;
		});
	}
}

module.exports = File;