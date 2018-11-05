import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../Buttons/IconButton';

const propTypes = {
    items: PropTypes.array.isRequired
};

export default function CalloutList(props) {
    const { items } = props;
    return (
        <section className="bc_callout-list">
            {items.map((item, itemKey) => {
                return (
                    <a href={item.url} className="bc_icon-btn" key={itemKey}>
                        <IconButton icon={item.icon} text={item.name} />
                    </a>
                );
            })}
        </section>
    );
}

CalloutList.propTypes = propTypes;
