import React from 'react';
import PropTypes from 'prop-types';
import NavListItem from './NavListItem';

const propTypes = {
    items: PropTypes.array.isRequired
};

export default class NavList extends React.Component {
    render() {
		const className = this.props.className || '';
		const cssClasses = `bc_nav-list${className ? ` ${className}`: ''}`;
        return (
            <ul className={cssClasses}>
                {this.props.items.map((item, itemKey) => (
                    <NavListItem item={item} key={itemKey} />
                ))}
            </ul>
        );
    }
}

NavList.propTypes = propTypes;
