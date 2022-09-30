import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/login.css';
import { register_user } from '../../services/auth';
import InputField from '../InputField';
export default function Registration() {
	const [name, setName] = useState('');
	const [profile, setProfile] = useState(null);
	const [address, setAddress] = useState('');
	const [contact, setContact] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const inputs = [
		{
			label: 'Name',
			type: 'text',
			onChange: function onSetName(e) {
				setName(e.target.value);
			},
			value: name,
		},
		{
			label: 'Image Profile',
			type: 'file',
			onChange: function onHandleSelectedFile(e) {
				setProfile(e.target.files[0]);
			},
		},
		{
			label: 'Address',
			type: 'text',
			onChange: function onSetAddress(e) {
				setAddress(e.target.value);
			},
			value: address
		},
		{
			label: 'Contact',
			type: 'text',
			onChange: function onSetContact(e) {
				setContact(e.target.value);
			},
			value: contact
		},
		{
			label: 'Email',
			type: 'email',
			onChange: function onSetEmail(e) {
				setEmail(e.target.value);
			},
			value: email
		},
		{
			label: 'Password',
			type: 'password',
			onChange: function onSetPassword(e) {
				setPassword(e.target.value);
			},
			value: password
		},
	];

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append('name', name);
		formData.append('profile', profile);
		formData.append('address', address);
		formData.append('contact', contact);
		formData.append('email', email);
		formData.append('password', password);

		const response = await register_user(formData);
		if (response.status === 200) {
			navigate('/login');
		}
	};
	return (
		<div className='py-30 mt-4'>
			<div className='flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl'>
				<div className='hidden lg:block lg:w-1/2 bg-cover background-img'></div>
				<div className='w-full p-8 lg:w-1/2'>
					<h2 className='text-2xl font-semibold text-gray-700 text-center'>
						Registration
					</h2>
					{inputs.map((input) => (
						<InputField
							key={input.label}
							label={input.label}
							type={input.type}
							onChange={input.onChange}
							value={input.value}
						/>
					))}

					<div className='mt-8'>
						<button
							onClick={handleSubmit}
							className='bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600'>
							Register
						</button>
					</div>
					<div className='mt-4 flex items-center justify-between'>
						<span className='border-b w-1/5 md:w-1/4'></span>
						<Link
							to='/login'
							className='text-xs text-gray-500 uppercase'>
							or sign in
						</Link>
						<span className='border-b w-1/5 md:w-1/4'></span>
					</div>
				</div>
			</div>
		</div>
	);
}

