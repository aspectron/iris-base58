var base58 = require("bs58");

base58.encodeSync = base58.encode;
base58.decodeSync = base58.decode;

base58.encode = function(input, callback) {
	var result = base58.encodeSync(input);
	callback(null, result);
}

base58.decode = function(input, callback) {

	try {
		var result = base58.decodeSync(input);
		callback(null, result);
	} catch(ex) {
		return callback({ error : ex });
	}

}

module.exports = base58;