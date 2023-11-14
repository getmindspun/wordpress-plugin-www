import {Props} from './types';
import {InspectorControls} from '@wordpress/block-editor';
import {CheckboxControl} from '@wordpress/components';
import MediaControl, {Media} from "../_common/controls/MediaControl";
import React from "react";
import {ContainerContents} from "wpx";

// https://kjmonahan.dev/gutenberg-image-block/

const Controls = (props: Props & {
	showMobile: boolean,
	setShowMobile: (value: boolean) => void
}) => {

	return (
		<InspectorControls>
			<div className="wp-block-www-ad-images-controls">
				<ContainerContents>
					<CheckboxControl
						label="Force mobile view"
						help="Show the mobile view that would normally only be shown on screens less than 450px wide."
						checked={ props.showMobile }
						onChange={ props.setShowMobile }
					/>
				</ContainerContents>
				<MediaControl
					title={ 'Horizontal Banner (728×90)' }
					attributes={props.attributes.horizontal}
					setAttributes={media => {
						const horizontal = {...props.attributes.horizontal, ...media};
						props.setAttributes({horizontal});
					}}
					help={ "Use an image that is exactly 728x90 pixels.  This image will only be shown on screens greater than or equal to 450px wide."}
				/>
				<MediaControl
					title={ 'Large Mobile (320x100)' }
					attributes={props.attributes.mobile}
					setAttributes={media => {
						const mobile = {...props.attributes.mobile, ...media};
						props.setAttributes({mobile});
					}}
					help={ "Use an image that is exactly 320x100 pixels.  This image will only be shown on screens less than 450px wide."}
				/>
			</div>
		</InspectorControls>
	);
}

export default Controls;
