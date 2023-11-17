import {useEffect} from '@wordpress/element';
import {RichText, useBlockProps} from '@wordpress/block-editor';
import { useInstanceId } from '@wordpress/compose';

import './editor.scss';
import {Props} from './types';
import {ReactComponent as Icon} from './icons/mindspun-icon.svg';
import Controls from './Controls';
import CTA from './CTA';

export default function Edit(props: Props) {
	const blockProps = useBlockProps({
		className: `ad-basic-${props.attributes.instanceId}`
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
				<div className="ad-icon">
					<Icon/>
				</div>
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
				</div>
			</div>
			<CTA {...props.attributes} />
		</div>
	);
}
