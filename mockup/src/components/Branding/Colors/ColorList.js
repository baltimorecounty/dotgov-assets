import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    color: PropTypes.string.isRequired,
    classPrefix: PropTypes.string.isRequired
};

export default class ColorList extends React.Component {
    render() {
        const { color, classPrefix } = this.props;
        return (
            <ul className="bc_color-list">
                <li className={`${classPrefix}_color__${color}--lightest`} />
                <li className={`${classPrefix}_color__${color}--light`} />
                <li className={`${classPrefix}_color__${color}`} />
                <li className={`${classPrefix}_color__${color}--dark`} />
                <li className={`${classPrefix}_color__${color}--darkest`} />
            </ul>
        );
    }
}

ColorList.propTypes = propTypes;
