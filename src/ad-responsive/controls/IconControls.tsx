import {Props} from '../types';
import ImageWidthControl from '../../_common/controls/ImageWidthControl';
import {BorderControl, ContainerContents, ContainerControl, MediaControl} from '../../../../../wpx';
import React from 'react';

const IconControls = (props: Props & {
	setFocused: (value: string | null) => void;
}) => {
	const setIconAttributes = (icon: Props['attributes']['icon']) => {
		if (!icon || !icon.url) {
			props.setAttributes({
				icon: {
					...props.attributes.icon,
					url: undefined,
					alt: undefined,
					width: undefined,
					height: undefined
				}
			});
			return;
		}
		props.setAttributes({
			icon: {
				...props.attributes.icon,
				url: icon.url,
				alt: icon.alt,
				width: icon.width,
				height: icon.height
			}
		});
	};

	return (
		<ContainerControl
			title={'Icon'}
			onMouseEnter={() => props.setFocused('icon')}
			onMouseLeave={() => props.setFocused(null)}
		>
			<ContainerContents>
				<MediaControl
					attributes={props.attributes.icon}
					setAttributes={icon => {
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
						onChange={scaledWidth => {
							const icon = {...props.attributes.icon, scaledWidth};
							props.setAttributes({icon});
						}}
					/>
					<BorderControl
						title="Border"
						value={props.attributes.icon}
						onChange={value => {
							const icon = {...props.attributes.icon, ...value}
							props.setAttributes({icon});
						}}
						radius={props.attributes.icon.borderRadius}
						onRadiusChange={borderRadius => {
							const icon = {...props.attributes.icon, borderRadius}
							props.setAttributes({icon});
						}}
					/>
				</MediaControl>
			</ContainerContents>
		</ContainerControl>
	);
}

export default IconControls;
