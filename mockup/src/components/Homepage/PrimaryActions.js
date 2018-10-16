import React from 'react';
import Box from '../Containers/Box';
import Search from '../Homepage/Search';
import MostPopularServices from '../Homepage/MostPopularServices';

export default function PrimaryActions(props) {
    return (
        <React.Fragment>
            <Box className="dg_primary-action-container">
                <div className="dg_primacy-action dg_primary-search-container">
                    <Search />
                </div>
                <div className="dg_primacy-action dg_primary-services-container">
                    <MostPopularServices />
                </div>
            </Box>
        </React.Fragment>
    );
}
