import React from 'react';
import PrimaryNavigation from '../Navigation/PrimaryNavigation';
import SecondaryNavigation from '../Navigation/SecondaryNavigation';

export default class Header extends React.Component {
    render() {
        return (
            <header class="dg_site-header">
                <SecondaryNavigation />
                <PrimaryNavigation />
            </header>
        );
    }
}
