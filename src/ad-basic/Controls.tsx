import {Props} from './types';
import {InspectorControls} from '@wordpress/block-editor';
import {ControlGroup} from 'wpx';
import BaseControls from "../_common/controls/BaseControls";

const Controls = (props: Props) => {
	return (
		<InspectorControls>
			<div className="wp-block-www-ad-basic-controls">
				<BaseControls {...props} />
			</div>
		</InspectorControls>
	);
}

export default Controls;
