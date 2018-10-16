import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    items: PropTypes.array.isRequired
};

export default class LinkList extends React.Component {
    render() {
        const { items, className } = this.props;
        const cssClasses = `bc_link-list${className ? ` ${className}` : ''}`;
        return (
            <ul className={cssClasses}>
                {items.map((item, itemKey) => (
                    <li key={itemKey}>
                        <a href={item.link}>
                            <i className={`fas fa-${item.icon}`} /> {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        );
    }
}

LinkList.propTypes = propTypes;
