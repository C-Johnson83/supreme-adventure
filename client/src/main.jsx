import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';
import LoginForm from './components/LoginForm.jsx';
import Event from './pages/Event.jsx';
import SignupForm from './components/SignupForm.jsx';
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