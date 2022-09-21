import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/modal';
import '../css/cart.css';
import { clearCart, removeItem, setQuantity } from '../redux/cartSlice';
import { create_purchases } from '../services/purchase';

export default function Cart() {
	const [showModal, setShowModal] = useState(false);
	const [clearModal, setClearModal] = useState(false);
	const [purchaseModal, setPurchaseModal] = useState(false);
	const [done, setDone] = useState(false);

	const cart = useSelector((state) => state.purchase.cart);
	const user = useSelector((state) => state.auth.user);
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const getTotalSum = () => {
		let total = 0;
		cart.forEach((v) => {
			total += v.quantity * v.price;
		});
		return total;
	};

	const showButtons = () => cart.length <= 0;

	const updateQuantity = (id, quantity) => {
		dispatch(
			setQuantity({
				id,
				quantity,
			}),
		);
	};

	const deleteCart = (id) => {
		dispatch(removeItem(id));
		setShowModal(false);
	};

	const onDelete = () => {
		setShowModal(true);
	};

	const cancelDelete = () => {
		setShowModal(false);
	};

	const clearPurchase = () => {
		dispatch(clearCart());
		setClearModal(false);
	};

	const proceedPurchase = async () => {
		setPurchaseModal(false);
		const data = cart.map((v) => {
			return { product_id: v.id, quantity: v.quantity };
		});
		const response = await create_purchases(data);
		if (response.status === 201) {
			setDone(true);
			setTimeout(() => {
				setDone(false);
			}, 2000);
			clearPurchase();
		}
	};

	const onSetPurchaseModal = () => {
		user !== null ? setPurchaseModal(true) : navigate('/login');
	};

	return (
		<div className='container relative mx-auto mt-5 overflow-x-auto'>
			{done && (
				<div className='py-2 font-bold tracking-tight text-center text-gray-100 bg-green-400 text-md w/10'>
					Purchase Done
				</div>
			)}
			<div className='flex items-center justify-end gap-2 py-2'>
				<button
					className={'bg-red-600 p-2 text-white'}
					hidden={showButtons()}
					onClick={() => setClearModal(true)}>
					Clear All
				</button>
				<button
					className={'bg-blue-600 p-2 text-white'}
					hidden={showButtons()}
					onClick={onSetPurchaseModal}>
					Purchase
				</button>
			</div>
			{clearModal && (
				<Modal
					setModal={clearPurchase}
					cancelDelete={() => setClearModal(false)}
					message='Clear all your purchase?'
					btnCls='bg-red-500 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300'
					messageCls='text-red-600 bg-red-100'
					btnLabel='Clear All'
				/>
			)}

			{purchaseModal && (
				<Modal
					setModal={proceedPurchase}
					cancelDelete={() => setPurchaseModal(false)}
					message='Your purchase will be proceeded'
					btnCls='bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
					messageCls='text-blue-600 bg-blue-100'
					btnLabel='Proceed Purchase'
				/>
			)}
			<table className='w-full text-sm text-left text-gray-500 '>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50'>
					<tr>
						<th
							scope='col'
							className='px-6 py-3'>
							ID
						</th>
						<th
							scope='col'
							className='px-6 py-3'>
							Name
						</th>
						<th
							scope='col'
							className='px-6 py-3'>
							Price
						</th>
						<th
							scope='col'
							className='py-3'>
							Total
						</th>
						<th
							scope='col'
							className='py-3'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{cart.map((product) => {
						return (
							<tr
								className='bg-white'
								key={product.id}>
								<th
									scope='row'
									className='px-6 py-4 font-medium whitespace-nowrap'>
									{product.id}
								</th>
								<td className='px-6 py-4'>{product.name}</td>
								<td className='px-6 py-4'>${product.price}</td>
								<td className='py-4'>
									<input
										type='number'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 '
										min={0}
										value={product.quantity}
										required
										onChange={(e) =>
											updateQuantity(
												product.id,
												e.target.value,
											)
										}
									/>
								</td>
								<td className='py-4 cursor-pointer'>
									<button
										onClick={onDelete}
										type='button'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											version='1.1'
											width='24'
											height='24'
											viewBox='0 0 80 80'>
											<defs></defs>
											<g className='trash-g'>
												<path
													d='M 73.771 19.39 c -0.378 -0.401 -0.904 -0.628 -1.455 -0.628 H 17.685 c -0.551 0 -1.077 0.227 -1.455 0.628 c -0.378 0.4 -0.574 0.939 -0.542 1.489 l 3.637 62.119 C 19.555 86.924 22.816 90 26.75 90 h 36.499 c 3.934 0 7.195 -3.076 7.427 -7.003 l 3.637 -62.119 C 74.344 20.329 74.148 19.79 73.771 19.39 z'
													className='trash-icon'
													transform=' matrix(1 0 0 1 0 0) '
													strokeLinecap='round'
												/>
												<path
													d='M 78.052 14.538 H 11.948 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 66.104 c 1.104 0 2 0.896 2 2 S 79.156 14.538 78.052 14.538 z'
													className='trash-icon'
													transform=' matrix(1 0 0 1 0 0) '
													strokeLinecap='round'
												/>
												<path
													d='M 57.711 14.538 H 32.289 c -1.104 0 -2 -0.896 -2 -2 V 7.36 c 0 -4.059 3.302 -7.36 7.36 -7.36 h 14.703 c 4.058 0 7.359 3.302 7.359 7.36 v 5.178 C 59.711 13.643 58.815 14.538 57.711 14.538 z M 34.289 10.538 h 21.422 V 7.36 c 0 -1.853 -1.507 -3.36 -3.359 -3.36 H 37.649 c -1.853 0 -3.36 1.507 -3.36 3.36 V 10.538 z'
													className='trash-icon'
													transform=' matrix(1 0 0 1 0 0) '
													strokeLinecap='round'
												/>
												<path
													d='M 57.342 76.103 c -0.039 0 -0.079 -0.001 -0.119 -0.004 c -1.103 -0.064 -1.944 -1.011 -1.879 -2.113 l 2.29 -39.113 c 0.063 -1.103 0.993 -1.952 2.113 -1.88 c 1.103 0.064 1.944 1.011 1.88 2.113 L 59.336 74.22 C 59.274 75.282 58.393 76.103 57.342 76.103 z'
													className='trash-icon'
													transform=' matrix(1 0 0 1 0 0) '
													strokeLinecap='round'
												/>
												<path
													d='M 32.658 76.103 c -1.051 0 -1.933 -0.82 -1.995 -1.883 l -2.29 -39.114 c -0.064 -1.103 0.777 -2.049 1.88 -2.113 c 1.088 -0.062 2.049 0.777 2.113 1.88 l 2.29 39.113 c 0.064 1.103 -0.777 2.049 -1.88 2.113 C 32.737 76.102 32.698 76.103 32.658 76.103 z'
													className='trash-icon'
													transform=' matrix(1 0 0 1 0 0) '
													strokeLinecap='round'
												/>
												<path
													d='M 45 76.103 c -1.104 0 -2 -0.896 -2 -2 V 34.989 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 39.114 C 47 75.207 46.104 76.103 45 76.103 z'
													className='trash-icon'
													transform=' matrix(1 0 0 1 0 0) '
													strokeLinecap='round'
												/>
											</g>
										</svg>
									</button>
									{showModal && (
										<Modal
											setModal={() =>
												deleteCart(product.id)
											}
											cancelDelete={cancelDelete}
											message='Are you sure?'
											btnCls='bg-red-500 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300'
											messageCls='text-red-600 bg-red-100'
											btnLabel='Delete'
										/>
									)}
								</td>
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					<tr className='bg-white'>
						<th></th>
						<th></th>
						<th className='px-6 py-4'>TOTAL</th>
						<th className='py-4'>
							<div className='text-xs'>${getTotalSum()}</div>
						</th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}

