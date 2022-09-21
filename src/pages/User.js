import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Me from '../components/auths/User';

export default function User() {
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.user);

	useEffect(() => {
		if (user === null) {
			navigate("/login");
		}
	});

	return (
		user !== null && <Me/>
	);
}

