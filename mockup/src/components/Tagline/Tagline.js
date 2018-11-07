import React from 'react';
import PropTypes from 'prop-types';
import { GetCssClasses } from '../../Utilities';

const propTypes = {
    text: PropTypes.string.isRequired
};

export default class Tagline extends React.Component {
    render() {
        const cssClasses = GetCssClasses(this.props.className, 'bc_tagline');
        return <div className={cssClasses}>{this.props.text}</div>;
    }
}

Tagline.propTypes = propTypes;
