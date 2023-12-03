import {Props} from '../types';
import ImageWidthControl from '../../_common/controls/ImageWidthControl';
import {BorderControl, ContainerContents, ContainerControl, MediaControl} from '../../../../../wpx';
import React from 'react';
import ContainerControls from './ContainerControls';
import {RadioControl} from '@wordpress/components';

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
					height: undefined,
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
		<ContainerControl
			title={'Image'}
			onMouseEnter={() => props.setFocused('image')}
			onMouseLeave={() => props.setFocused(null)}
		>
			<ContainerContents>
				<MediaControl
					title={'Image'}
					attributes={props.attributes.media}
					setAttributes={media => {
						setImageAttributes(media as unknown as Props['attributes']['media']);
					}}
					onMouseEnter={() => {
						props.setFocused('image');
					}}
					onMouseLeave={() => {
						props.setFocused(null);
					}}
				>
					<RadioControl
						label="Show image"
						help="When should the image be shown?"
						selected={props.attributes.media.show || 'always'}
						options={[
							{label: 'Always', value: 'always'},
							{label: 'Desktop Only', value: 'desktop'},
							{label: 'Never', value: 'never'},
						]}
						onChange={(show) => {
							const media = {...props.attributes.media, show: show as 'always' | 'desktop' | 'never'}
							props.setAttributes({media});
						}}
					/>
					<ImageWidthControl
						title={'Width'}
						value={props.attributes.media.scaledWidth}
						onChange={scaledWidth => {
							const media = {...props.attributes.media, scaledWidth};
							props.setAttributes({media});
						}}
					/>
					<BorderControl
						title="Border"
						value={props.attributes.media}
						onChange={value => {
							const media = {...props.attributes.media, ...value}
							props.setAttributes({media});
						}}
						radius={props.attributes.media.borderRadius}
						onRadiusChange={borderRadius => {
							const media = {...props.attributes.media, borderRadius}
							props.setAttributes({media});
						}}
					/>
				</MediaControl>
			</ContainerContents>
		</ContainerControl>
	);
}

export default ImageControls;
