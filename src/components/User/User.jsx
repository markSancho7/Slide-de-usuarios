const User = props => {
	return (
		<>
			<img src={props.profileImage} alt='' />
			<h3>{props.title}</h3>
			<h3>{props.name}</h3>
			<h4>{props.username}</h4>
			<h4>{props.email}</h4>
			<p>{props.isActive ? 'Activo':'Inactivo'}</p>
		</>
	);
};
export default User;
