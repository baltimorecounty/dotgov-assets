import React from 'react';
import Colors from './Colors';
import colorData from '../../../data/dotgov-colors.json';

export default class Index extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Colors colors={colorData} />
            </React.Fragment>
        );
    }
}
