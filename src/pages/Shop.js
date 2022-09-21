import { useEffect, useState } from 'react';
import ProductItem from '../components/product/Item';
import { get_products } from '../services/product';

export default function Shop() {
	const [products, setProducts] = useState([]);
	const [onLoading, setOnLoading] = useState(true);
	useEffect(() => {
		const fetch_data = async () => {
			const response = await get_products();
			setProducts(response.data);
			setOnLoading(false);
		};
		fetch_data();
	}, []);

	return (
		<div>
			{!onLoading && (
				<div className='container mx-auto'>
					<div className='flex flex-wrap items-center p-6 pt-10 pb-12 mx-auto'>
						<nav
							id='store'
							className='z-30 w-full px-6 py-1 '>
							<div className='container flex flex-wrap items-center justify-between w-full px-2 py-3 mx-auto mt-0'>
								<span
									className='text-xl font-bold tracking-wide text-gray-800 no-underline uppercase hover:no-underline '
									href='#'>
									Store
								</span>

								<div
									className='flex items-center'
									id='store-nav-content'>
									<span
										className='inline-block pl-3 no-underline hover:text-black'
										href='#'>
										<svg
											className='fill-current hover:text-black'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'>
											<path d='M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z' />
										</svg>
									</span>

									<span
										className='inline-block pl-3 no-underline hover:text-black'
										href='#'>
										<svg
											className='fill-current hover:text-black'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'>
											<path d='M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z' />
										</svg>
									</span>
								</div>
							</div>
						</nav>
						{products.map((product) => (
							<ProductItem
								key={product.id}
								product={product}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

