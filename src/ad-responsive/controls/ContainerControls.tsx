import {ToggleControl} from '@wordpress/components';

import {BackgroundImageControl, ControlGroup,} from 'wpx';

import {Props} from '../types';
import React from 'react';

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
			<ToggleControl
				label="Show content reversed"
				checked={ !!props.attributes.container.reversed }
				onChange={ (reversed) => {
					const container = {...props.attributes.container, reversed};
					props.setAttributes({container});
				} }
			/>
		</ControlGroup>
	);
}

export default ContainerControls;
