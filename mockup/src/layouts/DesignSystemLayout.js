import React from 'react';

export default class DesignSystemLayout extends React.Component {
    render() {
        return <React.Fragment>{this.props.children}</React.Fragment>;
    }
}
