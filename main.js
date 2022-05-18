import Handlebars from 'handlebars';
import { readFile } from 'node:fs/promises';

// Returns a function, but not fill placeholders
function newTemplate(source) {
	return Handlebars.compile(source);
}

async function render(path, placeholders) {
	try {
		// If you passed encoding, readFile returns Buffer
		const source = await readFile(path, { encoding: 'utf-8' });

		return newTemplate(source)
			.call(null, placeholders);
	} catch (err) {
		console.log(err.message);
	}
}

const fileDir = '/home/romaro/handlebars/templates/';
const fileName = 'index.html';

const path = fileDir + fileName;
const placeholders = {
	username: 'Roma'
};
render(path, placeholders)
	.then(rs => console.log(rs))
	.catch(err => console.log(err.message));