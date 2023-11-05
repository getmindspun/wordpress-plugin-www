export type Props = {
	attributes: {
		h2: string,
		h3: string,
		button: {
			text: string,
			link: string
		}
	}
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
