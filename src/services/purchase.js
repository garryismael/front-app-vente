import axios from '../utils/axios';

const URL = process.env.REACT_APP_PURCHASE_URL;

export async function create_purchases(data) {
	return await axios.post(URL, {
		items: data,
	});
}
