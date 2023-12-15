import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoMenu, IoCloseSharp } from 'react-icons/io5';

import logo from '../../assets/images/logo.svg';

function Navbar() {
	const { navbarData } = useSelector((state) => state.dataTemplate);
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='flex md:flex-row md:items-center justify-between'>
			<div>
				<img src={logo} alt='logo brand' />
			</div>

			<span
				className='absolute md:hidden right-10 cursor-pointer'
				onClick={handleMenuClick}
			>
				{isOpen ? <IoCloseSharp size={56} /> : <IoMenu size={56} />}
			</span>

			{/* clean the classname */}
			<ul
				className={`${
					isOpen ? 'top-20 right-0' : 'top-[-800px] right-0'
				} w-56 md:w-auto h-full bg-white md:bg-transparent absolute md:static md:flex flex-col md:flex-row md:gap-5 transition-all duration-500 ease-in overflow-hidden cursor-pointer`}
			>
				{navbarData?.map((item, index) => (
					<li key={index} className='navbarItem mx-4 md:mx-0 py-4 md:py-0'>
						{item}
					</li>
				))}
			</ul>
			{/* 
			<div className='drawer lg:drawer-open'>
				<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
				<label htmlFor='my-drawer-2'>
					<span className='md:hidden' onClick={handleMenuClick}>
						<IoMenu size={56} />
					</span>
				</label>

				<div className='drawer-side'>
					<label
						htmlFor='my-drawer-2'
						aria-label='close sidebar'
						className='drawer-overlay'
					></label>
					<ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
			
						<li>
							<a>Sidebar Item 1</a>
						</li>
						<li>
							<a>Sidebar Item 2</a>
						</li>
					</ul>
				</div>
			</div> */}
		</nav>
	);
}

export default Navbar;
