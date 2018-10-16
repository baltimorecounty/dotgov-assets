import React from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/Site/Header';
import Box from '../components/Containers/Box';
import LinkList from '../components/Lists/LinkList';
import mostPopularServicesLinks from '../data/most-popular-services.json';

export default class Homepage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SiteHeader />
                <div
                    className="dg_main-content"
                    style={{ margin: '30px auto' }}
                >
                    <Box className="dg_primary-action-container">
                        <div className="dg_primacy-action dg_primary-search-container">
							<h3 className="dg_primacy-action-heading">Search for agencies, services and more...</h3>
							<div className="dg_homepage-search">
								<label htmlFor="site-search"></label>
								<input type="text" name="site-search" placeholder="Example: Adopt a pet" id="site-search" />
								<i className="fas fa-search dg_icon-btn"></i>
							</div>
						</div>
						<div className="dg_primacy-action dg_primary-services-container">
							<h3 className="dg_primacy-action-heading">Most Popular Services</h3>
							<LinkList className="dg_primary-services-list" items={mostPopularServicesLinks} grid columns={3} />
						</div>
                    </Box>
                    <h1>Baltimore County Government</h1>
                    <p>this is a placeholder page for the homepage</p>
                    <Link to="/design-system">Design System</Link>
                </div>
            </React.Fragment>
        );
    }
}
