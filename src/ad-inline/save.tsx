import {RichText, useBlockProps} from '@wordpress/block-editor';
import {ReactComponent as Image} from './icons/no-image.svg';
import {Props} from './types';
import React from 'react';
import CTA from './CTA';

export default function save(props: {attributes: Props['attributes']}) {
	const blockProps = useBlockProps.save({
		className: `ad-inline-${props.attributes.instanceId} variation-${props.attributes.variation}`
	})

	return (
		<div { ...blockProps }>
			<div className="ad-main">
				<div className="ad-content">
					<RichText.Content tagName="h2" value={ props.attributes.heading.text } />
					<RichText.Content tagName="h3" value={ props.attributes.tagline.text } />
					<CTA {...props.attributes} />
				</div>
			</div>
			<div className="ad-img">
				{ !!props.attributes.media.url ?
					<img
						src={ props.attributes.media.url }
						alt={ props.attributes.media.alt }
					/> :
					<Image />
				}
			</div>
		</div>
	);
}
