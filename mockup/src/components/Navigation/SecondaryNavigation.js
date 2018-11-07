import React from 'react';
import { format } from 'date-fns';

export default class SecondaryNavigation extends React.Component {
    render() {
        const todaysDate = format(new Date(), 'dddd, MMMM Do');
        return (
            <nav className="dg_secondary-nav">
                <p>{todaysDate}</p>
            </nav>
        );
    }
}
