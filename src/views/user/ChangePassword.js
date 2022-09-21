import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import { change_my_password } from '../../services/auth';
import { get_change_password_errors } from '../../utils/form';

export default function ChangePassword() {
	const [prevPassword, setPrevPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [errors, setErrors] = useState([]);

	const navigate = useNavigate();

	const inputs = [
		{
			label: 'Previous Password',
			type: 'password',
			onChange: function onSetName(e) {
				setPrevPassword(e.target.value);
			},
			value: prevPassword,
		},
		{
			label: 'New Password',
			type: 'password',
			onChange: function onSetAddress(e) {
				setNewPassword(e.target.value);
			},
			value: newPassword,
		},
	];

	const handleEdit = async () => {
		try {
			await change_my_password({
				prevPassword,
				newPassword,
			});
			navigate('/user');
		} catch (error) {
			setErrors(get_change_password_errors(error));
		}
	};

	return (
		<div className='py-30 mt-4'>
			<div className='flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-md'>
				<div className='w-full p-9 mx-auto'>
					<h2 className='text-2xl font-semibold text-gray-700 text-center'>
						Change My Password
					</h2>
					{errors.map((error, index) => (
						<div key={index} className="bg-red-100 rounded-md text-center text-xl p-2 my-2 text-red-600">{error.msg}</div>
					))}
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
							onClick={handleEdit}
							className='bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600'>
							Change
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

