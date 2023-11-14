import { useBlockProps } from '@wordpress/block-editor';
import {useState} from '@wordpress/element';

import './editor.scss';
import {Props} from "./types";
import EditImage from "./EditImage";
import Controls from "./Controls";

export default function Edit(props: Props) {
	const [showMobile, setShowMobile] = useState(false);


	return (
		<div { ...useBlockProps() }>
			<Controls {...props} showMobile={showMobile} setShowMobile={setShowMobile} />
			<EditImage attributes={props.attributes} showMobile={showMobile} />
		</div>
	);
}
