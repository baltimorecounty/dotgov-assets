import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import { RenderCodeExample } from '../../Utilities';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

const propTypes = {
    code: PropTypes.object
};

export default class CodeExample extends React.Component {
    render() {
        const { code } = this.props;

        return (
            <section>
                <strong>Example</strong>
                {code}
                <Collapse>
                    <Panel header="Show Code" key="1">
                        <Highlight className="html">
                            {RenderCodeExample(code)}
                        </Highlight>
                    </Panel>
                </Collapse>
            </section>
        );
    }
}

CodeExample.propTypes = propTypes;
