import React from 'react';
import {BackgroundImageControl, ControlGroup,} from 'wpx';

import {Props} from '../types';

const ContainerControls = (props: Props & {
	setFocused: (value: string|null) => void;
}) => {
	return (
		<ControlGroup
			title={'Container'}
			attributes={props.attributes.container}
			setAttributes={value => {
				const container = {...props.attributes.container, ...value}
				props.setAttributes({container});
			}}
			options={{
				backgroundColor: true,
				border: true,
			}}
			onMouseEnter={() => props.setFocused('container')}
			onMouseLeave={() => props.setFocused(null)}
		>
			<BackgroundImageControl
				attributes={props.attributes.container}
				setAttributes={ attributes => {
					const container = {...props.attributes.container, ...attributes}
					props.setAttributes({container})
				}}
			/>
		</ControlGroup>
	);
}

export default ContainerControls;
