import React from 'react';
import NavList from './NavList';
import primaryNavigationItems from '../../data/primary-navigation.json';

export default class PrimaryNavigation extends React.Component {
    render() {
        return (
            <nav className="dg_primary-navigation">
                <NavList items={primaryNavigationItems} />
            </nav>
        );
    }
}
