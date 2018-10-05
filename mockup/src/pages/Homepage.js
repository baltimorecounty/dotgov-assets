import React from 'react';
import { Link } from 'react-router-dom';

export default class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<h1>Baltimore County Government</h1>
				<p>this is a placeholder page for the homepage</p>
				<Link to='/design-system'>Design System</Link>
			</React.Fragment>
		);
	}
}
