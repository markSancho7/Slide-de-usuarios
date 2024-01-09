import User from "../User/User";


const AllUsers = (props) =>{
    return props.users.map(user => {
		return <User key={user.userId} {...user}></User>;
	});
}
export default AllUsers