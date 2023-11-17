import {BaseControlProps} from "../_common/controls/BaseControls";

export type Props = {
	attributes: BaseControlProps['attributes'];
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
