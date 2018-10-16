import React from 'react';

export default class DocSection extends React.Component {
    render() {
        return (
            <section className="dgds_section" style={{ marginBottom: '15px' }}>
                {this.props.children}
            </section>
        );
    }
}
