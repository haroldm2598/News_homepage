import MainContent from '../components/content/MainContent';
import SidebarContent from '../components/content/SidebarContent';
import BottomContent from '../components/content/BottomContent';

function Content() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4'>
			<MainContent />
			<SidebarContent />
			<BottomContent />
		</div>
	);
}

export default Content;
