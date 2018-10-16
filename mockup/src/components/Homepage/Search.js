import React from 'react';
export default function Search(props) {
    return (
        <React.Fragment>
            <h3 className="dg_primacy-action-heading">
                Search for agencies, services and more...
            </h3>
            <div className="dg_homepage-search">
                <label htmlFor="site-search" />
                <input type="text" name="site-search" id="site-search" />
                <i className="fas fa-search dg_icon-btn" />
            </div>
        </React.Fragment>
    );
}
