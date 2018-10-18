import React from 'react';
import PropTypes from 'prop-types';
import Colors from './Colors';
import colorData from '../../../data/dotgov-colors.json';

const propTypes = {};

const defaultProps = {};

export default class Index extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Colors colors={colorData} />
			</React.Fragment>
		);
	}
}

 Index.propTypes = propTypes;
 Index.defaultProps = defaultProps;