import React from 'react';
import Box from '../Containers/Box';
import Search from '../Homepage/Search';
import MostPopularServices from '../Homepage/MostPopularServices';

export default function PrimaryActions(props) {
    return (
        <React.Fragment>
            <Box className="dg_primary-action-container bc_grid bc_grid-cols-2">
                <div className="dg_primacy-action bc_col">
                    <Search />
                </div>
                <div className="dg_primacy-action bc_col">
                    <MostPopularServices />
                </div>
            </Box>
        </React.Fragment>
    );
}
