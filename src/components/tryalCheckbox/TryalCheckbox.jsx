const TryalCheckbox = props => {
	return (
		<input
			type='checkbox'
			onChange={() => props.changeChecked(props.setIsChecked, event)}
		/>
	);
};
export default TryalCheckbox;
