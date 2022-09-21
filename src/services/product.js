import axios from '../utils/axios';

const URL = process.env.REACT_APP_PRODUCT_URL;

export async function get_products(search) {
	const param = search !== undefined ? { search } : {};
	return await axios.get(URL, {
		params: param,
	});
}

