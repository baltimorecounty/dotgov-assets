import React from 'react';
import { GetCssClasses } from '../../Utilities';

export default class Box extends React.Component {
	render() {
		const { className, children } = this.props;
		const cssClasses = GetCssClasses(className, 'bc_box');
		return (
			<div className={cssClasses}>
				{children}
			</div>
		);
	}
}