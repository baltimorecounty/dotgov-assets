import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				{this.props.children}
			</React.Fragment>
		);
	}
}

 Layout.propTypes = propTypes;
 Layout.defaultProps = defaultProps;