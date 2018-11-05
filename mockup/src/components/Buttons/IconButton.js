import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	icon: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default class IconButton extends React.Component {
	render() {
		const { icon, text} = this.props;
		return (
			<React.Fragment>
				<div className="bc_icon-btn">
					<i className={`fas fa-${icon}`}></i>{text}
				</div>
			</React.Fragment>
		);
	}
}

 IconButton.propTypes = propTypes;