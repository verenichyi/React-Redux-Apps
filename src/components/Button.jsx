import React from 'react';

const Button = ({children}) => {
	// const [isToggled, setIsToggled] = useState(true);
	//
	const handleToggle = () => {
		// setIsToggled((state) => !state);
	}
	return (
		<button  type={'button'}>{children}</button>
	);
}

export default Button;