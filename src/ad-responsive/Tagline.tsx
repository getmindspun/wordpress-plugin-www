import {ComponentProps} from './types';
import {RichText} from '@wordpress/block-editor';
import React from 'react';
import classNames from 'classnames';

const Tagline = (props: ComponentProps) => {

	const save = !props.setAttributes;
	const {text, ...style} = props.attributes.tagline;

	const className = classNames({
		'ad-focused': props.focused === 'tagline'
	})

	if (save) {
		return (
			<RichText.Content tagName="h3" value={ text } />
		);
	}

	return (
		<RichText
			tagName="h3"
			className={className}
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
