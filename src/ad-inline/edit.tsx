import {useEffect} from '@wordpress/element';
import {useInstanceId} from '@wordpress/compose';
import {RichText, useBlockProps} from '@wordpress/block-editor';

import './editor.scss';
import {ReactComponent as Image} from './icons/no-image.svg';
import {Props} from './types';
import Controls from './Controls';
import CTA from './CTA';

export default function Edit(props: Props) {
	const blockProps = useBlockProps({
		className: `ad-inline-${props.attributes.instanceId} variation-${props.attributes.variation}`
	});
	const instanceId = useInstanceId( Edit );

	useEffect(() => {
		if (!props.attributes.instanceId) {
			props.setAttributes({instanceId: instanceId.toString()})
		}
	});

	return (
		<div { ...blockProps } style={props.attributes.container}>
			<Controls {...props} />
			<div className="ad-main">
				<div className="ad-content">
					<RichText
						tagName="h2"
						style={props.attributes.heading}
						onChange={ text => {
							const heading = {...props.attributes.heading, text};
							props.setAttributes( {heading})
						}}
						value={ props.attributes.heading.text }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
					/>
					<RichText
						tagName="h3"
						style={props.attributes.tagline}
						onChange={ text => {
							const tagline = {...props.attributes.tagline, text};
							props.setAttributes( {tagline});
						}}
						value={ props.attributes.tagline.text }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
					/>
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
