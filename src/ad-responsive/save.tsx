import {useBlockProps} from '@wordpress/block-editor';

import {Props} from './types';
import React from 'react';
import Ad from './Ad';

export default function save(props: {attributes: Props['attributes']}) {
	const blockProps = useBlockProps.save({
		className: `ad-responsive-${props.attributes.instanceId} ad-variation-${props.attributes.variation}`,
	})

	return (
		<div { ...blockProps } style={props.attributes.container}>
			<Ad {...props} />
		</div>
	);
}
