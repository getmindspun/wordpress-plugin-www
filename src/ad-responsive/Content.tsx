import {RichText} from '@wordpress/block-editor';
import React from 'react';

import {ComponentProps, ComponentPropsWithChildren} from './types';
import Heading from './Heading';
import Tagline from './Tagline';
import classNames from 'classnames';
import Style from './Style';

const Content = (props: ComponentPropsWithChildren) => {
	const className = classNames('ad-content', {
		'ad-focused': props.focused === 'content'
	});

	return (
		<div>
			{props.edit && <Style
				blockId={props.attributes.blockId}
				selector={'.ad-content'}
				attributes={props.attributes.content}
			/>}
			<div className={className}>
				<Heading {...props} />
				<Tagline {...props} />
				{props.children}
			</div>
		</div>
	);
}

export default Content;
