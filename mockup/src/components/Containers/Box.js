import React from 'react';

export default class Box extends React.Component {
	render() {
		const { className } = this.props;
		const cssClasses = `bc_box ${className ? ` ${className}` : ``}`;
		return (
			<div className={cssClasses}>
				{this.props.children}
			</div>
		);
	}
}