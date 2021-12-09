import React, {Component} from 'react';

class Button extends Component {
	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);

		this.state = {isToggled: true}
	}

	handleToggle() {
		this.setState((state) => ({
			isToggled: !state.isToggled
		}))
	}

	render() {
		return (
			<button onClick={this.handleToggle} type={'button'}>
				{this.state.isToggled ? 'Hide' : 'Show'}
			</button>
		);
	}
}

export default Button;