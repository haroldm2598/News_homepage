import Navbar from './components/header/Navbar';
import './assets/style/main.scss';
import Content from './pages/Content';

function App() {
	return (
		<div className='app w-full p-5 md:p-10'>
			<header>
				<Navbar />
			</header>

			<main className='mt-10'>
				<Content />
			</main>
		</div>
	);
}

export default App;
