import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Me() {
	const user = useSelector((state) => state.auth.user);
	const img = `${process.env.REACT_APP_BASE_URL}/users/images/${user.profile}`;
	return (
		<div className='flex flex-col items-center max-w-sm py-20 mx-auto my-auto mt-16 overflow-hidden rounded-lg shadow-lg'>
			<img
				src={img}
				alt={'Profile Of ' + user.name}
				className='w-32 h-32 mx-auto rounded-full aspect-square'
			/>
			<div className='space-y-4'>
				<div className='my-2 space-y-1'>
					<h2 className='text-xl text-center font-semibold sm:text-2xl'>
						{user.name}
					</h2>
				</div>
				<div className='flex flex-col'>
					<p className='text-xs sm:text-base '>{user.address}</p>
					<p>{user.email}</p>
					<div className='flex flex-col gap-2 mt-3'>
						<Link to="/user/edit" className='bg-blue-600 hover:bg-blue-700 text-white py-1 px-3'>Edit</Link>
						<Link to='/user/password/edit' className='border border-blue-600 hover:bg-blue-600 hover:text-white py-1 px-3'>Change Password</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

