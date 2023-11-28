import {Props} from './types';
import {RichText} from '@wordpress/block-editor';
import React from 'react';

const Tagline = (props: {attributes: Props['attributes'], setAttributes?: Props['setAttributes']}) => {

	const save = !props.setAttributes;
	const {text, ...style} = props.attributes.tagline;

	if (save) {
		return (
			<RichText.Content tagName="h3" value={ text } />
		);
	}

	return (
		<RichText
			tagName="h3"
			style={style}
			onChange={ text => {
				const tagline = {...props.attributes.tagline, text};
				props.setAttributes!({tagline});
			}}
			value={ text }
			allowedFormats={ [ 'core/bold', 'core/italic' ] }
		/>
	);
}

export default Tagline;
