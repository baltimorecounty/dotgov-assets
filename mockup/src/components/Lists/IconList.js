import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    items: PropTypes.array.isRequired
};

export default class IconList extends React.Component {
    render() {
        return (
            <ul className="bc_icon-list">
                {this.props.items.map((item, itemKey) => {
                    return (
                        <li className="bc_icon-list-item">
                            <a href={item.link} key={itemKey}>
                                <i class={`fab fa-${item.icon}`} />
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

IconList.propTypes = propTypes;
