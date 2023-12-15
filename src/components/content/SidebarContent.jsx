import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import DataRow from './sidebar/Index';

function SidebarContent() {
	const { sidebarData } = useSelector((state) => state.dataTemplate);
	return (
		<section className='sidebar md:col-start-3 md:col-end-4 md:row-span-2 p-4 flex flex-col justify-around gap-2'>
			<h1 className='sidebar__title text-4xl'>New</h1>

			<div className='[&>*]:mb-4 [&:not(:last-child)]:mb-0'>
				{sidebarData?.map((item, index) => (
					<Fragment key={index}>
						<DataRow
							title={item.title}
							description={item.description}
							hasHr={item.hasHr}
						/>
					</Fragment>
				))}
			</div>
		</section>
	);
}

export default SidebarContent;
