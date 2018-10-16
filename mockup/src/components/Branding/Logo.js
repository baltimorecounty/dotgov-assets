import React from 'react';
import BaltimoreCountySeal from '../../img/seal.svg';

export default class Logo extends React.Component {
    render() {
        return (
            <div className="dg_brand">
                <div className="dg_logo-container">
                    <img
                        className="dg_logo"
                        src={BaltimoreCountySeal}
                        alt="Baltimore County Logo"
                    />
                    <p>
                        Baltimore
                        <br />
                        County
                    </p>
                </div>
                <p class="dg_logo-subtext">Government</p>
            </div>
        );
    }
}
