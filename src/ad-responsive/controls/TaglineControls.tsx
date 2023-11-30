import {ControlGroup} from 'wpx';
import React from 'react';
import {Props} from '../types';

const TaglineControls = (props: Props & {
	setFocused: (value: string|null) => void;
}) => {
	return (
		<ControlGroup
			title={'Tagline'}
			attributes={props.attributes.tagline}
			setAttributes={value => {
				const tagline = {...props.attributes.tagline, ...value}
				props.setAttributes({tagline});
			}}
			options={{
				color: true,
				fontSize: true,
				padding: true,
				margin: true,
				letterCase: true,
				textAlign: {responsive: true}
			}}
			onMouseEnter={() => props.setFocused('tagline')}
			onMouseLeave={() => props.setFocused( null )}
		/>
	);
}

export default TaglineControls;
