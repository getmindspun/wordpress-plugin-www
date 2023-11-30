import React from 'react';

import {ControlGroup} from 'wpx';

import {Props} from '../types';

const HeadingControls = (props: Props & {
	setFocused: (value: string|null) => void;
}) => {
	return (
		<ControlGroup
			title={'Heading'}
			attributes={props.attributes.heading}
			setAttributes={value => {
				const heading = {...props.attributes.heading, ...value}
				props.setAttributes({heading});
			}}
			options={{
				color: true,
				fontSize: true,
				padding: true,
				margin: true,
				letterCase: true,
				textAlign: {responsive: true}
			}}
			onMouseEnter={() => props.setFocused('heading')}
			onMouseLeave={() => props.setFocused( null )}
		/>
	);
}

export default HeadingControls;
