import React from 'react';
import classNames from 'classnames';
import {RichText} from '@wordpress/block-editor';

import {ComponentProps} from './types';
import StylePortal from './StylePortal';

const Heading = (props: ComponentProps) => {
	const {text, ...style} = props.attributes.heading;

	const className = classNames('ad-heading', {
		'ad-focused': props.focused === 'heading'
	});

	if (!props.edit) {
		return (
			<RichText.Content tagName="h2" value={ text } />
		);
	}

	return (
		<>
			<StylePortal
				instanceId={props.attributes.instanceId}
				attributes={style}
				selector={'.ad-heading'}
			/>
			<RichText
				className={className}
				tagName="h2"
				onChange={ text => {
					const heading = {...props.attributes.heading, text};
					props.setAttributes!( {heading})
				}}
				value={ text }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
		</>
	);
}

export default Heading;
