type Media = {
	url: string | undefined,
	id: string | undefined,
	alt: string | undefined,
}

export type Props = {
	attributes: {
		mobile: Media
		horizontal: Media
	}
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
