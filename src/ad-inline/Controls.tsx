import React from 'react';
import {__experimentalInputControl as InputControl, SelectControl} from '@wordpress/components';
import {InspectorControls} from '@wordpress/block-editor';


import {Props} from './types';
import MediaControl from '../_common/controls/MediaControl';
import {
	BlockAlignControl,
	BorderControl,
	ColorControl,
	ColorsGroup,
	ContainerContents,
	ContainerControl,
	ControlGroup
} from 'wpx';

const Controls = (props: Props) => {

	const setIconAttributes = (icon: Props['attributes']['icon']) => {
		if (!icon || !icon.url) {
			props.setAttributes({
				icon: {
					url: undefined,
					id: undefined,
					alt: undefined
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
					url: undefined,
					id: undefined,
					alt: undefined
				}
			});
			return;
		}
		props.setAttributes({media});
	};

	return (
		<InspectorControls>
			<div className="wp-block-www-ad-inline-controls">
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
						textAlign: true
					}}
				/>
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
						textAlign: true
					}}
				/>
				<ControlGroup
					title={'Button'}
					attributes={props.attributes.button}
					setAttributes={value => {
						const button = {...props.attributes.button, ...value}
						props.setAttributes({button});
					}}
					options={{
						color: true,
						backgroundColor: true
					}}
				>
					<InputControl
						label="Button Text"
						labelPosition="top"
						value={props.attributes.button.text}
						onChange={(text: string | undefined) => {
							const button = {...props.attributes.button, text: text || ''};
							props.setAttributes({button});
						}}
					/>
					<InputControl
						label="Button Link"
						labelPosition="top"
						value={props.attributes.button.link}
						onChange={(link: string | undefined) => {
							const button = {...props.attributes.button, link: link || '#'};
							props.setAttributes({button});
						}}
					/>
					<BlockAlignControl
						label={'Alignment'}
						options={['none', 'left', 'center', 'right', 'full']}
						align={props.attributes.button.align}
						onChange={ align => {
							const button = {...props.attributes.button, align};
							props.setAttributes({button});
						}}
					/>
				</ControlGroup>
				<ControlGroup
					title={'Button: Hover'}
					attributes={props.attributes.buttonHover}
					setAttributes={value => {
						const buttonHover = {...props.attributes.buttonHover, ...value}
						props.setAttributes({buttonHover});
					}}
					options={{
						color: true,
						backgroundColor: true
					}}
				/>
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
				>
					<MediaControl
						title={'Background Image'}
						attributes={ {url: props.attributes.container.backgroundImage, id: undefined, alt: undefined} }
						setAttributes={ media => {
							const backgroundImage = media.url ? `url(${media.url})` : undefined;
							const container = {...props.attributes.container, backgroundImage}
							props.setAttributes({container})
						}}
					/>
				</ControlGroup>
				<ContainerControl title={'Content'}>
					<ContainerContents>
						<ColorsGroup>
							<ColorControl
								title={ 'Color' }
								value={ props.attributes.content.color }
								onChange={ (color: string | undefined) => {
									/* Intentionally set the color to the empty string when undefined
									 * otherwise setAttributes won't recognize it.
									 */
									const content = {...props.attributes.content, color: color ? color : ''}
									props.setAttributes({content});
								} }
							/>
						</ColorsGroup>
						<BlockAlignControl
							label={'Alignment'}
							options={['none', 'left', 'center', 'right', 'full']}
							align={props.attributes.content.align}
							onChange={ align => {
								const content = {...props.attributes.content, align};
								props.setAttributes({content});
							}}
						/>
					</ContainerContents>
				</ContainerControl>
				<MediaControl
					title={'Icon'}
					attributes={ props.attributes.icon }
					setAttributes={ icon => {
						setIconAttributes(icon as unknown as Props['attributes']['icon']);
					}}
				/>
				<MediaControl
					title={'Image'}
					attributes={props.attributes.media}
					setAttributes={media => {
						setImageAttributes(media as unknown as Props['attributes']['media']);
					}}
				>
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
