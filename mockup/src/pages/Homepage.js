import React from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/Site/Header';
import PrimaryActions from '../components/Homepage/PrimaryActions';
import ImageCallouts from '../components/Homepage/ImageCallouts';
import TransparencyInGovernment from '../components/Homepage/TransparencyInGovernment';
import Tagline from '../components/Tagline/Tagline';
import Footer from '../components/Footer/Footer';

export default class Homepage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SiteHeader />
                <div className="dg_main-content bc_section">
                    <PrimaryActions />
                    <ImageCallouts />
                    <TransparencyInGovernment />
                    <Tagline
                        className="dg_tagline"
                        text="Inclusion. Innovation. Community. Baltimore County"
                    />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}
