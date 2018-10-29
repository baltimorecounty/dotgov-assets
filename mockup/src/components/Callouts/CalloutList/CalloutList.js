import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    items: PropTypes.array.isRequired
};

const defaultProps = {
    items: []
};

export default function CalloutList(props) {
    const { items } = props;
    return (
        <section className="bc_callout-list">
            {items.map((item, itemKey) => {
                return (
                    <a
                        href={item.url}
                        className="bc_callout-list_item"
                        key={itemKey}
                    >
                        <i
                            className={`fas fa-${
                                item.icon
                            } bc_callout-list_item-icon`}
                        />
                        <span className="bc_callout-list_item-text">
                            {item.name}
                        </span>
                    </a>
                );
            })}
        </section>
    );
}

CalloutList.propTypes = propTypes;
CalloutList.defaultProps = defaultProps;
