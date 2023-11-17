import React from 'react';
import {RichText, useBlockProps} from '@wordpress/block-editor';

import {Props} from './types';
import {ReactComponent as Icon} from './icons/mindspun-icon.svg';
import CTA from './CTA';

export default function save(props: {attributes: Props['attributes'], className: string}) {
	const blockProps = useBlockProps.save({
		className: `ad-basic-${props.attributes.instanceId}`
	});
	return (
		<div { ...blockProps } style={props.attributes.container}>
			<div className="ad-main">
				<div className="ad-icon">
					<Icon/>
				</div>
				<div className="ad-content">
					<RichText.Content tagName="h2" value={ props.attributes.heading.text } />
					<RichText.Content tagName="h3" value={ props.attributes.tagline.text } />
				</div>
			</div>
			<CTA {...props.attributes} />
		</div>
	);
}
