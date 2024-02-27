import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
//import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';
import List from './pages/List.jsx';
import SearchForm from './components/SearchForm.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: '/users',
				element: <Users />
			},

			{
				path: '/list/:id',
				element: <List />
			},
			{
				path: '/searchform',
				element: <SearchForm />
			},

		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);