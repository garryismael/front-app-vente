import { useEffect, useState } from 'react';
import ProductItem from '../components/product/Item';
import { get_products } from '../services/product';
import imgSearch from '../assets/images/search.png';

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

	const onSearch = async (value) => {
		const response = await get_products(value);
		setProducts(response.data);
	}
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
									className='flex items-center search-field'
									id='store-nav-content'>
									<input
										className='border inline-block pl-3  py-2 rounded-md no-underline hover:text-black bg-white border-gray-200'
										onChange={(e) =>
											onSearch(e.target.value)
										}
									/>
									<img
										src={imgSearch}
										alt='Search Img'
										className='img-search'
									/>
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

