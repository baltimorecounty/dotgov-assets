import React from 'react';
import LinkList from '../Lists/LinkList';
import mostPopularServicesLinks from '../../data/most-popular-services.json';

export default function MostPopularServices(props) {
    return (
        <React.Fragment>
            <h3 className="dg_primacy-action-heading">Most Popular Services</h3>
            <LinkList
                className="dg_primary-services-list"
                items={mostPopularServicesLinks}
                grid
                columns={3}
            />
        </React.Fragment>
    );
}
