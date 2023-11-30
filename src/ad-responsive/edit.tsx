import {useState, useEffect} from '@wordpress/element';
import {useBlockProps} from '@wordpress/block-editor';

import {useUniqueId} from 'wpx';

import './editor.scss';
import {Props} from './types';
import Controls from './controls/Controls';
import Ad from './Ad';

export default function Edit(props: Props) {
	const [focused, setFocused] = useState<string|null>(null);

	const instanceId = useUniqueId( Edit );

	const blockProps = useBlockProps({
		className: `ad-responsive-${props.attributes.instanceId} ad-variation-${props.attributes.variation}`
	});

	useEffect(() => {
		if (instanceId !== props.attributes.instanceId) {
			props.setAttributes({instanceId})
		}
	}, [instanceId, props.attributes.instanceId]);

	return (
		<div { ...blockProps } id={`ad-${instanceId}`} style={props.attributes.container}>
			<Controls {...props} setFocused={setFocused} />
			<Ad {...props} focused={focused} edit={true} />
		</div>
	);
}
