import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Users = () => {
	const { loading, data } = useQuery(QUERY_USERS);

	const users = data?.users || [];

	return (
		<>
			<h1>Hello Users</h1>
			{loading ? (
				<p>...loading</p>
			) : (
				<ul>
					{users.map((user) => (
						<>
							<li>{user.username}</li>
							<li>{user.firstName}</li>
							<li>{user.lastName}</li>
						</>
					))}
				</ul>
			)}
		</>
	);
};

export default Users;