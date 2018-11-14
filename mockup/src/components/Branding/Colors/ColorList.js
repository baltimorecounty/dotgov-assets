import React from 'react';
import PropTypes from 'prop-types';
import { getColorInformation } from '../../../ColorUtilities';

const propTypes = {
    color: PropTypes.object.isRequired,
    classPrefix: PropTypes.string.isRequired
};

export default class ColorList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: {
                default: {},
                light: {},
                lightest: {},
                dark: {},
                darkest: {}
            }
        };

        this.colors = {
            default: React.createRef(),
            light: React.createRef(),
            lightest: React.createRef(),
            dark: React.createRef(),
            darkest: React.createRef()
        };
    }

    setColorInformationReducer = (colors, colorName) => {
        colors[colorName] = getColorInformation(this.colors[colorName].current);
        return colors;
    };

    setColorInformation() {
        const colorNames = Object.keys(this.state.colors);
        const colors = colorNames.reduce(this.setColorInformationReducer, {});

        this.setState({
            colors
        });
    }

    componentDidMount() {
        this.setColorInformation();
    }

    render() {
        const { color, classPrefix } = this.props;
        return (
            <ul className="bc_color-list">
                <li
                    ref={this.colors.lightest}
                    className={`${classPrefix}_color__${color.name}--lightest`}
                >
                    <p>Lightest</p>
                    <p> {this.state.colors.lightest.hex}</p>
                </li>
                <li
                    ref={this.colors.light}
                    className={`${classPrefix}_color__${color.name}--light`}
                >
                    <p>Light</p>
                    <p>{this.state.colors.light.hex}</p>
                </li>
                <li
                    ref={this.colors.default}
                    className={`${classPrefix}_color__${color.name}`}
                >
                    <p>
                        <strong>Default</strong>
                    </p>
                    <p>{this.state.colors.default.hex}</p>
                </li>
                <li
                    ref={this.colors.dark}
                    className={`${classPrefix}_color__${color.name}--dark`}
                >
                    <p>Dark</p>
                    <p>{this.state.colors.dark.hex}</p>
                </li>
                <li
                    ref={this.colors.darkest}
                    className={`${classPrefix}_color__${color.name}--darkest`}
                >
                    <p>Darkest</p>
                    <p>{this.state.colors.darkest.hex}</p>
                </li>
            </ul>
        );
    }
}

ColorList.propTypes = propTypes;
