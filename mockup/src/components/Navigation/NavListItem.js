import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    item: PropTypes.object.isRequired
};

export default class NavListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { item, itemKey } = this.props;
        return (
            <React.Fragment>
                <li key={itemKey}>
                    <a href={item.link}>
                        <i className={`fas fa-${item.icon}`} /> {item.name}
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

NavListItem.propTypes = propTypes;
