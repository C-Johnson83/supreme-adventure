import { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		darkMode: true,
		test: 'Hello World',
		userData: {
			firstName: '',
			lastName: ''
		}
	});
	return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
	return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };