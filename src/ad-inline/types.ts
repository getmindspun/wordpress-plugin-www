import {BaseControlProps} from "../_common/controls/BaseControls";
import {Media} from '../_common/controls/MediaControl';

export type Props = {
	attributes: {
		media: Media
		variation: 'default' | 'left';
	} & BaseControlProps['attributes']
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
