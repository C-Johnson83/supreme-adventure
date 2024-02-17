// import { UPDATE_THEME } from '../../utils/actions';
// import { useStoreContext } from '../../utils/GlobalStore';
import './assets/home.css'
const Home = () => {
	// const [state, dispatch] = useStoreContext();

	return (
		<>
			<div className="hero">
				<div className="overlay"></div>
				<div className="content">
					<h1>Welcome to Our Event Registry</h1>
					<p>Make your special occasions memorable with our registry service.<br />Whether it's a wedding, baby shower, or dinner event, find and manage your gifts hassle-free!</p>
					<a href="#" className="btn">Get Started</a>
				</div>
			</div>
		</>
	);

};

export default Home;