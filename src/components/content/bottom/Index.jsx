function Index({ image, number, title, description }) {
	return (
		<div className='h-40 flex flex-row gap-2'>
			<div className='w-40'>
				<img src={image} alt={title} className='w-full' />
			</div>

			<div className='flex flex-col justify-between'>
				<h1 className='text-2xl font-extrabold opacity-50'>{number}</h1>
				<h2 className='text-xl font-bold'>{title}</h2>
				<p className='text-base opacity-70'>{description}</p>
			</div>
		</div>
	);
}

export default Index;
