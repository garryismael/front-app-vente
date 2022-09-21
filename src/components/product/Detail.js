import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';

export default function ProductDetail() {
	const location = useLocation();
	const [value, setValue] = useState(1);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const setCartValue = () => {
		dispatch(addToCart({
			...location.state.product,
			quantity: value
		}));
		navigate("/cart");
	};
	return (
		<section className='overflow-hidden text-gray-700 bg-white body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-wrap mx-auto lg:w-4/5'>
					<img
						alt='e-commerce'
						className='object-cover object-center w-full border border-gray-200 rounded lg:w-1/2'
						src={location.state.img}
					/>
					<div className='w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0'>
						<h1 className='mb-1 text-3xl font-medium text-gray-900 title-font'>
							{location.state.product.name}
						</h1>

						<p className='mb-3 leading-relaxed'>
							{location.state.product.description}
						</p>
						<span className='text-2xl font-medium text-gray-900 title-font'>
							Price: ${location.state.product.price}
						</span>
						<div className='flex mt-2'>
							<div className='w/50'>
								<label
									htmlFor='visitors'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
									Total
								</label>
								<input
									type='number'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 '
									min={0}
									value={value}
									required
									onChange={(e) => setValue(e.target.value)}
								/>
							</div>
							<button onClick={setCartValue} className='px-6 my-2 ml-auto text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600'>
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

