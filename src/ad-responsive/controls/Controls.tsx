import React from 'react';
import {SelectControl, RadioControl} from '@wordpress/components';
import {InspectorControls} from '@wordpress/block-editor';


import {Props} from '../types';
import MediaControl from '../../_common/controls/MediaControl';
import {
	BorderControl,
} from 'wpx';

import ImageWidthControl from "../../_common/controls/ImageWidthControl";
import ButtonControls from './ButtonControls';
import HeadingControls from './HeadingControls';
import TaglineControls from './TaglineControls';
import ContainerControls from './ContainerControls';
import ContentControls from './ContentControls';

const Controls = (props: Props & {
	setFocused: (value: string|null) => void;
}) => {

	const setIconAttributes = (icon: Props['attributes']['icon']) => {
		if (!icon || !icon.url) {
			props.setAttributes({
				icon: {
					...props.attributes.icon,
					url: undefined,
					id: undefined,
					alt: undefined,
					width: undefined,
					height: undefined
				}
			});
			return;
		}
		props.setAttributes({icon});
	};

	const setImageAttributes = (media: Props['attributes']['media']) => {
		if (!media || !media.url) {
			props.setAttributes({
				media: {
					...props.attributes.media,
					url: undefined,
					id: undefined,
					alt: undefined,
					width: undefined,
					height: undefined,
				}
			});
			return;
		}
		props.setAttributes({media});
	};

	return (
		<InspectorControls>
			<div className="wp-block-www-ad-responsive-controls">
				<div className="variant-controls">
					<SelectControl
						label={"Variation"}
						options={ [
							{ label: 'Default', value: 'default' },
							{ label: 'Simple', value: 'simple' },
							{ label: 'Left Image', value: 'left' },
						] }
						value={props.attributes.variation}
						onChange={text => props.setAttributes({variation: text as Props['attributes']['variation']})}
					/>
				</div>
				<HeadingControls {...props} />
				<TaglineControls {...props} />
				<ButtonControls {...props} />
				<ContainerControls {...props} />
				<ContentControls {...props} />
				<MediaControl
					title={'Icon'}
					attributes={ props.attributes.icon }
					setAttributes={ icon => {
						setIconAttributes(icon as unknown as Props['attributes']['icon']);
					}}
					onMouseEnter={() => {
						props.setFocused('icon');
					}}
					onMouseLeave={() => {
						props.setFocused(null);
					}}
				>
					<ImageWidthControl
						title={'Width'}
						value={props.attributes.icon.scaledWidth}
						onChange={ scaledWidth => {
							const icon = {...props.attributes.icon, scaledWidth};
							props.setAttributes({icon});
						}}
					/>
					<BorderControl
						title="Border"
						value={ props.attributes.icon }
						onChange={ value => {
							const icon = {...props.attributes.icon, ...value}
							props.setAttributes({icon});
						} }
						radius={ props.attributes.icon.borderRadius }
						onRadiusChange={ borderRadius => {
							const icon = {...props.attributes.icon, borderRadius}
							props.setAttributes({icon});
						} }
					/>
				</MediaControl>
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
						selected={ props.attributes.media.show || 'always' }
						options={ [
							{ label: 'Always', value: 'always' },
							{ label: 'Desktop Only', value: 'desktop' },
							{ label: 'Never', value: 'never' },
						] }
						onChange={ ( show ) => {
							const media = {...props.attributes.media, show: show as 'always' | 'desktop' | 'never'}
							props.setAttributes({media});
						} }
					/>
					<ImageWidthControl
						title={'Width'}
						value={props.attributes.media.scaledWidth}
						onChange={ scaledWidth => {
							const media = {...props.attributes.media, scaledWidth};
							props.setAttributes({media});
						}}
					/>
					<BorderControl
						title="Border"
						value={ props.attributes.media }
						onChange={ value => {
							const media = {...props.attributes.media, ...value}
							props.setAttributes({media});
						} }
						radius={ props.attributes.media.borderRadius }
						onRadiusChange={ borderRadius => {
							const media = {...props.attributes.media, borderRadius}
							props.setAttributes({media});
						} }
					/>
				</MediaControl>
			</div>
		</InspectorControls>
	);
}

export default Controls;
