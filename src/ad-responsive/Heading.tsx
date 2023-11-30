import {Props} from './types';
import React from 'react';
import {RichText} from '@wordpress/block-editor';
import classNames from 'classnames';

const Heading = (props: {
	attributes: Props['attributes'],
	setAttributes?: Props['setAttributes'],
	focused?: string | null;
}) => {
	const save = !props.setAttributes;
	const {text, ...style} = props.attributes.heading;

	const className = classNames({
		'ad-focused': props.focused === 'heading'
	});

	if (save) {
		return (
			<RichText.Content tagName="h2" value={ text } />
		);
	}

	return (
		<RichText
			className={className}
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
