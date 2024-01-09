const Filters = () =>{
    return <input type="checkbox" onChange={()=> reciveUsers()}></input>
}
const reciveUsers =(users,isActive)=>{
	const activeUsers = users.filter(user=> user.isActive)

}
export default Filters