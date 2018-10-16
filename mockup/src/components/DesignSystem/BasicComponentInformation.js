import React from 'react';
import PropTypes from 'prop-types';
import DocSection from '../DesignSystem/DocSection';

const propTypes = {
    data: PropTypes.object.isRequired
};

export default class BasicComponentInformation extends React.Component {
    render() {
        const { title, purpose, description } = this.props.data;
        return (
            <React.Fragment>
                <h2>{title}</h2>
                <DocSection>
                    <h3>Purpose</h3>
                    <p>{purpose}</p>
                </DocSection>
                <DocSection>
                    <h3>Description</h3>
                    {description.map((desc, descIndex) => (
                        <p key={descIndex}>{desc}</p>
                    ))}
                </DocSection>
            </React.Fragment>
        );
    }
}

BasicComponentInformation.propTypes = propTypes;
