import React from 'react';
import PropTypes from 'prop-types';
import ColorList from './ColorList';

const propTypes = {
    colors: PropTypes.array.isRequired
};

export default class Colors extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.colors.map((color, colorIndex) => {
                    return (
                        <React.Fragment>
                            <h3>{color.name}</h3>
                            <ColorList
                                className=""
                                classPrefix="dg"
                                color={color}
                                key={colorIndex}
                            />
                        </React.Fragment>
                    );
                })}
            </React.Fragment>
        );
    }
}

Colors.propTypes = propTypes;
