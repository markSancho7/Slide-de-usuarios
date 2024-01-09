
import { useState } from "react";
import AllUsers from "./components/AllUsers/AllUsers";
import { USERS } from "./constants/users";
import Filters from "./components/filters/Filters";

//const filteredUsers = USERS.filter(user=>user.active)


const App = () => {
	const[isChecked, setIsChecked] = useState(false);


	return <>
	<h1>{isChecked ? 'CHECKED' : 'NO CHECKED'}</h1>
	<input type="checkbox" onChange={()=> changeChecked(setIsChecked, event)}/>
	</>
	
};
const changeChecked = (setIsChecked , event)=>{
	setIsChecked(event.target.checked);
}






export default App;

// Función que reciba un boolean e imprima por consola los usuarios activos

	//const [filteredUsers, setFilteredUsers] =  useState(USERS)
	// return <>
	// <Filters ></Filters>
	// <AllUsers users={filteredUsers}/>
	// </>
	
	
