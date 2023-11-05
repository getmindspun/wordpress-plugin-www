import { useBlockProps } from '@wordpress/block-editor';
import {Props} from "./types";
import SaveImage from "./SaveImage";

export default function save(props: {attributes: Props['attributes']}) {
	return (
		<div { ...useBlockProps.save() }>
			<SaveImage {...props} />
		</div>
	);
}
