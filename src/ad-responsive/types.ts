import {BlockAlign, BlockCSSProperties, Media} from 'wpx';
import React, {CSSProperties} from 'react';

export type Props = {
	attributes: {
		blockId: string,
		variation: 'default' | 'simple' | 'images';
		cta: string,
		heading: BlockCSSProperties & {
			text: string,
		},
		tagline: BlockCSSProperties & {
			text: string,
		}
		button: BlockCSSProperties & {
			text: string,
			align: BlockAlign,
			colorHover: CSSProperties['color'],
			backgroundColorHover: CSSProperties['backgroundColor']
		}
		container: BlockCSSProperties & {
			reversed: boolean | undefined
		}
		content: BlockCSSProperties & {
			align: BlockAlign | undefined
		}
		icon: BlockCSSProperties & {
			show: 'always' | 'desktop' | 'never';
			url: Media['url'],
			alt: Media['alt'],
			mediaWidth: Media['width'];
			mediaHeight: Media['height'];
			scaledWidth: number | undefined
			scaledHeight: number | undefined
		};
		media: Media & BlockCSSProperties & {
			show: 'always' | 'desktop' | 'never';
			url: Media['url'],
			alt: Media['alt'],
			mediaWidth: Media['width'];
			mediaHeight: Media['height'];
			scaledWidth: number | undefined
			scaledHeight: number | undefined
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
	children?: React.ReactNode
}
