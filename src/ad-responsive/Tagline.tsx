import {ComponentProps} from './types';
import {RichText} from '@wordpress/block-editor';
import React from 'react';
import classNames from 'classnames';
import Style from './Style';

const Tagline = (props: ComponentProps) => {

	const className = classNames('ad-tagline', {
		'ad-focused': props.focused === 'tagline'
	})

	if (!props.edit) {
		return (
			<RichText.Content className={className} tagName="h3" value={props.attributes.tagline.text}/>
		);
	}

	return (
		<>
			<Style
				blockId={props.attributes.blockId}
				selector={'.ad-tagline'}
				attributes={props.attributes.tagline}
			/>
			<RichText
				tagName="h3"
				className={className}
				onChange={text => {
					const tagline = {...props.attributes.tagline, text};
					props.setAttributes!({tagline});
				}}
				value={props.attributes.tagline.text}
				allowedFormats={['core/bold', 'core/italic']}
			/>
		</>
	);
}

export default Tagline;
