import React from 'react';
import PrimaryNavigation from '../Navigation/PrimaryNavigation';
import SecondaryNavigation from '../Navigation/SecondaryNavigation';
import Logo from '../Branding/Logo';

export default class Header extends React.Component {
    render() {
        return (
            <header className="dg_site-header">
				<Logo />
                <SecondaryNavigation />
                <PrimaryNavigation />
            </header>
        );
    }
}
