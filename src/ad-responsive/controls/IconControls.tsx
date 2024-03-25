import {Props} from '../types';
import {
	ControlGroup, Media,
	MediaControl,
	ImageScaleControl,
} from 'wpx';
import React from 'react';

const IconControls = (props: Props & {
	setFocused: (value: string | null) => void;
}) => {
	const setIconAttributes = (icon: Partial<Media>) => {
		if (!icon || !icon.url) {
			props.setAttributes({
				icon: {
					...props.attributes.icon,
					url: undefined,
					alt: undefined,
					mediaWidth: undefined,
					mediaHeight: undefined
				}
			});
			return;
		}
		props.setAttributes({
			icon: {
				...props.attributes.icon,
				url: icon.url,
				alt: icon.alt,
				mediaWidth: icon.width,
				mediaHeight: icon.height
			}
		});
	};

	return (
		<ControlGroup
			title={'Icon'}
			attributes={props.attributes.icon}
			setAttributes={value => {
				const icon = {...props.attributes.icon, ...(value as Media)}
				props.setAttributes({icon});
			}}
			onMouseEnter={() => props.setFocused('icon')}
			onMouseLeave={() => props.setFocused(null)}
			options={{
				padding: {responsive: true},
				margin: {responsive: true},
				border: {responsive: true}
			}}
		>
			<MediaControl
				title={' '}
				attributes={{
					...props.attributes.icon,
					width: props.attributes.icon.mediaWidth,
					height: props.attributes.icon.mediaHeight,

				}}
				setAttributes={icon => {
					setIconAttributes(icon);
				}}
			/>
			<ImageScaleControl
				label={'Width'}
				width={props.attributes.icon.mediaWidth}
				height={props.attributes.icon.mediaHeight}
				attributes={props.attributes.icon}
				setAttributes={attributes => {
					props.setAttributes({icon: {...props.attributes.icon, ...attributes}})
				}}
			 />
		</ControlGroup>
	);
}

export default IconControls;
