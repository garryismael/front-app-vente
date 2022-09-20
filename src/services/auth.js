import axios from '../utils/axios';

const URL = 'auth';

export async function login_user(data) {
	const response_login = await axios.post(`${URL}/login`, data);
	if (response_login.status === 200) {
		const token = response_login.data.access_token;
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		const response = await me();
		if (response.status === 200) {
			return {
				user: response.data,
				token,
			};
		}
	}
	return null;
}

export async function me() {
	return axios.get(`${URL}/me`);
}

export async function register_user(data) {
	return await axios.post(`${URL}/register`, data);
}

