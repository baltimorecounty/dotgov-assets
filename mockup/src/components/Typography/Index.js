import React from 'react';
import Headings from './Headings';

export default class Index extends React.Component {
	state = {
		componentFriendlyName: "Typography"
	}

	render() {
		const headingsMarkup = (
            <React.Fragment>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h4>Heading 5</h4>
                <h6>Heading 6</h6>
            </React.Fragment>
		);

		const bodyMarkup = (
            <React.Fragment>
                <h1>Heading 1</h1>
                <p>The Baltimore County Police Department was established by the Maryland State Legislature on April 11, 1874. The Maryland Legislature approved what became Chapter 374 of the Laws of Maryland. This authorized the Baltimore County Commissioners "to appoint such number of policemen as they may deem necessary, for the better protection of persons and property; the number not to exceed thirty at any one time, and to designate such number of said policemen as they may deem advisable, not exceeding five, as chief policemen."</p>
            </React.Fragment>
        );

		const fonts = [
			{
				name: "Montserrat",
				description: "Used for headings and emphasized text",
				availableWeights: ["400","500","700"],
				exampleMarkup: headingsMarkup
			},
			{
				name: "Crimson Text",
				description: "Used for body text and image captions",
				availableWeights: ["400","400i"],
				exampleMarkup: bodyMarkup
			}
		];

		return (
			<React.Fragment>
				<Headings fonts={fonts} />
			</React.Fragment>
		);
	}
}