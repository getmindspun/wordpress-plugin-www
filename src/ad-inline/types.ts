export type Props = {
	attributes: {
		h2: string,
		h3: string,
		button: {
			text: string,
			link: string
		}
		media: {
			url: string | undefined,
			id: string | undefined,
			alt: string | undefined,
		}
		variation: 'default' | 'left';
	}
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
