import React from 'react';

export default class Box extends React.Component {
	render() {
		return (
			<div className="bc_box">
				{this.props.children}
			</div>
		);
	}
}