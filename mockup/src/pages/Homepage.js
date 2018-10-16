import React from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/Site/Header';
import Box from '../components/Containers/Box';

export default class Homepage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SiteHeader />
                <div
                    className="dg_main-content"
                    style={{ margin: '30px auto' }}
                >
                    <Box>
                        <p>Search and Popular Services Goes Here</p>
                    </Box>
                    <h1>Baltimore County Government</h1>
                    <p>this is a placeholder page for the homepage</p>
                    <Link to="/design-system">Design System</Link>
                </div>
            </React.Fragment>
        );
    }
}
