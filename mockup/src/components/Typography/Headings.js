import React from 'react';
import Highlight from 'react-highlight';
import PropTypes from 'prop-types';

const propTypes = {
    fonts: PropTypes.array
};

const defaultProps = {
    fonts: []
};

export default class Headings extends React.Component {
    render() {
        const hasFontsSpecific = this.props.fonts.length > 0;

        return (
            <React.Fragment>
                <section className="dgds_card">
                    <h2>Fonts</h2>
                    <p>Some overview text goes here</p>
                    {hasFontsSpecific &&
                        this.props.fonts.map((font, fontIndex) => {
                            return (
                                <div key={fontIndex}>
                                    <h3>
                                        <em>{font.name}</em>
                                    </h3>
                                    <p>{font.description}</p>
                                    <p>
                                        Available Weights:{' '}
                                        {font.availableWeights.join(', ')}
                                    </p>
                                </div>
                            );
                        })}
                    {!hasFontsSpecific && <p>No fonts specified</p>}
                </section>
                <section className="dgds_card">
                    <h2>Styles</h2>
                    {hasFontsSpecific &&
                        this.props.fonts.map((font, fontIndex) => {
                            return (
                                <React.Fragment key={fontIndex}>
                                    <h3 className="dgds_section-heading">
                                        {font.name}
                                    </h3>
                                    {font.exampleMarkup && (
                                        <React.Fragment>
                                            {font.exampleMarkup}
                                            <Highlight className="html">
                                                {font.exampleMarkup.props.children.map(
                                                    child => `<${child.type}>${child.props.children}</${child.type}>\n`
                                                )}
                                            </Highlight>
                                        </React.Fragment>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    ;
                </section>
            </React.Fragment>
        );
    }
}

Headings.propTypes = propTypes;
Headings.defaultProps = defaultProps;
