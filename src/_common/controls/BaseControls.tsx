import React, {CSSProperties} from 'react';
import {__experimentalInputControl as InputControl} from '@wordpress/components';

import {ContainerControl, ControlGroup, ColorControl, ColorsGroup, ContainerContents} from 'wpx';

import MediaControl from './MediaControl';

export interface BaseControlProps {
	attributes: {
		blockId: string,
		heading: Pick<CSSProperties, 'color'> & {
			text: string,
		},
		tagline: Pick<CSSProperties, 'color'> & {
			text: string,
		}
		button: Pick<CSSProperties, 'color' | 'backgroundColor'> & {
			text: string,
			link: string
		}
		buttonHover: Pick<CSSProperties, 'color' | 'backgroundColor'>
		container: Pick<CSSProperties, 'color' | 'backgroundColor' | 'backgroundImage'>
	},
	setAttributes: (value: Partial<BaseControlProps['attributes']>) => void
}

const BaseControls = (props: BaseControlProps) => {

	return (
		<>
			<ControlGroup
				title={'Heading'}
				attributes={props.attributes.heading}
				setAttributes={value => {
					const heading = {...props.attributes.heading, ...value}
					props.setAttributes({heading});
				}}
				options={{
					color: true,
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
			<ContainerControl
				title={'Container'}
			>
				<ContainerContents>
					<ColorsGroup>
						<ColorControl
							title={ 'Color' }
							value={ props.attributes.container.color }
							onChange={ (color: string | undefined) => {
								/* Intentionally set the color to the empty string when undefined
								 * otherwise setAttributes won't recognize it.
								 */
								const container = {...props.attributes.container, color: color ? color : ''}
								props.setAttributes({container});
							} }
						/>
						<ColorControl
							title={ 'Background' }
							value={ props.attributes.container.backgroundColor }
							onChange={ (backgroundColor: string | undefined) => {
								/* Intentionally set the color to the empty string when undefined
								 * otherwise setAttributes won't recognize it.
								 */
								const container = {...props.attributes.container, backgroundColor: backgroundColor ? backgroundColor : ''}
								props.setAttributes({container});
							} }
						/>
						<MediaControl
							title={'Background Image'}
							attributes={ {url: props.attributes.container.backgroundImage, id: undefined, alt: undefined, width: undefined, height: undefined} }
							setAttributes={ media => {
								const backgroundImage = media.url ? `url(${media.url})` : undefined;
								const container = {...props.attributes.container, backgroundImage}
								props.setAttributes({container})
							}}
						/>
					</ColorsGroup>
				</ContainerContents>
			</ContainerControl>
		</>
	);
}

export default BaseControls;
