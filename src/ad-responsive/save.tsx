import React from 'react';
import {useBlockProps} from '@wordpress/block-editor';

import {Props} from './types';
import Ad from './Ad';

export default function save(props: {attributes: Props['attributes']}) {
	const blockProps = useBlockProps.save({
		className: `ad-responsive-${props.attributes.blockId} ad-variation-${props.attributes.variation}`,
	})

	return (
		<div { ...blockProps } id={`wpx-${props.attributes.blockId}`}>
			<Ad {...props} />
		</div>
	);
}
