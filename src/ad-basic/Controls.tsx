import {Props} from './types';
import {__experimentalInputControl as InputControl} from '@wordpress/components';
import {InspectorControls} from '@wordpress/block-editor';

const Controls = (props: Props) => {
	return (
		<InspectorControls>
			<div className="wp-block-www-ad-basic-controls">
			<div className="cta-button-controls">
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
			</div>
			</div>
		</InspectorControls>
	);
}

export default Controls;
