import User from './components/User/User';
import { USERS } from './constants/users';

const App = () => {
	USERS.map(user => {
		return <User key={user.userId} {...user}></User>;
	});
};

export default App;
