import React from 'react';
import classNames from 'classnames';
import {RichText} from '@wordpress/block-editor';

import {ComponentProps} from './types';
import Style from './Style';

const Heading = (props: ComponentProps) => {
	const className = classNames('ad-heading', {
		'ad-focused': props.focused === 'heading'
	});

	if (!props.edit) {
		return (
			<RichText.Content className={className} tagName="h2" value={ props.attributes.heading.text } />
		);
	}

	return (
		<>
			<Style
				blockId={props.attributes.blockId}
				selector={'.ad-heading'}
				attributes={props.attributes.heading}
			/>
			<RichText
				className={className}
				tagName="h2"
				onChange={ text => {
					const heading = {...props.attributes.heading, text};
					props.setAttributes!( {heading})
				}}
				value={ props.attributes.heading.text }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
		</>
	);
}

export default Heading;
