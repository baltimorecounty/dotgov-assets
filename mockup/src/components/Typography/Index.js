import React from 'react';
import CodeExample from '../DesignSystem/CodeExample';

export default class Index extends React.Component {
    state = {
        componentFriendlyName: 'Typography'
    };

    render() {
        const headingsMarkup = (
            <React.Fragment>
                <h1>Heading 1 - 31.5px - 700</h1>
                <h2>Heading 2 - 31.5px - 700</h2>
                <h3>Heading 3 - 31.5px - 700</h3>
                <h4>Heading 4 - 31.5px - 700</h4>
                <h4>Heading 5 - 31.5px - 700</h4>
                <h6>Heading 6 - 31.5px - 700</h6>
            </React.Fragment>
        );

        const altHeadingsMarkup = (
            <React.Fragment>
                <h1 className="alt-heading">Heading 1 - 31.5px - 700</h1>
                <h2 className="alt-heading">Heading 2 - 31.5px - 700</h2>
                <h3 className="alt-heading">Heading 3 - 31.5px - 700</h3>
                <h4 className="alt-heading">Heading 4 - 31.5px - 700</h4>
                <h4 className="alt-heading">Heading 5 - 31.5px - 700</h4>
                <h6 className="alt-heading">Heading 6 - 31.5px - 700</h6>
            </React.Fragment>
        );

        const bodyMarkup = (
            <React.Fragment>
                <h1>Catchy Heading</h1>
                <p>
                    Lorem ipsum dolor sit amet, postea dignissim et nec. At quot
                    aliquip tamquam eos. At conceptam honestatis nam, ea eam
                    suas verear. Sit an liberavisse deterruisset. Eos meis solum
                    alienum te, quo inani menandri indoctum ea. Elit mandamus ei
                    quo, ea aeterno patrioque conclusionemque has, mei ad semper
                    complectitur.
                </p>
                <h2>Catchy Sub Heading 1</h2>
                <p>
                    Lorem ipsum dolor sit amet, postea dignissim et nec. At quot
                    aliquip tamquam eos. At conceptam honestatis nam, ea eam
                    suas verear. Sit an liberavisse deterruisset. Eos meis solum
                    alienum te, quo inani menandri indoctum ea. Elit mandamus ei
                    quo, ea aeterno patrioque conclusionemque has, mei ad semper
                    complectitur.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, postea dignissim et nec. At quot
                    aliquip tamquam eos. At conceptam honestatis nam, ea eam
                    suas verear. Sit an liberavisse deterruisset. Eos meis solum
                    alienum te, quo inani menandri indoctum ea. Elit mandamus ei
                    quo, ea aeterno patrioque conclusionemque has, mei ad semper
                    complectitur.
                </p>
                <h2>Catchy Sub Heading 2</h2>
                <p>
                    Lorem ipsum dolor sit amet, postea dignissim et nec. At quot
                    aliquip tamquam eos. At conceptam honestatis nam, ea eam
                    suas verear. Sit an liberavisse deterruisset.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, postea dignissim et nec. At quot
                    aliquip tamquam eos.
                </p>
                <h3>Catchy Sub Sub Heading 1</h3>
                <p>
                    Lorem ipsum dolor sit amet, postea dignissim et nec. At quot
                    aliquip tamquam eos. At conceptam honestatis nam, ea eam
                    suas verear. Sit an liberavisse deterruisset.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, postea dignissim et nec. At quot
                    aliquip tamquam eos.
                </p>
                <h2>Catchy Sub Heading 2</h2>
                <p>
                    Lorem ipsum dolor sit amet, postea dignissim et nec. At quot
                    aliquip tamquam eos.
                </p>
            </React.Fragment>
        );

        const fonts = [
            {
                name: 'Montserrat',
                description: 'Used for headings and emphasized text',
                weights: ['400', '500', '700'],
                fallbacks: "'Crimson Text', serif"
            },
            {
                name: 'Crimson Text',
                description: 'Used for body text and image captions',
                weights: ['400', '400i'],
                fallbacks: "'Montserrat', sans-serif;"
            }
        ];

        return (
            <React.Fragment>
                <section className="dgds_card fonts" id="fonts">
                    <h2>Fonts</h2>
                    <p>
                        We use a combination of{' '}
                        <a href="https://fonts.google.com/">google fonts</a> in
                        order to reduce costs.
                    </p>
                    {fonts.map((font, fontIndex) => (
                        <div>
                            <h3>{font.name}</h3>
                            <p>{font.description}</p>
                            <p>
                                <em>Fallback</em>: {font.fallbacks}
                            </p>
                            <p>
                                <em>Weights</em>: {font.weights.join(', ')}
                            </p>
                        </div>
                    ))}
                </section>
                <section className="dgds_card headings" id="fonts">
                    <h2>Headings</h2>
                    <p>Put something really smart here</p>
                    <div>
                        <h3>Default</h3>
                        <p>Put something really smart here</p>
                        <CodeExample code={headingsMarkup} />
                    </div>
                    <div>
                        <h3>Alternate</h3>
                        <p>Put something really smart here</p>
                        <CodeExample code={altHeadingsMarkup} />
                    </div>
                </section>
                <section className="dgds_card body" id="fonts">
                    <h2>Body</h2>
                    <p>Put something really smart here</p>
                    <div>
                        <h3>Content</h3>
                        <p>Put something really smart here</p>
                        <CodeExample code={bodyMarkup} />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
