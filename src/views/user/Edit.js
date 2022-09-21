import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import { setMe } from '../../redux/authSlice';
import { edit_me, me } from '../../services/auth';

export default function EditUser() {
	const user = useSelector((state) => state.auth.user);
	const [name, setName] = useState(user.name);
	const [profile, setProfile] = useState(null);
	const [address, setAddress] = useState(user.address);
	const [contact, setContact] = useState(user.contact);
	const [email, setEmail] = useState(user.email);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const inputs = [
		{
			label: 'Name',
			type: 'text',
			onChange: function onSetName(e) {
				setName(e.target.value);
			},
			value: name,
			info: '',
		},
		{
			label: 'Profile Image',
			type: 'file',
			onChange: function onSetAddress(e) {
				setProfile(e.target.files[0]);
			},
			value: '',
			info: '(optional)',
		},
		{
			label: 'Address',
			type: 'text',
			onChange: function onSetAddress(e) {
				setAddress(e.target.value);
			},
			value: address,
			info: '',
		},
		{
			label: 'Contact',
			type: 'text',
			onChange: function onSetContact(e) {
				setContact(e.target.value);
			},
			value: contact,
			info: '',
		},
		{
			label: 'Email',
			type: 'email',
			onChange: function onSetEmail(e) {
				setEmail(e.target.value);
			},
			value: email,
			info: '',
		},
	];

	const handleEdit = async () => {
		const formData = new FormData();
		formData.append('name', name);
		formData.append('profile', profile);
		formData.append('address', address);
		formData.append('contact', contact);
		formData.append('email', email);

		let response = await edit_me(formData);
		if (response.status === 200) {
			response = await me();
			if (response.status === 200) {
                dispatch(setMe(response.data));
				navigate('/user');
			}
		}
	};

	return (
		<div className='py-30 mt-4'>
			<div className='flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-md'>
				<div className='w-full p-9 mx-auto'>
					<h2 className='text-2xl font-semibold text-gray-700 text-center'>
						Edit Me
					</h2>
					{inputs.map((input) => (
						<InputField
							key={input.label}
							label={input.label}
							type={input.type}
							onChange={input.onChange}
							value={input.value}
							info={input.info}
						/>
					))}

					<div className='mt-8'>
						<button
							onClick={handleEdit}
							className='bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600'>
							Edit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

