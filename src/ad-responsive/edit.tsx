import {useState, useEffect} from '@wordpress/element';
import {useInstanceId} from '@wordpress/compose';
import {useBlockProps} from '@wordpress/block-editor';

import './editor.scss';
import {Props} from './types';
import Controls from './controls/Controls';
import Ad from './Ad';

export default function Edit(props: Props) {
	const [focused, setFocused] = useState<string|null>(null);

	const blockProps = useBlockProps({
		className: `ad-responsive-${props.attributes.instanceId} ad-variation-${props.attributes.variation}`
	});
	const instanceId = useInstanceId( Edit );

	useEffect(() => {
		if (!props.attributes.instanceId) {
			props.setAttributes({instanceId: instanceId.toString()})
		}
	});

	return (
		<div { ...blockProps } style={props.attributes.container}>
			<Controls {...props} setFocused={setFocused} />
			<Ad {...props} focused={focused} edit={true} />
		</div>
	);
}
