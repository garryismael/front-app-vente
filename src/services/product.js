import axios from '../utils/axios';

const URL = "products";

export async function get_products() {
	return await axios.get(URL);
}

