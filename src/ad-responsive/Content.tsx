import {RichText} from '@wordpress/block-editor';
import React from 'react';

import {ComponentProps, ComponentPropsWithChildren} from './types';
import Heading from './Heading';
import Tagline from './Tagline';

const Content = (props: ComponentPropsWithChildren) => {
	const {align, ...style} = props.attributes.content;
	return (
		<div className={`ad-align ad-align-${align ? align : 'none'} ad-content`} style={style}>
			<div>
				<Heading {...props} />
				<Tagline {...props} />
				{props.children}
			</div>
		</div>
	);
}

export default Content;
