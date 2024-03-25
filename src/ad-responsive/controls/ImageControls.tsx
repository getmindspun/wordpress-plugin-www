import {Props} from '../types';
import {
	ControlGroup, Media,
	MediaControl,
	ImageScaleControl,
} from 'wpx';
import React from 'react';

const ImageControls = (props: Props & {
	setFocused: (value: string | null) => void;
}) => {
	const setImageAttributes = (media: Props['attributes']['media']) => {
		if (!media || !media.url) {
			props.setAttributes({
				media: {
					...props.attributes.media,
					url: undefined,
					alt: undefined,
					width: undefined,
					height: undefined
				}
			});
			return;
		}
		props.setAttributes({
			media: {
				...props.attributes.media,
				url: media.url,
				alt: media.alt,
				width: media.width,
				height: media.height
			}
		});
	};

	return (
		<ControlGroup
			title={'Image'}
			attributes={props.attributes.media}
			setAttributes={value => {
				const media = {...props.attributes.media, ...(value as Media)}
				props.setAttributes({media});
			}}
			onMouseEnter={() => props.setFocused('image')}
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
					...props.attributes.media,
					width: props.attributes.media.mediaWidth,
					height: props.attributes.media.mediaHeight,

				}}
				setAttributes={media => {
					setImageAttributes(media as unknown as Props['attributes']['media']);
				}}
			/>
			<ImageScaleControl
				label={'Width'}
				width={props.attributes.media.mediaWidth}
				height={props.attributes.media.mediaHeight}
				attributes={props.attributes.media}
				setAttributes={attributes => {
					props.setAttributes({media: {...props.attributes.media, ...attributes}})
				}}
			/>
		</ControlGroup>
	);
}

export default ImageControls;
