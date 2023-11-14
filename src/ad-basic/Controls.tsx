import {Props} from './types';
import {__experimentalInputControl as InputControl} from '@wordpress/components';
import {InspectorControls} from '@wordpress/block-editor';
import {ControlGroup} from 'wpx';
import MediaControl from "../_common/controls/MediaControl";

const Controls = (props: Props) => {
	return (
		<InspectorControls>
			<div className="wp-block-www-ad-basic-controls">
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
					title={'Container'}
					attributes={props.attributes.container}
					setAttributes={value => {
						const container = {...props.attributes.container, ...value}
						props.setAttributes({container});
					}}
					options={{
						color: true,
						backgroundColor: true
					}}
				/>
			</div>
		</InspectorControls>
	);
}

export default Controls;
