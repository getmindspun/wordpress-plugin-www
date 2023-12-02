import {Media} from '../_common/controls/MediaControl';
import {BlockAlign} from 'wpx';
import React, {CSSProperties} from 'react';

export type Props = {
	attributes: {
		blockId: string,
		variation: 'default' | 'left' | 'simple';
		heading: Pick<CSSProperties, 'color' | 'margin' | 'padding'> & {
			text: string,
		},
		tagline: Pick<CSSProperties, 'color'> & {
			text: string,
		}
		button: Pick<CSSProperties, 'color' | 'backgroundColor'> & {
			text: string,
			link: string,
			align: BlockAlign,
			colorHover: CSSProperties['color'],
			backgroundColorHover: CSSProperties['backgroundColor']
		}
		container: Pick<CSSProperties, 'backgroundColor' | 'backgroundImage' | 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft' | 'borderRadius'>
		content: Pick<CSSProperties, 'color'> & {
			align: BlockAlign | undefined
		}
		icon: Media & Pick<CSSProperties, | 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft' | 'borderRadius'> & {
			show: 'always' | 'desktop' | 'never';
			scaledWidth: number | undefined
		};
		media: Media & Pick<CSSProperties, | 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft' | 'borderRadius'> & {
			show: 'always' | 'desktop' | 'never';
			scaledWidth: number | undefined
		};
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}

export interface ComponentProps {
	attributes: Props['attributes'];
	setAttributes?: Props['setAttributes'];
	edit?: boolean;
	focused?: string|null;
}

export interface ComponentPropsWithChildren extends ComponentProps {
	children: React.ReactNode
}
