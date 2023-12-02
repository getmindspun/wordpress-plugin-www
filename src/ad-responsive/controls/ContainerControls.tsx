import React from 'react';
import {ControlGroup} from 'wpx';

import {Props} from '../types';
import MediaControl from '../../_common/controls/MediaControl';

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
			<MediaControl
				title={'Background Image'}
				attributes={ {
					url: props.attributes.container.backgroundImage,
					id: undefined, alt: undefined,
					width: undefined, height: undefined
				} }
				setAttributes={ media => {
					const backgroundImage = media.url ? `url(${media.url})` : undefined;
					const container = {...props.attributes.container, backgroundImage}
					props.setAttributes({container})
				}}
			/>
		</ControlGroup>
	);
}

export default ContainerControls;
