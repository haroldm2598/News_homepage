function Index({ title, description, hasHr }) {
	return (
		<div>
			<h1 className='text-white text-2xl font-bold'>{title}</h1>
			<p className='text-white opacity-75'>{description}</p>
			{hasHr && <hr className='my-8 opacity-50' />}
		</div>
	);
}

export default Index;
