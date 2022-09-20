import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';

export default function About() {
	return (
		<div className='container mx-auto'>
			<div className='p-6 pt-10 pb-10 pl-4 pr-4 text-center rounded-lg'>
				<h1 className='p-2 text-2xl'>About Us</h1>
				<p className='p-2 text-base'>Some text about who we are and what we do.</p>
			</div>

			<h2 className='p-4 text-2xl text-center'>Our Team</h2>
			<div className='flex gap-10 mx-auto'>
				<div className='col'>
					<div className='bg-white border border-gray-200 rounded-lg shadow-md'>
						<img
							src={team1}
							alt='Jane'
							className='about-img'
						/>
						<div className='p-5'>
							<h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Jane Doe</h2>
							<p className='text-lg'>CEO & Founder</p>
							<p className='mb-3 font-normal text-gray-700'>
								Some text that describes me lorem ipsum ipsum
								lorem.
							</p>
							<p className='mb-2 font-normal text-gray-700'>jane@example.com</p>
							<p className='flex'>
								<button className='inline-flex items-center p-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600'>Contact</button>
							</p>
						</div>
					</div>
				</div>

				<div className='col'>
					<div className='bg-white border border-gray-200 rounded-lg shadow-md'>
						<img
							src={team2}
							alt='Mike'
						/>
						<div className='p-5'>
							<h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Mike Ross</h2>
							<p className='text-lg'>Art Director</p>
							<p className='mb-3 font-normal text-gray-700'>
								Some text that describes me lorem ipsum ipsum
								lorem.
							</p>
							<p className='mb-2 font-normal text-gray-700'>mike@example.com</p>
							<p>
								<button className='inline-flex items-center p-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600'>Contact</button>
							</p>
						</div>
					</div>
				</div>

				<div className='col'>
					<div className='bg-white border border-gray-200 rounded-lg shadow-md'>
						<img
							src={team3}
							alt='John'
						/>
						<div className='p-5'>
							<h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>John Doe</h1>
							<p className='text-lg'>Designer</p>
							<p className='mb-3 font-normal text-gray-700'>
								Some text that describes me lorem ipsum ipsum
								lorem.
							</p>
							<p className='mb-2 font-normal text-gray-700'>john@example.com</p>
							<p>
								<button className='inline-flex items-center p-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600'>Contact</button>
							</p>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
