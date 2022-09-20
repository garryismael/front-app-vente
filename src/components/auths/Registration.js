import { Link } from 'react-router-dom';
import '../../css/login.css';
export default function Registration() {
	return (
		<div className='py-36'>
			<div className='flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl'>
				<div className='hidden lg:block lg:w-1/2 bg-cover background-img'></div>
				<div className='w-full p-8 lg:w-1/2'>
					<h2 className='text-2xl font-semibold text-gray-700 text-center'>
						Registration
					</h2>
					<div className='mt-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2'>
							Name
						</label>
						<input
							className='bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'
							type='text'
						/>
					</div>
					<div className='mt-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2'>
							Address
						</label>
						<input
							className='bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'
							type='text'
						/>
					</div>
					<div className='mt-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2'>
							Email Address
						</label>
						<input
							className='bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'
							type='email'
						/>
					</div>
					<div className='mt-4'>
						<div className='flex justify-between'>
							<label className='block text-gray-700 text-sm font-bold mb-2'>
								Password
							</label>
						</div>
						<input
							className='bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'
							type='password'
						/>
					</div>
					<div className='mt-8'>
						<button className='bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600'>
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

