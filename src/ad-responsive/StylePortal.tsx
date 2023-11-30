import {BlockCSSProperties, buildCSS, Portal} from 'wpx';
import React from 'react';

const StylePortal = (props: {
	instanceId: string,
	attributes: BlockCSSProperties
	selector: string
}) => {
	const selector = `#ad-${props.instanceId} ${props.selector}`;
	return (
		<Portal selector={'head'} tagName={'style'} >
			{buildCSS(selector, props.attributes)}
		</Portal>
	);
}

export default StylePortal;
