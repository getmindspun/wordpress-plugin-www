import {CSSProperties} from 'react';

export type Props = {
	attributes: {
		h2: string,
		h3: string,
		button: Pick<CSSProperties, 'color' | 'backgroundColor'> & {
			text: string,
			link: string
		}
		buttonHover: Pick<CSSProperties, 'color' | 'backgroundColor'>
		container: Pick<CSSProperties, 'backgroundColor' | 'backgroundImage'>
	}
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
