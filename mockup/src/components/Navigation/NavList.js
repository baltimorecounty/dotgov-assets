import React from 'react';
import PropTypes from 'prop-types';
import NavListItem from './NavListItem';

const propTypes = {
    items: PropTypes.array.isRequired
};

export default class NavList extends React.Component {
    render() {
        return (
            <ul className="bc_nav-list">
                {this.props.items.map((item, itemKey) => (
                    <NavListItem item={item} key={itemKey} />
                ))}
            </ul>
        );
    }
}

NavList.propTypes = propTypes;
