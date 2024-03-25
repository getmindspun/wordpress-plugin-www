import React from 'react';

import {ControlGroup} from 'wpx';

import {Props} from '../types';

const HeadingControls = (props: Props & {
	focused: string | null;
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
				color: {responsive: true},
				fontSize: true,
				padding: {responsive: true},
				margin: {responsive: true},
				letterCase: true,
				textAlign: {responsive: true}
			}}
			onMouseEnter={() => props.setFocused('heading')}
			onMouseLeave={() => {
				props.setFocused( null );
				console.log('heading leave');
			}}
			initialOpen={props.focused === 'heading'}
		/>
	);
}

export default HeadingControls;
