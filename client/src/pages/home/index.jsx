import { UPDATE_THEME } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalStore';

const Home = () => {
	const [state, dispatch] = useStoreContext();

	function changeTheme() {
		dispatch({
			type: UPDATE_THEME
		});
	}

	return (
		<>
			<p>Dark Mode: {state.darkMode.toString()}</p>
			<button onClick={changeTheme}>Change</button>
			<h1>Hello World</h1>
		</>
	);
};

export default Home;