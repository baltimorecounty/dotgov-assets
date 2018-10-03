import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

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
			</React.Fragment>
		);
	}
}

 Homepage.propTypes = propTypes;
 Homepage.defaultProps = defaultProps;