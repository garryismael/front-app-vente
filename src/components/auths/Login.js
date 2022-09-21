import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/authSlice';
import { login_user } from '../../services/auth';

import '../../css/login.css';
export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.purchase.cart);

	const navigate = useNavigate();

	const login = async () => {
		const data = await login_user({
			email,
			password,
		});
		if (data != null) {
			dispatch(
				setUser({
					user: data.user,
					token: data.token,
				}),
			);
			if (cart.length > 0) {
				navigate('/cart');
			} else {
				navigate('/');
			}
		}
	};

	return (
		<div className='py-52'>
			<div className='flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl'>
				<div className='hidden bg-cover lg:block lg:w-1/2 background-img'></div>
				<div className='w-full p-8 lg:w-1/2'>
					<h2 className='text-2xl font-semibold text-center text-gray-700'>
						Login
					</h2>
					<p className='mt-2 text-sm text-center text-gray-600'>
						Please Login before making purchases!
					</p>

					<div className='mt-4'>
						<label className='block mb-2 text-sm font-bold text-gray-700'>
							Email Address
						</label>
						<input
							className='block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline'
							type='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='mt-4'>
						<div className='flex justify-between'>
							<label className='block mb-2 text-sm font-bold text-gray-700'>
								Password
							</label>
							<span
								href='#'
								className='text-xs text-gray-500'>
								Forget Password?
							</span>
						</div>
						<input
							className='block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline'
							type='password'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className='mt-8'>
						<button
							onClick={login}
							className='w-full px-4 py-2 font-bold text-white bg-gray-700 rounded hover:bg-gray-600'>
							Login
						</button>
					</div>
					<div className='flex items-center justify-between mt-4'>
						<span className='w-1/5 border-b md:w-1/4'></span>
						<Link
							to='/register'
							className='text-xs text-gray-500 uppercase'>
							or sign up
						</Link>
						<span className='w-1/5 border-b md:w-1/4'></span>
					</div>
				</div>
			</div>
		</div>
	);
}

