import React from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/Site/Header';
import PrimaryActions from '../components/Homepage/PrimaryActions';
import ImageCallouts from '../components/Homepage/ImageCallouts';
import TransparencyInGovernment from '../components/Homepage/TransparencyInGovernment';

export default class Homepage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SiteHeader />
                <div className="dg_main-content bc_section">
                    <PrimaryActions />
                    <ImageCallouts />
                    <TransparencyInGovernment />
                    <footer>
                        <Link to="/design-system">Design System</Link>
                    </footer>
                </div>
            </React.Fragment>
        );
    }
}
