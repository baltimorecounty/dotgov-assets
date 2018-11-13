import React from 'react';
import Box from '../Containers/Box';
import Search from '../Homepage/Search';
import MostPopularServices from '../Homepage/MostPopularServices';

export default function PrimaryActions(props) {
    return (
        <React.Fragment>
            <Box className="dg_primary-action-container container">
                <div className="row">
                    <div className="dg_primacy-action col-md-6">
                        <Search />
                    </div>
                    <div className="dg_primacy-action col-md-6">
                        <MostPopularServices />
                    </div>
                </div>
            </Box>
        </React.Fragment>
    );
}
