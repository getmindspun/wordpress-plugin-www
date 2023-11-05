import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import {Props} from "./types";
import EditImage from "./EditImage";
import Controls from "./Controls";

export default function Edit(props: Props) {
	return (
		<div { ...useBlockProps() }>
			<Controls {...props} />
			<EditImage attributes={props.attributes} />
		</div>
	);
}
