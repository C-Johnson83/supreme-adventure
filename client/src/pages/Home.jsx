
//import '../css/home.css'
import Auth from '../utils/auth';


const Home = () => {


	return (
		<>
              {Auth.loggedIn() ? (
                <>
                  Logged In!
                </>
              ) : (
                //<Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
				<div className="hero homeHero">
				<div className="overlay"></div>
				<div className="content">
					<h1>Welcome to Our Event Registry</h1>
					<p>Make your special occasions memorable with our registry service.<br />Whether it's a wedding, baby shower, or dinner event, find and manage your gifts hassle-free!</p>

				</div>
				</div>
              )}


			
		</>
	);

};

export default Home;