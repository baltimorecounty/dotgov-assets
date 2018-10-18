import React from 'react';
import PropTypes from 'prop-types';
import Callout from '../Callout';

const propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	linkIcon: PropTypes.string.isRequired
};

const defaultProps = {
	linkIcon: 'hand-point-right'
};

export default class ImageCallout extends React.Component {
	render() {
		const { image, title, subTitle, linkText, link, linkIcon, ...rest } = this.props;
		return (
			<Callout {...rest}>
				<img className="bc_callout-img" src={image} alt="" />
				<div className="bc_callout-figure">
					<span className="bc_callout-subtitle">{subTitle}</span>
					<h2 className="bc_callout-title">{title}</h2>
					<a href={link}>{linkText} <i className={`fas fa-${linkIcon}`}></i></a>
				</div>
			</Callout>
		);
	}
}

 ImageCallout.propTypes = propTypes;
 ImageCallout.defaultProps = defaultProps;