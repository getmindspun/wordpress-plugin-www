import {Media} from '../_common/controls/MediaControl';
import {BlockAlign} from 'wpx';
import {CSSProperties} from 'react';

export type Props = {
	attributes: {
		instanceId: string,
		variation: 'default' | 'left' | 'simple';
		heading: Pick<CSSProperties, 'color'> & {
			text: string,
		},
		tagline: Pick<CSSProperties, 'color'> & {
			text: string,
		}
		button: Pick<CSSProperties, 'color' | 'backgroundColor'> & {
			text: string,
			link: string,
			align: BlockAlign
		}
		buttonHover: Pick<CSSProperties, 'color' | 'backgroundColor'>
		container: Pick<CSSProperties, 'backgroundColor' | 'backgroundImage' | 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft' | 'borderRadius'>
		content: Pick<CSSProperties, 'color'> & {
			align: BlockAlign
		}
		icon: Media;
		media: Media & Pick<CSSProperties, | 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft' | 'borderRadius'>;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
