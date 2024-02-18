import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import Users from './pages/users/index.jsx';
import Login from './pages/login/index.jsx';

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
				path: '/login',
				element: <Login />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);