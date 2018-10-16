import React from 'react';
import LinkList from '../Lists/LinkList';
import secondaryNavItems from '../../data/secondary-navigation.json';

export default class SecondaryNavigation extends React.Component {
    render() {
        return (
            <nav className="dg_secondary-nav">
                <LinkList
                    className="dg_secondary-nav-list"
                    items={secondaryNavItems}
                />
            </nav>
        );
    }
}
