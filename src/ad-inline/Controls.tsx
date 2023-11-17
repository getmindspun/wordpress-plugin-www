import React from 'react';
import {Props} from './types';
import {SelectControl} from '@wordpress/components';
import {InspectorControls, MediaPlaceholder} from '@wordpress/block-editor';
import BaseControls from '../_common/controls/BaseControls';
import MediaControl from '../_common/controls/MediaControl';

const Controls = (props: Props) => {

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
							{ label: 'Left Image', value: 'left' },
						] }
						value={props.attributes.variation}
						onChange={text => props.setAttributes({variation: text as Props['attributes']['variation']})}
					/>
				</div>
				<BaseControls {...props} />
				<MediaControl
						title={'Image'}
						attributes={ props.attributes.media }
						setAttributes={ media => {
							setImageAttributes(media as unknown as Props['attributes']['media']);
						}}
				/>
			</div>
		</InspectorControls>
	);
}

export default Controls;
