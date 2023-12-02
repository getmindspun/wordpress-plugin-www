import {BlockCSSProperties, StylePortal} from 'wpx';
import React from 'react';

const Style = (props: {blockId: string, attributes: BlockCSSProperties, selector: string}) => {
	return (
		<StylePortal
			blockId={props.blockId}
			attributes={props.attributes}
			selector={props.selector}
		/>
	);
}

export default Style;
