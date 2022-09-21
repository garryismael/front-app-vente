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
	return await axios.post(`${URL}/register`, data, {
		headers: { 'Content-Type': 'multipart/form-data' },
	});
}

export async function edit_me(data) {
	return await axios.put(`${URL}/me/edit`, data, {
		headers: { 'Content-Type': 'multipart/form-data' },
	});
}

export async function change_my_password(data) {
	return await axios.put(`${URL}/password/edit`, data);
}

export async function logout_user() {
	return await axios.post(`${URL}/logout`);
}
