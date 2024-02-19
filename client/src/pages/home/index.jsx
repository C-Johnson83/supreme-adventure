
import './home.css'
const Home = () => {


	return (
		<>
			<div className="hero homeHero">
				<div className="overlay"></div>
				<div className="content">
					<h1>Welcome to Our Event Registry</h1>
					<p>Make your special occasions memorable with our registry service.<br />Whether it's a wedding, baby shower, or dinner event, find and manage your gifts hassle-free!</p>
					<a href="/login" className="btn homeBtn">Get Started</a>
				</div>
			</div>
		</>
	);

};

export default Home;