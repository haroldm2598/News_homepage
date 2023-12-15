import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import DataRow from './bottom/Index';

function BottomContent() {
	const { bottomData } = useSelector((state) => state.dataTemplate);

	return (
		<section className='md:mt-8 md:col-span-full md:row-start-3 flex flex-col md:flex-row gap-4'>
			{bottomData?.map((item, index) => (
				<Fragment key={index}>
					<DataRow
						image={item.image}
						number={item.number}
						title={item.title}
						description={item.description}
					/>
				</Fragment>
			))}
		</section>
	);
}

export default BottomContent;
