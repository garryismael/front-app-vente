import { Link, Outlet } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import '../css/layout.css';
import { logout_user } from '../services/auth';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Layout() {
	const cart = useSelector((state) => state.purchase.cart);
	const user = useSelector((state) => state.auth.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const getTotalQuantity = () => {
		let total = 0;
		cart.forEach((item) => {
			total += parseInt(item.quantity);
		});
		return total;
	};

	const onLogout = async () => {
		await logout_user();
		dispatch(logout());
		navigate('/');
	};

	return (
		<>
			<nav
				id='header'
				className='top-0 z-30 w-full py-1'>
				<div className='container flex flex-wrap items-center justify-between w-full px-6 py-3 mx-auto mt-0'>
					<label
						htmlFor='menu-toggle'
						className='block cursor-pointer md:hidden'>
						<svg
							className='text-gray-900 fill-current'
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 20 20'>
							<title>menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
						</svg>
					</label>
					<input
						className='hidden'
						type='checkbox'
						id='menu-toggle'
					/>

					<div
						className='order-3 hidden w-full md:flex md:items-center md:w-auto md:order-1'
						id='menu'>
						<nav>
							<ul className='items-center justify-between pt-4 text-base text-gray-700 md:flex md:pt-0'>
								<li>
									<Link
										className='inline-block px-4 py-2 text-xl no-underline hover:text-black hover:underline'
										to='/'>
										Shop
									</Link>
								</li>
								<li>
									<Link
										className='inline-block px-4 py-2 text-xl no-underline hover:text-black hover:underline'
										to='/about'>
										About
									</Link>
								</li>
							</ul>
						</nav>
					</div>

					<div className='order-1 md:order-2'>
						<span className='flex items-center text-xl font-bold tracking-wide text-gray-800 no-underline hover:no-underline '>
							<svg
								className='mr-2 text-gray-800 fill-current'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'>
								<path d='M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z' />
							</svg>
							NORDICS
						</span>
					</div>

					<div
						className='flex items-center order-2 md:order-3'
						id='nav-content'>
						{user !== null && (
							<Link
								className='inline-block no-underline hover:text-black'
								to='user'>
								<svg
									className='fill-current hover:text-black'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'>
									<circle
										fill='none'
										cx='12'
										cy='7'
										r='3'
									/>
									<path d='M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z' />
								</svg>
							</Link>
						)}
						<Link
							className='inline-block pl-3 no-underline hover:text-black'
							to='/cart'>
							<span className='relative inline-block mt-3'>
								<svg
									className='fill-current hover:text-black'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'>
									<path d='M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z' />
									<circle
										cx='10.5'
										cy='18.5'
										r='1.5'
									/>
									<circle
										cx='17.5'
										cy='18.5'
										r='1.5'
									/>
								</svg>
								<span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
									{getTotalQuantity() || 0}
								</span>
							</span>
						</Link>
						<div className='flex gap-3'>
							{user === null && (
								<Link
									className='bg-blue-700 text-white px-3 py-2 ml-6 rounded'
									to='/login'>
									Login
								</Link>
							)}
							{user !== null && (
								<button
									onClick={onLogout}
									className='w-full ml-6 px-4 py-2 font-semibold bg-transparent border border-blue-600 rounded hover:bg-gray-100 hover:border-transparent'>
									Logout
								</button>
							)}
						</div>
					</div>
				</div>
			</nav>
			<Outlet />
		</>
	);
}

