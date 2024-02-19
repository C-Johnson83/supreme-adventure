import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import Users from './pages/users/index.jsx';
import LoginForm from './pages/loginForm/index.jsx';
import Event from './pages/event/index.jsx';
import SignupForm from './pages/signupForm/index.jsx';
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
				element: <LoginForm />
			},
			{
				path: '/event',
				element: <Event />
			},
			{
				path: '/signup',
				element: <SignupForm />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);