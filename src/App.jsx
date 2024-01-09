import { useState } from 'react';
import AllUsers from './components/AllUsers/AllUsers';
import { USERS } from './constants/users';
import Filters from './components/filters/Filters';
import TryalCheckbox from './components/tryalCheckbox/TryalCheckbox';

const App = () => {
	const [isChecked, setIsChecked] = useState(false);

	const filteredUsers = USERS.filter(user => user.active);
	return (
		<>
			<h1>{isChecked ? 'CHECKED' : 'NO CHECKED'}</h1>
			<TryalCheckbox
				changeChecked={changeChecked}
				setIsChecked={setIsChecked}
			></TryalCheckbox>
			<div>
				<Filters></Filters>
				<AllUsers users={filteredUsers} />
			</div>
		</>
	);
};
const changeChecked = (setIsChecked, event) => {
	setIsChecked(event.target.checked);
};

export default App;

// Función que reciba un boolean e imprima por consola los usuarios activos

// const [filteredUsers, setFilteredUsers] =  useState(USERS)
// return <>

// </>
