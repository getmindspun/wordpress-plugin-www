import {Media} from "../_common/controls/MediaControl";

export type Props = {
	attributes: {
		mobile: Media
		horizontal: Media
	}
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
