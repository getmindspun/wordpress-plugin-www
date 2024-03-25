import React from 'react';
import {SelectControl, RadioControl, __experimentalInputControl as InputControl} from '@wordpress/components';
import {InspectorControls} from '@wordpress/block-editor';


import {Props} from '../types';
import {
	BorderControl,
	MediaControl
} from 'wpx';

import ImageWidthControl from '../../_common/controls/ImageWidthControl';
import ButtonControls from './ButtonControls';
import HeadingControls from './HeadingControls';
import TaglineControls from './TaglineControls';
import ContainerControls from './ContainerControls';
import ContentControls from './ContentControls';
import IconControls from './IconControls';
import ImageControls from './ImageControls';

const Controls = (props: Props & {
	focused: string | null;
	setFocused: (value: string | null) => void;
}) => {
	return (
		<InspectorControls>
			<div className="wp-block-www-ad-responsive-controls">
				<div className="variant-controls">
					<SelectControl
						label={'Variation'}
						options={[
							{label: 'Default', value: 'default'},
							{label: 'Simple', value: 'simple'},
						]}
						value={props.attributes.variation}
						onChange={text => props.setAttributes({variation: text as Props['attributes']['variation']})}
					/>
					<InputControl
						label="Call to Action (Link)"
						labelPosition="top"
						value={props.attributes.cta || 'https://www.mindspun.com'}
						onChange={(link: string | undefined) => {
							props.setAttributes({cta: link});
						}}
					/>
				</div>
				<HeadingControls {...props} />
				<TaglineControls {...props} />
				<ButtonControls {...props} />
				<ContainerControls {...props} />
				<ContentControls {...props} />
				<IconControls {...props} />
				<ImageControls {...props} />
			</div>
		</InspectorControls>
	);
}

export default Controls;
