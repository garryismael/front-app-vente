export default function InputField({
	label,
	value = '',
	type = 'text',
	onChange,
	info = ''
}) {
	return (
		<div className='mt-4'>
			<label className='block text-gray-700 text-sm font-bold mb-2'>
				{label} {info}
			</label>
			<input
				className='bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'
				type={type}
				value={value}
				onChange={(e) => onChange(e)}
			/>
		</div>
	);
}

