var base58 = require("bs58");

base58.encodeSync = base58.encode;
base58.decodeSync = base58.decode;

base58.encode = function(input, callback) {
	var result = base58.encodeSync(input);
	callback && callback(null, result);
	return result;
}

base58.decode = function(input, callback) {
	if(!callback)
		throw new Error("decode(input, callback) requires callback argument (old sync version deprecated)");

	var result = null;
	try {
		result = base58.decodeSync(input);
	} catch(ex) {
		console.log(ex);
		return callback({ error : ex });
	}

	callback(null, result);
}

module.exports = base58;