import {Props} from './types';
import React from 'react';
import {RichText} from '@wordpress/block-editor';

const Heading = (props: {attributes: Props['attributes'], setAttributes?: Props['setAttributes']}) => {
	const save = !props.setAttributes;
	const {text, ...style} = props.attributes.heading;

	if (save) {
		return (
			<RichText.Content tagName="h2" value={ text } />
		);
	}

	return (
		<RichText
			tagName="h2"
			style={ style }
			onChange={ text => {
				const heading = {...props.attributes.heading, text};
				props.setAttributes!( {heading})
			}}
			value={ text }
			allowedFormats={ [ 'core/bold', 'core/italic' ] }
		/>
	);
}

export default Heading;
