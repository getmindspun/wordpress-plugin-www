import {useState, useEffect} from '@wordpress/element';
import {useBlockProps} from '@wordpress/block-editor';

import {useBlockId} from 'wpx';

import './editor.scss';
import {Props} from './types';
import Controls from './controls/Controls';
import Ad from './Ad';

export default function Edit(props: Props & { clientId: string }) {
	const [focused, setFocused] = useState<string | null>(null);

	const blockId = useBlockId(props.attributes.blockId, props.clientId)

	const blockProps = useBlockProps({
		className: `ad-responsive-${blockId} ad-variation-${props.attributes.variation}`
	});

	useEffect(() => {
		if (blockId !== props.attributes.blockId) {
			props.setAttributes({blockId})
		}
	}, [blockId, props.attributes.blockId]);

	return (
		<>
			<Controls {...props} setFocused={setFocused}/>
			<div {...blockProps} id={`wpx-${blockId}`}>
				<Ad {...props} focused={focused} edit={true}/>
			</div>
		</>
	);
}
