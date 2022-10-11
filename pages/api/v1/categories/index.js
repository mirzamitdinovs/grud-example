import data from '/data/categories.json';
export default async function handler(req, res) {
	switch (req.method) {
		case 'POST':
			res.status(200).json('post');
			break;
		case 'PUT':
			res.status(200).json('put');
			break;
		case 'DELETE':
			res.status(200).json('delete');
			break;
		default:
			res.status(200).json(data);
			break;
	}
}
