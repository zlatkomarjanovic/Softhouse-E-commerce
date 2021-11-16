const Commerce = require('@chec/commerce.js');

const commerce = new Commerce(
	'pk_test_358871ee6839c49ff467c487b783616975366ecc9b8f6',
	true
);
const fs = require('fs');

commerce.cart
	.retrieve()
	.then(async (cart) => {
		const someData = JSON.stringify(cart);
		await fs.writeFile('data.json', someData, function (err) {
			if (err) return console.log(err);
			console.log('Success');
		});
	})
	.catch((err) => console.log(err));
