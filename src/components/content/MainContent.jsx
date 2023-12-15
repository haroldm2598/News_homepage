import desktopImg from '../../assets/images/image-web-3-desktop.jpg';
import mobileImg from '../../assets/images/image-web-3-mobile.jpg';

function MainContent() {
	return (
		<section className='md:col-span-2 md:row-span-2'>
			{/* image section */}
			<div>
				<img
					src={desktopImg}
					alt='Background image'
					className='hidden md:block'
				/>
				<img
					src={mobileImg}
					alt='Background image'
					className='block md:hidden'
				/>
			</div>

			{/* content section */}
			<div className='mt-5 flex flex-col md:flex-row gap-5 md:gap-10'>
				<h1 className='main__title flex-1 text-4xl'>
					The Bright Future of Web 3.0?
				</h1>

				<div className='flex-1'>
					<p className='text-sm'>
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>

					<button className='main__cta--btn btn mt-4 w-44 text-white uppercase rounded-sm hover:btn-neutral'>
						Read more
					</button>
				</div>
			</div>
		</section>
	);
}

export default MainContent;
