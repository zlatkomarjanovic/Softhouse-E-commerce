const Commerce = require('@chec/commerce.js');

const commerce = new Commerce(
	'pk_test_358871ee6839c49ff467c487b783616975366ecc9b8f6',
	true
);

var obj;

commerce.cart.retrieve().then((cart) => (obj = cart));
